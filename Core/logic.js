const sortImage = document.querySelector('.sort-button');
sortImage.addEventListener('mouseover', (event) =>{sortImage.src = '/Images/sortAscendingBlack.svg';});
sortImage.addEventListener('mouseout', (event) =>{sortImage.src = '/Images/sortAscendingGray.svg';});

const xImage = document.querySelector('.x-button');


const addButton = document.querySelector('.add-button-container');
const taskContainer = document.querySelector('.tasks-container');

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



