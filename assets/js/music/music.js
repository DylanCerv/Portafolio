let bocina_music_container = document.getElementById('bocina-music-container');

let music = new Audio('https://res.cloudinary.com/dnnjctymr/video/upload/v1664993571/beats-ligth-mode_qpzloj.mp3');

music.loop = true;




bocina_music_container.addEventListener('click', ()=>{
    if(bocina_music_container.classList.contains('volumen-active')){
        
        bocina_music_container.classList.remove('volumen-active');
        bocina_music_container.classList.add('volumen-mute');
        bocina_music_container.innerHTML = '<i class="fa-solid fa-volume-xmark" id="mute"></i>';
        
        music.pause();
        
    }else{
        
        bocina_music_container.classList.remove('volumen-mute');
        bocina_music_container.classList.add('volumen-active');
        bocina_music_container.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        
        music.play();
        
    }
})




