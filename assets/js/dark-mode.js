const dark_SideBar = document.getElementById('sidebar');
const dark_Wrapper = document.getElementById('wrapper');

const img_Dark_Mode = document.querySelector('.derecho-dark-mode-puesto #img-darkmode');

img_Dark_Mode.addEventListener('click', ()=>{
    dark_Wrapper.classList.toggle('black-mode-wrapper')
    dark_SideBar.classList.toggle('black-mode-sidebar')
})
