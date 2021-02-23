let menuIcon = document.getElementsByClassName('hamborger-menu')[0];
menuIcon.addEventListener('click',()=>{
    if(menuIcon.classList.contains('menu-open')){
        menuIcon.classList.remove('menu-open')
    }else{
        menuIcon.classList.add('menu-open')
    }
})