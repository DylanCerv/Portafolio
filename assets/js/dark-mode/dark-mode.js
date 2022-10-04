const img_Dark_Mode = document.querySelector('.dark-mode-colocar #img-darkmode');

const dark_SideBar = document.getElementById('sidebar');
const dark_Wrapper = document.getElementById('wrapper');

const dark_particles = document.getElementById('particles-js');
const script_dark = document.getElementById('script-dark-particles');

img_Dark_Mode.addEventListener('click', ()=>{
    dark_Wrapper.classList.toggle('black-mode-wrapper');
    dark_SideBar.classList.toggle('black-mode-sidebar');
    dark_particles.classList.toggle('black-particles');
    

    script_dark.innerHTML = `<script src="assets/js/particles/app-dark.js"></script>`
});

// ()=>{
//     if (document.getElementById('particles-js').classList.contains('black-particles')){
//         console.log('si tiene la clase');
//     }else if(){
//         console.log('no tiene la clase');
//     }
// }