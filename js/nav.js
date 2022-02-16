mainMenu=document.querySelector('.mainMenu');
openMenu=document.querySelector('#openMenu');
closeMenu=document.querySelector('#closeMenu');
nav2H1=document.querySelector('#nav2-h1');

closeMenu.addEventListener('click',()=>{
    openMenu.style.display="inline-block";
    nav2H1.style.display="flex";
    mainMenu.style.display="none";
});

openMenu.addEventListener('click',()=>{
    openMenu.style.display="none";
    nav2H1.style.display="none";
    mainMenu.style.display="flex";
    mainMenu.style.top="0";
});
