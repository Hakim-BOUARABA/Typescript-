// création de la variable
var tableau = ["lundi", "mardi", "mercredi"];
// plusieurs manières de parcourir un tableau
// manière 1 : utilisant l'index
console.log("manière 1");
console.log(tableau[0]);
console.log(tableau[1]);
console.log(tableau[2]);
// manière 2 : utiliser une boucle for(){} classique
console.log("manière 2");
for (var i = 0; i < tableau.length; i++) {
    console.log(tableau[i]);
}
// tranformer en js
// tsc 02-exo.ts
// tester mon fichier traduit 
// node 02-exo.js
// manière de faire  for of
console.log("manière 3");
for (var _i = 0, tableau_1 = tableau; _i < tableau_1.length; _i++) {
    var jour = tableau_1[_i];
    console.log(jour);
}
// tsc 02-exo.ts && node 02-exo.js
console.log("manière 4");
tableau.forEach(function (jour) {
    console.log(jour);
});
// tsc 02-exo.ts && node 02-exo.js
// parcourir et mettre la première lettre en majuscule 
console.log("manière 3 et majuscule");
for (var _a = 0, tableau_2 = tableau; _a < tableau_2.length; _a++) {
    var jour = tableau_2[_a];
    var premierLettre = jour[0].toUpperCase();
    var resteDuMot = jour.slice(1);
    console.log(premierLettre + resteDuMot);
}
// tsc 02-exo.ts && node 02-exo.js
