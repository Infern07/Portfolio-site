const sidemenu = document.querySelector('#sidemenu');
const navBar = document.querySelector('nav');
const navLinks = document.querySelector('nav ul');

function openMenu(){
    sidemenu.style.transform = 'translateX(-16rem)';
}
function closeMenu(){
    sidemenu.style.transform = 'translateX(16rem)';
}

var textWrapper = document.querySelector('.ml13');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");