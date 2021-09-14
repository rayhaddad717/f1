const postBtn = document.querySelector('.submitMessageBtn');
const input = document.querySelector('.message');
const forum = document.querySelector('.posts');
const form = document.querySelector('.form')
form.addEventListener('submit', async (e) => {
    const message = input.value;
    const messageLi = document.createElement('li');
    const config = {
        method: 'post',
        url: '/testing',
        data: {
            message
        }
    }
    messageLi.innerText = message;
    forum.appendChild(messageLi);
    input.value = "";
    e.preventDefault();
    await axios(config);

})
