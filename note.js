let noteContainer = document.querySelector('.note-container')
let createBtn = document.getElementsByTagName('button')[0];
let notes = document.querySelectorAll('.input-box');

function showNotes() {
    noteContainer.innerHTML = localStorage.getItem('notes');
}
showNotes();

function updatestorage() {
localStorage.setItem('notes', noteContainer.innerHTML);   
}








createBtn.addEventListener('click', ()=>{
    let inputBox = document.createElement('p');
    let img = document.createElement('img')
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true');
    img.src = 'img/delete_sweep_100dp_FFFFFF_FILL0_wght400_GRAD0_opsz48.png'
    noteContainer.appendChild(inputBox).appendChild(img)
})

noteContainer.addEventListener('click', function (e) {
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updatestorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll('.input-Box');
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updatestorage();
            }
        })
    }
})
document.addEventListener("keydown", event =>{
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak")
        event.preventDefault();
    }
})














