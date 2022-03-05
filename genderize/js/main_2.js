const elem = document.body.querySelector('form');
elem.addEventListener('submit', elementOnUI);

const serverUrl = 'https://api.genderize.io';

function elementOnUI(event) {
    event.preventDefault();
    const name = inputName.value;
    const url = `${serverUrl}?name=${name}`;
    serverRequest(url)
        .then(serverAnswer => addResultOnUI(serverAnswer));
    inputName.value = '';
}

function serverRequest(url) {
    return fetch(url).then(response => response.json());
}

function addResultOnUI(serverAnswer) {
    try {
        if (serverAnswer.gender)
            throw new Error(`${serverAnswer.name} gender cannot be determined`);
        const text = `${serverAnswer.name} gender is ${serverAnswer.gender}`;
        const answerOnUi = document.createElement('li');
        answerOnUi.classList.add('resul_li');
        answerOnUi.textContent = text;
        showList.append(answerOnUi);
    }
    catch (err) {
        alert(err.message);
    }
}