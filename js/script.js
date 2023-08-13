let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

input.addEventListener('keyup',()=>{
    if(input.value.trim()!==0){
        addBtn.classList.add('active')
    }else{
        addBtn.classList.remove('active')
    }
})

addBtn.addEventListener('click', ()=>{
    if(input.value.trim()!==0){
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML=`
        <p>${input.value}</p>
        <div class="item-btn">
            <i class="fa-sharp fa-solid fa-pen-to-square"></i>
            <i class="fa-sharp fa-solid fa-circle-xmark"></i>
        `
        tasks.appendChild(newItem);
        input.value='';
}else{
    alert("Please enter a task!")
}
})

tasks.addEventListener('click',(e)=>{
if(e.target.classList.contains('fa-circle-xmark')){
    alert('Are you sure you want to delete the task?');
    e.target.parentElement.parentElement.remove();
}
})
tasks.addEventListener('click',(e)=>{
if(e.target.classList.contains('fa-pen-to-square')){
    e.target.parentElement.parentElement.classList.toggle('completed');
}
})