function whatGender(event) {
    event.preventDefault();
    let firstName = this.firstElementChild.value;
    let serverUrl = 'https://api.genderize.io';
    let url = `${serverUrl}?name=${firstName}`;
    loadJsonAndReturnGender(url)
        .then(answer => {
            let outGender = document.createElement('p');
            outGender.className = 'listString';
            outGender.innerHTML = `${firstName} is a ${answer.gender} name`;

            alert(answer.gender);

            if (answer.gender) {
                this.after(outGender);
            } else {
                outGender.innerHTML = `${firstName} is not found`;
                this.after(outGender);
            }
        })

    this.firstElementChild.value = "";
}


function loadJsonAndReturnGender(url) {
    return fetch(url)
        .then(response => response.json())
}

formName.addEventListener('submit', whatGender);