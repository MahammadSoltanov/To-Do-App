const taskContainer = document.querySelector('.tasks-container');
new Sortable(taskContainer);
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
    task.className = 'task';    
    const taskText = document.createElement('input');
    taskText.type = 'text';
    const xButton = document.createElement('img');
    
    xButton.addEventListener('click', deleteTask);
    taskText.addEventListener('keyup', confirmTask);

    taskText.className = 'task-text';
    xButton.className = 'x-button';
    
    task.appendChild(taskText);
    task.appendChild(xButton);
    taskContainer.appendChild(task);    
}

function confirmTask(event)
{    
    if(event.keyCode == 13)
        event.target.readOnly = true;
    
}

function deleteTask(event)
{        
    if(event.target.parentElement.firstChild.readOnly == true)
        event.target.parentElement.remove();
        
    else if(event.target.parentElement.firstChild.readOnly == false)
        event.target.parentElement.firstChild.value = "";
    
}
//#endregion
