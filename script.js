const btn = document.querySelector(".btn");
const overlay = document.querySelector(".overlay");
const cross = document.querySelector(".cross");
const modal = document.querySelector(".modal");

const showModal = function(){
    btn.classList.add("btn-animate");
    setTimeout(()=> {
        overlay.classList.remove("hide");
        modal.classList.remove("hide");
    },170)
    
}
const closeModal = function(){
    btn.classList.remove("btn-animate");
    overlay.classList.add("hide");
    modal.classList.add("hide");
}

btn.addEventListener('click', showModal);
overlay.addEventListener('click',closeModal);
cross.addEventListener('click',closeModal);


document.addEventListener('keydown',function(e){
    if(!modal.classList.contains("hide") && e.key === "Escape"){
        closeModal();
    }
})

