const page = document.documentElement;
const button = document.querySelector('#switch button');
const span = document.querySelector('#switch span');

function changeTheme() {
    page.classList.toggle('light');
}

span.addEventListener('click', changeTheme);
button.addEventListener('click', changeTheme);