// création de la variable

const tableau = ["lundi", "mardi", "mercredi"];

// plusieurs manières de parcourir un tableau

// manière 1 : utilisant l'index
console.log("manière 1")
console.log(tableau[0]);
console.log(tableau[1]);
console.log(tableau[2]);

// manière 2 : utiliser une boucle for(){} classique
console.log("manière 2")
for(let i = 0 ; i < tableau.length ; i++){
    console.log(tableau[i]);
}
// tranformer en js
// tsc 02-exo.ts
// tester mon fichier traduit 
// node 02-exo.js

// manière de faire  for of

console.log("manière 3")
for(let jour of tableau)
{
    console.log(jour);
}
// tsc 02-exo.ts && node 02-exo.js

console.log("manière 4");

tableau.forEach( function(jour){
    console.log(jour);
} );
// tsc 02-exo.ts && node 02-exo.js

// parcourir et mettre la première lettre en majuscule 

console.log("manière 3 et majuscule")
for(let jour of tableau)
{
    const premierLettre = jour[0].toUpperCase();
    const resteDuMot = jour.slice(1);
    console.log(premierLettre+resteDuMot );
}

// tsc 02-exo.ts && node 02-exo.js




