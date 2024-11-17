const inputbox = document.getElementById('inputbox');
const btnBox = document.getElementById('btnBox');
const ul = document.getElementById('ul');

const addItem = () => {
    const inputText = inputbox.value.trim();
    if(inputText.length <= 0){
        alert('You must write something in your todo list.!')
        
    }
    const li = document.createElement("li")
    const p = document.createElement("p")
    p.innerText = inputText
    li.appendChild(p)
    ul.appendChild(li)
    inputbox.value = ''


    const editbtn = document.createElement('button')
    editbtn.innerHTML = 'edit';
    editbtn.classList.add('bttn','E-btn')
    li.appendChild(editbtn);

    const deletbtn = document.createElement('button')
    deletbtn.innerHTML = 'remove';
    deletbtn.classList.add('bttn','R-btn')
    li.appendChild(deletbtn);


}

const updateTodo = ()=>{

}

btnBox.addEventListener('click', addItem)

ul.addEventListener('click', updateTodo)