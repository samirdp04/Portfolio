let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top  < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ] ').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Botón copiar

//let copyText = document.querySelector(".copy-text");
//copyText.querySelector("button").addEventListener("click", function(){
    //let input = copyText.querySelector("input.text");
    //input.select();
    //document.exeCommand("copy");
    //copyText.classList.add("active");
    //window.getSelection().removeAllRanges();
    //setTimeout(function(){
        //copyText.classList.remove("active");
    //},2500)
//})

// animacion skills
function efectoskills(){
    const skills = document.getElementById("skills");
    const distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("html");
        habilidades[1].classList.add("css");
        habilidades[2].classList.add("javascript");
        habilidades[3].classList.add("java");
        habilidades[4].classList.add("springboot");
        habilidades[5].classList.add("mysql"); 
    }
}
window.onscroll = function(){
    efectoskills();
}

// boton copiar 2

document.querySelectorAll(".copy-link").forEach((copyLinkParent) => {
    const inputField = copyLinkParent.querySelector(".copy-link-input");
    const copyButton = copyLinkParent.querySelector(".copy-link-button");
    const text = inputField.value;

    inputField.addEventListener("focus", () => inputField.select());

    copyButton.addEventListener("click", () => {
    inputField.select();
    navigator.clipboard.writeText(text);

    inputField.value = "Copied!";
    setTimeout(() => (inputField.value = text), 2000);
    });
});
