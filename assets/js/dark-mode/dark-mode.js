
const dark_SideBar = document.getElementById('sidebar');
const dark_Wrapper = document.getElementById('wrapper');

const dark_particles = document.getElementById('particles-js');
const script_dark = document.getElementById('script-dark-particles');

const buttonSwitch = document.getElementById('switch');



const changeMode = ()=>{
    if (localStorage.getItem('mode') == 'white') {

        // localStorage.setItem('mode', 'white');
        console.log('cambio a white');

        buttonSwitch.classList.remove('active');
        dark_Wrapper.classList.remove('black-mode-wrapper');
        dark_SideBar.classList.remove('black-mode-sidebar');
        dark_particles.classList.remove('black-particles');

    }else{

        // localStorage.setItem('mode', 'dark');
        console.log('cambio a dark');

        buttonSwitch.classList.add('active');
        dark_Wrapper.classList.add('black-mode-wrapper');
        dark_SideBar.classList.add('black-mode-sidebar');
        dark_particles.classList.add('black-particles');

    }
}


// console.log(localStorage.getItem('mode') == null);
// console.log(localStorage.getItem('mode'));

if (localStorage.getItem('mode') == null) {
    localStorage.setItem('mode', 'dark');
}else{
    changeMode();
}


buttonSwitch.addEventListener('click', ()=>{

    if(localStorage.getItem('mode') == 'dark'){
        localStorage.setItem('mode', 'white');
    }else{
        localStorage.setItem('mode', 'dark');
    }

    changeMode();
    

    console.log(localStorage.getItem('mode'));


    // if (conf == "dark") {
        
        // bocina_music_container.classList.toggle('bocina_music_container_dark');
        
        // if(dark_Wrapper.classList.contains('black-mode-wrapper')){
        //     music.pause();
        //     music = new Audio('https://res.cloudinary.com/dnnjctymr/video/upload/v1664989922/beats-dark-mode_lrvl2j.mp3');
        // }else{
        //     music.pause();
        //     music = new Audio('https://res.cloudinary.com/dnnjctymr/video/upload/v1664993571/beats-ligth-mode_qpzloj.mp3');
        // }
        // if(bocina_music_container.classList.contains('volumen-active')){
        //     setTimeout(function(){
        //         music.play();
        //     }, 1000);
        // }
    // }

    
});
