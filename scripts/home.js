const menuBar = document.querySelector('.menu');

const closeBtn = document.querySelector('.close');
const navBar  = document.querySelector('.navbar');
const sideBarClose  = document.querySelector('.sidebarclose');
const sideBar = document.querySelector('.sidebar');
const openSidebar = document.querySelector('.filter');

menuBar.addEventListener('click', ()=>{
  navBar.style.display = 'block';
  closeBtn.style.display = 'block'; 
  menuBar.style.display = 'none';  
  
});

closeBtn.addEventListener('click', ()=>{
  navBar.style.display = 'none';
  closeBtn.style.display = 'none'; 
    menuBar.style.display = 'block'; 
  
});
sideBarClose.addEventListener('click', ()=>{
  sideBar.style.display = 'none';
  sideBarClose.style.display = 'none';
  openSidebar.style.display = 'block';
});

openSidebar.addEventListener('click', ()=>{
    sideBar.style.display = 'block';
     sideBarClose.style.display = 'block';
    openSidebar.style.display = 'none';

});

