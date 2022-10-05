const go_top_container = document.querySelector('.go-top-container');
const a_button_up = document.getElementById('button-up');
let i = 0;


window.onscroll = function (){
    console.log(document.documentElement.scrollTop)
    if (document.documentElement.scrollTop > 0 && 
        i == 0 && 
        bocina_music_container.classList.contains('volumen-active')){

        setTimeout(function(){
            music.play();
            i ++;
        }, 2000);

    }
    if(document.documentElement.scrollTop > 500){
        go_top_container.classList.add('show');
        a_button_up.style.display = 'block';
    }else{
        go_top_container.classList.remove('show');
        a_button_up.style.display = 'none';
    }
}