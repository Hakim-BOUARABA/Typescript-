"use strict";
// 04-constructeur.ts
exports.__esModule = true;
var Vehicule = /** @class */ (function () {
    function Vehicule() {
    }
    Vehicule.prototype.rouler = function () {
        console.log(this.marque);
    };
    return Vehicule;
}());
exports.Vehicule = Vehicule;
// pour l'utiliser 
var v = new Vehicule();
// initialiser la propriete marque
v.marque = "VW";
v.rouler();
// je veux compacter deux instructions
//const v = new Vehicule();
//v.marque = "VW";
//ajouter dans class une fonction qui est un mot clé langage
// constructor(){} 
var Telephone = /** @class */ (function () {
    // fonction elle s'exécute lorsque l'on fait un new 
    function Telephone(num, prop) {
        //console.log("constructeur de la class Telephone")
        // dans le constructeur nous allons mettre des instructions d'initialisation
        this.numero = num;
        this.proprietaire = prop;
        console.log(this.numero, this.proprietaire);
    }
    return Telephone;
}());
var t = new Telephone("0101010101", "Alain");
// tsc 04-constructeur.ts && node 04-constructeur.js
// la fonction constructrice de class est exécutée lorsque l'on saisit le mot clé new
// la fonction  constructrice peut avoir des arguments
// ce qui va permettre de saisir l'instruction suivante :
new Telephone("020202020", "Béatrice");
// etant donné que numero et proprietaire sont valeurs de class 
// tsc 04-constructeur.ts && node 04-constructeur.js
