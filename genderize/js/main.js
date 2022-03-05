import {
    serverResult,
} from './module.js';

const elem = document.body.querySelector('form');
elem.addEventListener('submit', nameInput);

function nameInput(event) {
    event.preventDefault();
    const firstName = inputName.value;
    serverResult(firstName);
    inputName.value = '';
}



