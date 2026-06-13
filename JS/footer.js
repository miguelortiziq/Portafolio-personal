export function cargarFooter() {
    // Buscamos una etiqueta <footer> en la página actual
    const footerContainer = document.querySelector(".footer_container");

    if (!footerContainer) return;

    fetch("./footer.html")
        .then(response => {
            if (!response.ok) throw new Error("No se pudo cargar el footer");
            return response.text();
        })
        .then(htmlContent => {
            footerContainer.innerHTML = htmlContent;
        })
        .catch(error => console.error("Error cargando el footer:", error));
}