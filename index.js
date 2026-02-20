const htmlElement = document.documentElement;

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = "light";
const toggleDesktop = document.getElementById("mode-toggle-desktop");
const logo = document.getElementById("logo");

let activeTheme = localStorage.getItem('theme') || defaultTheme;
htmlElement.setAttribute('data-theme', activeTheme);

//Listener
console.log(logo.getAttributeNames())
toggleDesktop.addEventListener('click', () => {
    activeTheme = activeTheme === "light" ? "dark" : "light";
    htmlElement.setAttribute('data-theme', activeTheme);
    if(activeTheme == "dark"){
        logo.src = "./resources/logo-dark.svg"
    }else if("light"){
        logo.src = "./resources/logo-light.svg";
    }
})