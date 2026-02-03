document.querySelectorAll(".categorie-titre").forEach(titre => {
    titre.addEventListener("click", () => {
        const contenu = titre.nextElementSibling;
        contenu.style.display =
            contenu.style.display === "block" ? "none" : "block";
    });
});

console.log("JS littérature chargé");
