"use strict";
exports.__esModule = true;
var Vehicule = (function () {
    function Vehicule() {
    }
    Vehicule.prototype.rouler = function () {
        var texte = "je roule depuis " + this.annee;
        console.log(texte);
    };
    Vehicule.prototype.description = function () {
        var texte = "je suis un v\u00E9hicule de la marque " + this.marque;
        return texte;
    };
    return Vehicule;
}());
exports.Vehicule = Vehicule;
