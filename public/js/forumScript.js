const postBtn = document.querySelector('.submitMessageBtn');
const input = document.querySelector('.message');
const forum = document.querySelector('.posts');
const form = document.querySelector('.form');
const userNameP = document.querySelector('#username')
form.addEventListener('submit', async (e) => {
    const username = userNameP.textContent;
    const message = input.value;
    const messageLi = document.createElement('li');
    const config = {
        method: 'post',
        url: '/testing',
        data: {
            message
        }
    }
    let innerText = message.concat(' - ', username);
    innerText = innerText.replace(/(\r\n|\n|\r)/gm, " ");
    messageLi.innerText = innerText;
    forum.appendChild(messageLi);
    input.value = "";
    e.preventDefault();
    await axios(config);

})
