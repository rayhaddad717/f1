const postBtn = document.querySelector('.submitMessageBtn');
const input = document.querySelector('.message');
const forum = document.querySelector('.posts');
const form = document.querySelector('.form')
form.addEventListener('submit', (e) => {
    const message = input.value;
    const messageLi = document.createElement('li');
    messageLi.innerText = message;
    forum.appendChild(messageLi);
    input.value = "";
    e.preventDefault();

})