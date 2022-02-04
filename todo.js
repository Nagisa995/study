let defaultSpecifications = { status: 'To Do', priority: 'low' };
let specifications = [['status', 'To Do', 'In progress', 'Done'], ['priority', 'low', 'high']]
let list = [{ name: 'create a post', status: 'In progress', priority: 'low' }, { name: 'test', status: 'Done', priority: 'high' }];

function showBy(parameter) {
    listParameter = specifications.find(item => item[0] === parameter.toLowerCase());
    if (parameter.toLowerCase() in defaultSpecifications) {
        for (let index = 1; index < listParameter.length; index++) {
            listTask = list.filter(item => item[listParameter[0]] === listParameter[index]).reduce((display, task) => display += `\n${task.name}`, `${listParameter[index]}:`);
            console.log(listTask === `${listParameter[index]}:` ? listTask += '\n-' : listTask);
        }
    }
    else console.log('showBy:fail');
};
function addTask(task) {
    list.push(Object.assign({ name: task }, defaultSpecifications));
}
function changeParameter(task, parameter, change) {
    taskIndex = list.findIndex(element => element.name === task);
    if (taskIndex > -1) specifications.find(element => element[0] == parameter.toLowerCase()).includes(change) ? list[taskIndex][parameter.toLowerCase()] = change : console.log('changeParameter:fail');
    else console.log('changeParameter:fail');
}
function deleteTask(task) {
    ((index = list.findIndex(element => element.name === task)) > -1) ? list.splice(index, 1) : console.log('deleteTask:fail');
}




//Please do not pay attention, I experimented here:)

//addTask('take over the world');
//changeDefaultParameter('status', 'In progress');
//addTask('pour tea');
//showBy('STATUS');
//changeParameter('pour tea', 'Status', 'Done');
//showBy('Status');
//deleteTask('pour tea');
//showBy('PrioRity');
//function changeDefaultParameter(parameter, status) {
//    (specifications.find(element => element[0] === parameter.toLowerCase()).includes(status)) ? defaultSpecifications[parameter.toLowerCase()] = status : console.log('changeDefaultParameter:fail');
//}
//function addParameter(parameter, status) {
//    specifications.push(`${parameter},${status}`.split(','));
//    defaultSpecifications[parameter] = specifications[specifications.length - 1][1];
//    for (let element of list) {
//        element[parameter] = defaultSpecifications[parameter];
//    }
//}
//function deleteParameter(parameter) {
//    if (parameter.toLowerCase() in defaultSpecifications) {
//        delete defaultSpecifications[parameter.toLowerCase()];
//        specifications.splice(specifications.findIndex(element => element[0] === parameter.toLowerCase()), 1);
//        for (let element of list) {
 //           delete element[parameter.toLowerCase()];
//        }
//    }
//    else console.log('deleteParameter:fail');
//}
//addParameter('urgency', '1-2 h,4-12 h,12+');
//changeParameter('take over the world', 'urgency', '12+');
//changeParameter('test', 'urgency', '4-12 h');
//showBy('UrGency');
//deleteParameter('URGENCY');
//showBy('UrGency');