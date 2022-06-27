const img_Dark_Mode = document.querySelector('.dark-mode-colocar #img-darkmode');

const dark_SideBar = document.getElementById('sidebar');
const dark_Wrapper = document.getElementById('wrapper');

img_Dark_Mode.addEventListener('click', ()=>{
    dark_Wrapper.classList.toggle('black-mode-wrapper')
    dark_SideBar.classList.toggle('black-mode-sidebar')
})
