"use strict";
// 14-fonction.ts 
// tsc --watch 14-fonction.ts 
exports.__esModule = true;
function calculAireRectangle(l, h) {
    var resultat = (l * h) + "cm²";
    return resultat;
}
exports.calculAireRectangle = calculAireRectangle;
// si vous avez des fonctions qui ne retourne rien
function generateLorem() {
    console.log("Lorem ipsum");
}
// si vous avez des fonctions avec des argument facultatifs
// h est facultatif
function calculAire(l, h) {
    if (h) {
        return l * h;
    }
    else {
        return l * l;
    }
}
var resultat = calculAire(2);
console.log(resultat);
// tsc 14-fonction.ts && node 14-fonction.js
