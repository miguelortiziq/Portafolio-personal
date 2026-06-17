export function readMore(){



    const readMoreLinks = document.querySelectorAll(".readMore");

    readMoreLinks.forEach(link => {

        link.addEventListener("click", (event) => {
            event.preventDefault();

            const projectId = link.id;
            const description = document.getElementById(
                `${projectId}Description`
            );

            description.classList.toggle("d-none");

            if (description.classList.contains("d-none")) {
                link.textContent = "Read more";
            } else {
                link.textContent = "Read less";
            }
        });

    });



}