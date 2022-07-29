const todos=document.createElement('div')
document.body.appendChild(todos);
const listContent=[];

const input=document.querySelector('.inp');
const dell=document.querySelector('#del');


const buttonf=()=>{
  listContent.push( input.value);
  display();
}

const delf=()=>{
  listContent.pop();
 display();
}

const display=()=>{
  var listContentStr='';
  listContent.forEach(x=>listContentStr=listContentStr+x+'<br>')
  todos.innerHTML=listContentStr;
}
