{
    const list={
        'create a task': 'In Progress',
        'make a bad': 'Done',
        'write a post': 'To Do', 
    };
    function changeStatus(task,status){
        return(list[task]=status);
        }
        function addTask(task){
        return(list[task]='To Do');
        }
        function deleteTask(task){
        return(delete list[task]);
        }
        function showList(list){
        console.log('Todo:');
        let count=0;
        for (let task in list){
            if (list[task]=='To Do')
            {
            console.log('"'+task+'",');
            count++;
            }            
        }
        if (count==0) console.log('-');
        console.log('In progress:');
        count=0;
        for (let task in list){
            if (list[task]=="In Progress")
            {
            console.log('"'+task+'"');
            count++;
            }         
        }
        if (count==0) console.log('-');
        console.log('Done:');
        count=0;
        for (let task in list){
            if (list[task]=='Done')
            {
            console.log('"'+task+'"');
            count++;
            }
        }
        if (count==0) console.log('-');
        }
    changeStatus('create a task','To Do');
    changeStatus('make a bad','To Do');
    changeStatus('write a post','In Progress');
    addTask('go home');
    showList(list);
    deleteTask('go home');
    showList(list);
}
