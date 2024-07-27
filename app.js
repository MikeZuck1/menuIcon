let btn = document.querySelector(".toggle");
let icon = btn.querySelector(".fa-bars"); // selectionne l'élément enfant (qui a la classe .toggle).

btn.onclick = function () {
  if (icon.classList.contains("fa-bars")) { // vérifie si l'élément icon contient la classe fa-bars.
    icon.classList.replace("fa-bars", "fa-times");
  } else {
    icon.classList.replace("fa-times", "fa-bars");
  }
};
