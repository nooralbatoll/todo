let addtodo = document.getElementById("button");
let todolist = document.getElementById("todo");
let input = document.getElementById("input");

addtodo.addEventListener('click',function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('pStyle');
    paragraph.innerText=input.value;
    todolist.appendChild(paragraph);
    input.value="";

    paragraph.addEventListener('click',function(){
    paragraph.style.textDecoration="line-through";
    paragraph.style.color="red";
    })  

paragraph.addEventListener('dblclick',function(){
   todolist.removeChild(paragraph)
    })
})













