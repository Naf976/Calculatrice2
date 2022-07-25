let element = document.querySelectorAll(".nombre");
const saisie = document.querySelector("#saisie");
let operateur = document.querySelectorAll(".operateur");
let stock = document.querySelector("#stock");
const resultat = document.querySelector("#resultat");

let array1 = [];
let array2 = [];

//  Losqu'on click sur le boutton DEL
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
        array1.push(a.value);
        array2.push(array1.join(""));
        array1 = [];
        saisie.value = "";
        stock.value = array2.join("");

    });
}
document.querySelector(".egale").addEventListener("click", function calculer() {
    console.log(array1.join(""));
    array2.push(saisie.value);
    array1 = [];
    stock.value = array2.join("");
    resultat.value = eval(array2.join(""));
})
