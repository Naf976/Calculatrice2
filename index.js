let element = document.querySelectorAll(".nombre");
const saisie = document.querySelector("#saisie");
let operateur = document.querySelectorAll(".operateur");
let stock = document.querySelector("#stock");
const resultat = document.querySelector("#resultat");

// array1 est l'array stocké au moment où on tape les valeurs'
let array1 = [];
// array2 est l'élément stocké sous forme d'array lorsqu'on appui sur un oppérateur.
let array2 = [];

//Losqu'on click sur le bouton clear
document.querySelector(".init").addEventListener("click", function clear() {
  array1 = [];
  array2 = [];
  saisie.value = "";
  stock.value = "";
  resultat.value = "";
});

//  Losqu'on click sur le bouton DEL
document.querySelector(".sup").addEventListener("click", () => {
  array1.pop();
  saisie.value = array1.join("");
});

// Losqu'on appuis sur un nombre
for (let i of element) {
  i.addEventListener("click", () => {
    array1.push(i.value);
    saisie.value = array1.join("");
  });
}
// Lorsqu'on appuis sur un opérateur
for (let a of operateur) {
  a.addEventListener("click", () => {
    // On vérifie si l'opération commence par une division ou une multiplication
    if (
      (!stock.value && !saisie.value && a.value == "/") ||
      (!stock.value && !saisie.value && a.value == "*")
    ) {
      a.classList.add("wrong");
      setTimeout(() => {
        a.classList.remove("wrong");
      }, 500);
    } else {
      // On vérifie si on a déjà éffectué un calcul
      if (resultat.value) {
        array2 = [];
        array1 = [resultat.value];
        array1.push(a.value);
        array2.push(array1.join(""));
        array1 = [];
        saisie.value = "";
        stock.value = array2.join("");
      } else {
        // dernierCharactere est une variable qui contient le dernier caractère du variable "stock".
        let dernierCaractere = stock.value.charAt(stock.value.length - 1);

        if (
          dernierCaractere == "/" ||
          dernierCaractere == "*" ||
          dernierCaractere == "-" ||
          dernierCaractere == "+"
        ) {
          if (
            (dernierCaractere == "/" && saisie.value == "") ||
            (dernierCaractere == "*" && saisie.value == "") ||
            (dernierCaractere == "-" && saisie.value == "") ||
            (dernierCaractere == "+" && saisie.value == "")
          ) {
            a.classList.add("wrong");
            setTimeout(() => {
              a.classList.remove("wrong");
            }, 500);
          } else {
            array1.push(a.value);
            array2.push(array1.join(""));
            array1 = [];
            saisie.value = "";
            stock.value = array2.join("");
          }
        } else {
          array1.push(a.value);
          array2.push(array1.join(""));
          array1 = [];
          saisie.value = "";
          stock.value = array2.join("");
        }
      }
    }
  });
}

// Lorsqu'on click sur le bouton =
document.querySelector(".egale").addEventListener("click", function calculer() {
  array2.push(saisie.value);
  saisie.value = "";
  array1 = [];
  stock.value = array2.join("");
  resultat.value = eval(array2.join(""));
});

// Losqu'on click sur le bouton point
document
  .querySelector(".virgule")
  .addEventListener("click", function virgule() {
    array1.push(".");
    if (saisie.value.includes(".") && array1.includes(".")) {
      array1.pop();
      return;
    }
    saisie.value += ".";
  });
