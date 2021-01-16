const menuToggle = document.querySelector('.ham-menu')
const navHidden = document.querySelector('.hidden-menu')

menuToggle.addEventListener('click', function(){
    navHidden.classList.toggle('slide')
});