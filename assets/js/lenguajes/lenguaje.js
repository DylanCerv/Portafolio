const flagElement = document.getElementById('flags');
const textsToChange = document.querySelectorAll('[data-section]');




const changeLenguaje = async (lenguaje)=>{
    const requestJSON = await fetch(`assets/lenguajes/${lenguaje}.json`);
    const texts = await requestJSON.json();
    
    for (const textToChange of textsToChange){
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;
        
        textToChange.innerHTML = texts[section][value];
    }
    delete typed;
}


if (localStorage.getItem("lenguaje") !== null) {
    changeLenguaje(localStorage.getItem("lenguaje"));
    // console.log(`assets/lenguajes/${localStorage.getItem("lenguaje")}.json`)
    
}


flagElement.addEventListener("click", (e)=>{
    // console.log(e.target.parentElement.dataset.lenguaje);

    changeLenguaje(e.target.parentElement.dataset.lenguaje);

    if(e.target.parentElement.dataset.lenguaje == 'en'){
        localStorage.setItem("lenguaje", "en")
        delete typed;
    }
    if(e.target.parentElement.dataset.lenguaje == 'es'){
        localStorage.setItem("lenguaje", "es")
        delete typed;
    }

    location.reload();
})



