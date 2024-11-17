const inputbox = document.getElementById('inputbox');
const btnBox = document.getElementById('btnBox');
const ul = document.getElementById('ul');

let editTodo = null;


const addItem = () => {
    const inputText = inputbox.value.trim();
    if(inputText.length <= 0){
        alert('You must write something in your todo list.!')
        return false;
    }

    if(btnBox.value === "Edit"){
        editTodo.target.previousElementSibling.innerHTML = inputText;
        btnBox.value = 'Add';
        inputbox.value = '';

    }
    else{
    const li = document.createElement("li")
    const p = document.createElement("p")
    p.innerText = inputText
    li.appendChild(p)
 


    const editbtn = document.createElement('button')
    editbtn.innerHTML = 'edit';
    editbtn.classList.add('bttn','E-btn')
    li.appendChild(editbtn);

    const deletbtn = document.createElement('button')
    deletbtn.innerHTML = 'remove';
    deletbtn.classList.add('bttn','R-btn')
    li.appendChild(deletbtn);

    ul.appendChild(li)
    inputbox.value = ''

    saveLocalTodos(inputText);
    }

}

const updateTodo = (e)=>{
    if(e.target.innerHTML === 'remove'){
        ul.removeChild(e.target.parentElement)
    }
    if(e.target.innerHTML === 'edit'){
        inputbox.value = e.target.previousElementSibling.innerHTML;
        inputbox.focus();
        btnBox.value = 'Edit';
        editTodo = e;
    }

}


btnBox.addEventListener('click', addItem)
ul.addEventListener('click', updateTodo)