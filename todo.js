const Status = { To_Do: 'To Do', In_Progress: 'In Progress', Done: 'Done', };
const list = { 'create a new practice task': Status.In_Progress, 'make a bad': Status.Done, 'write a post': Status.To_Do, };
function changeStatus(task, status) {
    return (list[task] = status);
}
function addTask(task) {
    return (list[task] = Status.To_Do);
}
function deleteTask(task) {
    return (delete list[task]);
}
function showList() {
    for (let write in Status) {
        let onScreen = `${Status[write]}:`;
        for (let task in list) {
            if (list[task] == Status[write]) {
                onScreen += `\n${task}`;
            }
        }
        (onScreen == `${Status[write]}:`) ? console.log(`${onScreen}\n-`) : console.log(onScreen);
    }
}





changeStatus('create a new practice task', 'To Do');
changeStatus('make a bad', 'To Do');
changeStatus('write a post', 'In Progress');
showList();
addTask('dominate world');
showList();