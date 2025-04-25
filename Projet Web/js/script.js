// // Fonction pour gérer la sélection des ingrédients
// function handleSelection() {
//   const clickableItems = document.querySelectorAll(".clickable");

//   clickableItems.forEach((item) => {
//     item.addEventListener("click", () => {
//       const ingredient = item.getAttribute("data-ingr");
//       const layer = document.querySelector(`#preview img[data-ingr="${ingredient}"]`);

//       console.log("je suis passé ici");

//       if (!item.classList.contains("selected") && layer) {
//         // Ajouter la classe "selected" et afficher l'ingrédient
//         item.classList.add("selected");
//         layer.style.display = "block";o
//       } else {
//         // Retirer la classe "selected" et masquer l'ingrédient
//         item.classList.remove("selected");
//         layer.style.display = "none";
//       }
//     });
//   });
// }
function handleSelection() {
  console.log("Le DOM est complètement chargé et prêt à être manipulé.");
  // Tu peux ajouter d'autres actions ici, comme sélectionner des éléments HTML
  const button = document.querySelector("button");
  button.addEventListener("click", function() {
    alert("Button clicked!");
  });
  const clickableItems = document.querySelectorAll(".clickable");