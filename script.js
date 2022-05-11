const btn = document.querySelector('.btn');
const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');
const cross = document.querySelector('.cross');
const firstName = document.querySelector('.name');
const maincontent = document.querySelector('.main');

btn.addEventListener('click', function () {
    
    if (firstName.value !== "") {
        
        
        overlay.classList.toggle('hidden');
        popup.classList.toggle('hidden');
        maincontent.textContent = `Hey ${firstName.value}`;
    }
    


});
cross.addEventListener('click',function(){

    overlay.classList.toggle('hidden')
    popup.classList.toggle('hidden')
    


});