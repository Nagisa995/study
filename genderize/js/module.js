export async function serverResult(name) {
    const serverUrl = 'https://api.genderize.io';
    const url = `${serverUrl}?name=${name}`;
    let serverRequest = await fetch(url);
    let serverAnswer = await serverRequest.json();
    if (serverAnswer.gender === null) {
        alert(`${name} gender cannot be determined`);
        return
    }
    let result = `Name:${name} Gender:${serverAnswer.gender}`;
    addResultOnUI(result);
}
function addResultOnUI(answer) {
    let answerOnUi = document.createElement('li');
    answerOnUi.classList.add('resul_li');
    answerOnUi.textContent = answer;
    showList.append(answerOnUi);
}