{
    const list = { 'create a new practice task': 'In Progress', 'make a bad': 'Done', 'write a post': 'To Do', };
    const status = { 'To Do': 'Todo:', 'In Progress': 'In Progress:', Done: 'Done:', };
    function changeStatus(task, status) {
        return (list[task] = status);
    }
    function addTask(task) {
        return (list[task] = 'To Do');
    }
    function deleteTask(task) {
        return (delete list[task]);
    }
    function showList(list) {
        for (let write in status) {
            console.log(status[write]);
            let count = 0;
            for (let task in list) {
                if (list[task] == write) {
                    console.log('"' + task + '"');
                    count++;
                }
            }
            if (count == 0) console.log('-');
        }
    }
    changeStatus('create a new practice task', 'To Do');
    changeStatus('make a bad', 'To Do');
    changeStatus('write a post', 'In Progress');
    showList(list);
}