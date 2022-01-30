const STATUS = { To_Do: 'To Do', In_Progress: 'In Progress', Done: 'Done', };
const list = { 'create a new practice task': 'In Progress', 'make a bad': 'Done', 'write a post': 'To Do', };
function changeStatus(task, status) {
    return (list[task] = status);
}
function addTask(task) {
    return (list[task] = STATUS.To_Do);
}
function deleteTask(task) {
    return (delete list[task]);
}
function showList() {
    for (let write in STATUS) {
        let onScreen = `${STATUS[write]}:`;
        for (let task in list) {
            if (list[task] == STATUS[write]) {
                onScreen += `\n${task}`;
            }
        }
        (onScreen == `${STATUS[write]}:`) ? console.log(`${onScreen}\n-`) : console.log(onScreen);
    }
}





changeStatus('create a new practice task', 'To Do');
changeStatus('make a bad', 'To Do');
changeStatus('write a post', 'In Progress');
showList();
addTask('dominate world');
showList();