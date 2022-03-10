'use strict';

let modalElement = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btnToCloseModal = document.querySelector('.close-modal');
let btnToShowModal = document.querySelectorAll('.show-modal');
const closeOutModalAndOverlay = ()=>{
    modalElement.classList.add('hidden');
    overlay.classList.add('hidden');
}
const openModalAndOverlay = ()=>{
    modalElement.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for(let i =0;i<btnToShowModal.length;i++){
    btnToShowModal[i].addEventListener('click', openModalAndOverlay)
}

btnToCloseModal.addEventListener('click', closeOutModalAndOverlay);

overlay.addEventListener('click', closeOutModalAndOverlay)

document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape' && !modalElement.classList.contains('hidden')){
        //closeOutModalAndOverlay;
        closeOutModalAndOverlay();
    }
})
