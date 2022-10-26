let element = document.querySelectorAll(".nombre");
const saisie = document.querySelector("#saisie");
let operateur = document.querySelectorAll(".operateur");
let stock = document.querySelector("#stock");
const resultat = document.querySelector("#resultat");

let array1 = [];
let array2 = [];


//Losqu'on click sur le bouton clear
document.querySelector(".init").addEventListener("click", function clear() {
    // array1 est le nombre indiqué dans la partie saisie
    array1 = [];
    // array2 est l'élément de calcul stocké sous forme d'array lorsqu'on appui sur un oppérateur.
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
        array1.push(a.value);
        array2.push(array1.join(""));
        array1 = [];
        saisie.value = "";
        stock.value = array2.join("");
        if(array2[array2.length - 1] === a.value){
            array2.pop();
            return
        };
        console.log(array2);

    });
}

// Lorsqu'on click sur le bouton =
document.querySelector(".egale").addEventListener("click", function calculer() {
    array2.push(saisie.value);
    array1 = [];
    stock.value = array2.join("");
    resultat.value = eval(array2.join(""));
    saisie.value = "";
    console.log(array2);
});

// Losqu'on click sur le bouton point
document.querySelector(".virgule").addEventListener("click", function virgule(){
    array1.push(".");
    if(saisie.value.includes(".") && array1.includes(".")){
        array1.pop();
        return
    };
    saisie.value += ".";
});
