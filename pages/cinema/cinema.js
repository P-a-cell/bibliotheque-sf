document.querySelectorAll(".pellicule-titre").forEach(titre => {
    titre.addEventListener("click", () => {
        const films = titre.nextElementSibling;
        films.style.display =
            films.style.display === "block" ? "none" : "block";
    });
});
