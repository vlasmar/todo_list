let input = document.querySelector('#input-field');
function task(){
    const list = document.querySelector('#list');
    const listItem = document.createElement('li');
    listItem.classList.add('todo-tasks');
    list.appendChild(listItem);
    //const todoTaskItem = document.createElement('div');
    //todoTaskItem.classList.add('todo-tasks');
    //listItem.appendChild(todoTaskItem);
    const divTask = document.createElement('div');
    divTask.classList.add('task');
    listItem.appendChild(divTask);
    const checkbox = document.createElement('input');
    checkbox.type="checkbox";
    checkbox.classList.add('checkbox');
    listItem.appendChild(checkbox);
    const info = document.createElement('p');
    info.innerHTML=input.value;
    listItem.appendChild(info);
}
let addButton = document.querySelector('#add');
addButton.addEventListener('click',task);

