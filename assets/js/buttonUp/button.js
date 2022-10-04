const go_top_container = document.querySelector('.go-top-container');
const a_button_up = document.getElementById('button-up');

window.onscroll = function(){
    
    if(document.documentElement.scrollTop > 500){
        a_button_up.style.display = 'block';
        go_top_container.classList.add('show');
    }else{
        a_button_up.style.display = 'none';
        go_top_container.classList.remove('show');
    }
}