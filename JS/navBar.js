export function navbar() {
    const headerContainer = document.querySelector(".header_container");

    if (!headerContainer) return;

    fetch("./navBar.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo cargar la navbar");
            }
            return response.text();
        })
        .then(htmlContent => {
            headerContainer.innerHTML = htmlContent;
            inicializarLogicaMenu();
        })
        .catch(error => console.error("Error cargando la navbar:", error));
}

function inicializarLogicaMenu() {
    const menuBtn = document.getElementById("menuBtn");
    const navlinks = document.getElementById("navlinks");

    if (!menuBtn || !navlinks) return;

    const links = navlinks.querySelectorAll("a");

    menuBtn.addEventListener("click", () => {
        navlinks.classList.toggle("active");
        if (navlinks.classList.contains("active")) {
            menuBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>`;
            menuBtn.setAttribute("aria-expanded", "true");
        } else {
            menuBtn.innerHTML = "☰";
            menuBtn.setAttribute("aria-expanded", "false");
        }
    });

    links.forEach(link => {
        link.addEventListener("click", () => {
            navlinks.classList.remove("active");
            menuBtn.innerHTML = "☰";
            menuBtn.setAttribute("aria-expanded", "false");
        });
    });
}

