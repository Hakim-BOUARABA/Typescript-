"use strict";
exports.__esModule = true;
var annuaire = [
    { id: 1, nom: "Alain", pays: "France" },
    { id: 2, nom: "Béatrice", pays: "Belgique" },
    { id: 3, nom: "Charles", pays: "France" }
];
function filtrePays(annuaire, paysRecherche) {
    var resultat = [];
    for (var i = 0; i < annuaire.length; i++) {
        if (annuaire[i].pays == paysRecherche) {
            resultat.push(annuaire[i]);
        }
    }
    return resultat;
}
var recherche = filtrePays(annuaire, "Belgique");
console.log(recherche);
