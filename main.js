let input = document.querySelector('#input-field');
const list = document.querySelector('#list');
function createTask(){
    const listItem = document.createElement('li');
    const divTask = document.createElement('div');
    const checkbox = document.createElement('input');
    const info = document.createElement('p');
    const features = document.createElement('div');
    const edit = document.createElement('img');
    const deleteTask = document.createElement('img');
    const saveBtn =document.createElement('img')

    listItem.classList.add('todo-tasks');
    divTask.classList.add('task');
    checkbox.classList.add('checkbox');
    features.className = 'features';
    edit.className = 'pencil';
    deleteTask.className = 'delete';
    saveBtn.className='save';

    list.appendChild(listItem);
    listItem.appendChild(divTask);    
    divTask.appendChild(checkbox);
    divTask.appendChild(info);
    listItem.append(divTask);    
    listItem.append(features);
    features.append(edit);
    features.append(saveBtn);
    features.append(deleteTask);

    checkbox.type='checkbox';
    info.innerHTML=input.value;
    edit.src = 'images/pencil.png';
    deleteTask.src = 'images/delete-icon.png';
    saveBtn.src='images/save.png';
    saveBtn.style.display='none';
    
    edit.addEventListener('click', function() {
        info.contentEditable = true;
        info.classList.toggle('paragraph');
        edit.style.display='none';
        saveBtn.style.display='inline';
       
      } );
      saveBtn.addEventListener('click',(e) =>  {
        info.contentEditable=false;
        info.classList.toggle('paragraph');
        edit.style.display='inline';
        saveBtn.style.display='none';

      });
    deleteTask.addEventListener('click', (e) => {
        listItem.remove();
    });

}

let addButton = document.querySelector('#add');
addButton.addEventListener('click',(e)=>{
    e.preventDefault();
    if(input.value===""){
        alert("Input should not be empty");
        return;
    }
    createTask();
    input.value="";
});

let removeButton = document.querySelector('#remove-button');
removeButton.addEventListener('click', (e) => {
    const checkboxesList = document.getElementsByClassName('checkbox');
    for (var i=0; i<checkboxesList.length; i++){
        if (checkboxesList[i].checked){
            const checkBox = document.querySelector('li'); 
            checkBox.remove();
        }
    }
});