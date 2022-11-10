const currentSiteUrl = document.URL; //needed for correct image source value
const taskContainer = document.querySelector('.tasks-container'); //container of all tasks
new Sortable(taskContainer); //allowind drag and drop
createNewTask();//creating default task

//#region SortButtonLogic
const sortImage = document.querySelector('.sort-button');
sortImage.addEventListener('mouseover', changeToBlack);
sortImage.addEventListener('mouseout', changeToGray);
sortImage.addEventListener('click', sortAndChangeImage);

function changeToBlack()
{
    if(sortImage.src == currentSiteUrl + 'Images/sortAscendingGray.svg')
    sortImage.src = '/Images/sortAscendingBlack.svg';
    
    else if(sortImage.src == currentSiteUrl + 'Images/sortDescendingGray.svg')
    sortImage.src = '/Images/sortDescendingBlack.svg';
}

function changeToGray()
{
    if(sortImage.src == currentSiteUrl + 'Images/sortAscendingBlack.svg')
    sortImage.src = '/Images/sortAscendingGray.svg';
    
    else if(sortImage.src == currentSiteUrl + 'Images/sortDescendingBlack.svg')
    sortImage.src = '/Images/sortDescendingGray.svg';
}

function sortAndChangeImage()
{
    const tasksCollection = document.querySelectorAll('.task');
    const tasksArray = [];
    tasksArray.push(...tasksCollection);            

    //Change Image
    if(sortImage.src == currentSiteUrl + 'Images/sortAscendingBlack.svg')
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

    else if(sortImage.src == currentSiteUrl + 'Images/sortDescendingBlack.svg')
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
    taskText.addEventListener('keyup', confirmTask);
    taskText.className = 'task-text';
    
    const xButton = document.createElement('img');
    xButton.addEventListener('click', deleteTask);
    xButton.className = 'x-button';
    
    task.appendChild(taskText);
    task.appendChild(xButton);
    taskContainer.appendChild(task);  
    taskContainer.scrollTop = taskContainer.scrollHeight;
    
    
}

function confirmTask(event)
{
    if(event.keyCode == 13) 
    {
        event.target.readOnly = true;
        createNewTask();
    }
}

function deleteTask(event)
{            
    if(event.target.parentElement.firstChild.readOnly == true && taskContainer.childElementCount > 1)    
        event.target.parentElement.remove();

    else if(event.target.parentElement.firstChild.readOnly == false)
        event.target.parentElement.firstChild.value = "";    
}
//#endregion
