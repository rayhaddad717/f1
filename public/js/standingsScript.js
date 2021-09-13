const container = document.querySelector('#tableContainer');
const getConstructorsStandings = async () => {
    const { data: standings } = await axios.get('https://ergast.com/api/f1/current/constructorstandings.json');
    return standings.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
}

const createStandingsTable = () => {
    const standingsTable = document.createElement('table');
    standingsTable.classList.add('table');
    standingsTable.classList.add('standingsTable');

    const tHead = document.createElement('thead');
    const rowHeader = document.createElement('tr');
    const headers = [];
    for (let i = 0; i < 5; i++) {
        headers.push(document.createElement('th'))
    }
    headers[0].innerText = "position";
    headers[1].innerText = "constructor";
    headers[2].innerText = "wins";
    headers[3].innerText = "points";
    for (let header of headers) {
        rowHeader.appendChild(header);
    }

    tHead.appendChild(rowHeader)
    standingsTable.appendChild(tHead);
    container.appendChild(standingsTable)
    document.body.appendChild(container);
};

const addConstructor = (constructor) => {
    const row = document.createElement('tr');
    const tds = [];
    for (let i = 0; i < 5; i++) {
        tds.push(document.createElement('td'));
    }
    console.log(tds)
    tds[0].innerText = constructor.position;
    tds[1].innerText = constructor.Constructor.name;
    tds[2].innerText = constructor.wins;
    tds[3].innerText = constructor.points;
    for (let td of tds) {
        row.appendChild(td);
    }
    return row;
}

const addConstructors = (constructors) => {
    const tBody = document.createElement('tbody');
    for (let constructor of constructors) {
        const row = addConstructor(constructor);
        tBody.appendChild(row);
    }
    const standingsTable = document.querySelector('.standingsTable');
    standingsTable.appendChild(tBody);
}

const initializeTable = async () => {
    createStandingsTable();
    const constructors = await getConstructorsStandings();
    addConstructors(constructors);
}

// add driver standings
const getDriversStandings = async () => {
    const { data: standings } = await axios.get('https://ergast.com/api/f1/current/driverStandings.json');
    return standings.MRData.StandingsTable.StandingsLists[0].DriverStandings;
}

const createDriverStandingsTable = () => {
    const driverStandingsTable = document.createElement('table');
    driverStandingsTable.classList.add('table');
    driverStandingsTable.classList.add('driversTable');

    const tHead = document.createElement('thead');
    const rowHeader = document.createElement('tr');
    const headers = [];
    for (let i = 0; i < 6; i++) {
        headers.push(document.createElement('th'))
    }
    headers[0].innerText = "position";
    headers[1].innerText = "firstName";
    headers[2].innerText = "lastName";
    headers[3].innerText = "constructor";
    headers[4].innerText = "wins";
    headers[5].innerText = "points";
    for (let header of headers) {
        rowHeader.appendChild(header);
    }

    tHead.appendChild(rowHeader)
    driverStandingsTable.appendChild(tHead);
    container.appendChild(driverStandingsTable)
    document.body.appendChild(container);
};

const addDriver = (driver) => {
    const row = document.createElement('tr');
    const tds = [];
    for (let i = 0; i < 6; i++) {
        tds.push(document.createElement('td'));
    }
    console.log(tds)
    tds[0].innerText = driver.position;
    tds[1].innerText = driver.Driver.givenName;
    tds[2].innerText = driver.Driver.familyName;
    tds[3].innerText = driver.Constructors[0].name;
    tds[4].innerText = driver.wins;
    tds[5].innerText = driver.points;

    for (let td of tds) {
        row.appendChild(td);
    }
    return row;
}

const addDrivers = (drivers) => {
    const tBody = document.createElement('tbody');
    for (let driver of drivers) {
        const row = addDriver(driver);
        tBody.appendChild(row);
    }
    const driverStandingsTable = document.querySelector('.driversTable');
    driverStandingsTable.appendChild(tBody);
}

const initializeDriverTable = async () => {
    createDriverStandingsTable();
    const drivers = await getDriversStandings();
    addDrivers(drivers);
}


//addDriverStandings
initializeDriverTable()
//addConstrutorStandings
initializeTable()
