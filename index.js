const htmlElement = document.documentElement;
const toggleDesktop = document.getElementById("mode-toggle-desktop");
const toggleMobile = document.getElementById("mode-toggle-mobile");
const logoDesktop = document.getElementById("logo");
const logoMobile = document.getElementById("logo-mobile");
const openButton = document.getElementById("open-button");
const closeButton = document.getElementById("close-button");
const burgerMenu = document.getElementById("burger-menu");

let activeTheme = localStorage.getItem('theme') || "light";

const applyTheme = (theme) => {
    activeTheme = theme;
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    const isDark = theme === "dark";
    toggleDesktop.checked = isDark;
    toggleMobile.checked = isDark;
    logoDesktop.src = isDark ? "./resources/logo-dark.svg" : "./resources/logo-light.svg";
    logoMobile.src = isDark ? "./resources/logo-dark.svg" : "./resources/logo-light.svg";
};

applyTheme(activeTheme);

toggleDesktop.addEventListener('click', () => {
    applyTheme(activeTheme === "light" ? "dark" : "light");
});
toggleMobile.addEventListener('click', () => {
    applyTheme(activeTheme === "light" ? "dark" : "light");
});

openButton.addEventListener("click", () => burgerMenu.style.transform = "translateX(0%)");
closeButton.addEventListener("click", () => burgerMenu.style.transform = "translateX(100%)");
