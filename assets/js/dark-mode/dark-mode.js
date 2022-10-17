
const dark_SideBar = document.getElementById('sidebar');
const dark_Wrapper = document.getElementById('wrapper');

const dark_particles = document.getElementById('particles-js');
const script_dark = document.getElementById('script-dark-particles');

const buttonSwitch = document.getElementById('switch');


buttonSwitch.addEventListener('click', ()=>{
    buttonSwitch.classList.toggle('active');
    dark_Wrapper.classList.toggle('black-mode-wrapper');
    dark_SideBar.classList.toggle('black-mode-sidebar');
    dark_particles.classList.toggle('black-particles');
    bocina_music_container.classList.toggle('bocina_music_container_dark')
    
    if(dark_Wrapper.classList.contains('black-mode-wrapper')){
        music.pause();
        music = new Audio('https://res.cloudinary.com/dnnjctymr/video/upload/v1664989922/beats-dark-mode_lrvl2j.mp3');
    }else{
        music.pause();
        music = new Audio('https://res.cloudinary.com/dnnjctymr/video/upload/v1664993571/beats-ligth-mode_qpzloj.mp3');
    }
    if(bocina_music_container.classList.contains('volumen-active')){
        setTimeout(function(){
            music.play();
        }, 1000);
    }
    
});
