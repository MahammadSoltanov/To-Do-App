const taskContainer = document.querySelector('.tasks-container');
createNewTask();

//#region SortButtonLogic
const sortImage = document.querySelector('.sort-button');
sortImage.addEventListener('mouseover', changeToBlack);
sortImage.addEventListener('mouseout', changeToGray);
sortImage.addEventListener('click', sortAndChangeImage);

function changeToBlack()
{
    if(sortImage.src == 'http://127.0.0.1:5500/Images/sortAscendingGray.svg')
    sortImage.src = '/Images/sortAscendingBlack.svg';
    
    else if(sortImage.src == 'http://127.0.0.1:5500/Images/sortDescendingGray.svg')
    sortImage.src = '/Images/sortDescendingBlack.svg';
}

function changeToGray()
{
    if(sortImage.src == 'http://127.0.0.1:5500/Images/sortAscendingBlack.svg')
    sortImage.src = '/Images/sortAscendingGray.svg';
    
    else if(sortImage.src == 'http://127.0.0.1:5500/Images/sortDescendingBlack.svg')
    sortImage.src = '/Images/sortDescendingGray.svg';
}

function sortAndChangeImage()
{
    const tasksCollection = document.querySelectorAll('.task');
    const tasksArray = [];
    tasksArray.push(...tasksCollection);    
    console.log(tasksCollection);
    console.log(tasksCollection[0].firstChild);
    console.log(tasksCollection[1]);
    console.log(tasksCollection[1].firstChild);
    
    //Change Image
    if(sortImage.src == 'http://127.0.0.1:5500/Images/sortAscendingBlack.svg')
    {
        sortImage.src = '/Images/sortDescendingBlack.svg';
        
        tasksArray.sort((a,b) =>
        {                     
            if(a.firstChild.value < b.firstChild.value)            
                return -1;
                        
            else if(a.firstChild.value > b.firstChild.value)
                return 1;

            return 0;
        });
        
        taskContainer.replaceChildren(...tasksArray);
        
        return 0;        
    }

    else if(sortImage.src == 'http://127.0.0.1:5500/Images/sortDescendingBlack.svg')
    {        
        sortImage.src = '/Images/sortAscendingBlack.svg';

        tasksArray.sort((a,b) =>
        {                     
            if(a.firstChild.value > b.firstChild.value)            
                return -1;
                        
            else if(a.firstChild.value < b.firstChild.value)
                return 1;

            return 0;
        });

        taskContainer.replaceChildren(...tasksArray);
        
        return 0;
    }  
}
//#endregion

//#region AddButtonLogic
const addButton = document.querySelector('.add-button-container');
addButton.addEventListener('click', createNewTask);

function createNewTask()
{    
    const task = document.createElement('div');
    const taskText = document.createElement('input');
    taskText.type = 'text';
    const xButton = document.createElement('img');

    task.className = 'task';
    taskText.className = 'task-text';
    xButton.className = 'x-button';
    
    task.appendChild(taskText);
    task.appendChild(xButton);
    taskContainer.appendChild(task);    
}
//#endregion


