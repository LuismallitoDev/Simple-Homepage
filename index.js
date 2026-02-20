const htmlElement = document.documentElement;

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = "light";
const toggleDesktop = document.getElementById("mode-toggle-desktop");
const toggleMobile = document.getElementById("mode-toggle-mobile");
const logo = document.getElementById("logo");
const openButton = document.getElementById("open-button");
const closeButton = document.getElementById("close-button");
const burgerMenu = document.getElementById("burger-menu");
let activeTheme = localStorage.getItem('theme') || defaultTheme;
htmlElement.setAttribute('data-theme', activeTheme);

const toggleTheme = (device) => {
    activeTheme = activeTheme === "light" ? "dark" : "light";
    htmlElement.setAttribute('data-theme', activeTheme);

    if (activeTheme == "dark") {
        device.setAttribute("checked", false);
        logo.src = "./resources/logo-dark.svg"
    } else if ("light") {
        device.setAttribute("checked", true);
        logo.src = "./resources/logo-light.svg";
    }
}
//Listener
console.log(logo.getAttributeNames())
toggleDesktop.addEventListener('click', () => toggleTheme(toggleMobile))
toggleMobile.addEventListener('click', () => toggleTheme(toggleDesktop));

openButton.addEventListener("click", () => {
    burgerMenu.style.transform = "translateX(0%)"
});

closeButton.addEventListener("click", () => {
    burgerMenu.style.transform = "translateX(100%)"
})