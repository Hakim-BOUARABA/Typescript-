
// 06-variable.ts

let a: string = "Formation" ;
// tsc --watch 06-variable.ts

// en javascript de base aucun problème pour changer le type des variables
a = true;

var c = "bonjour";
var c = 2;

// javascript est un langage à typage dynamique
// en fonction de la valeur auquelle on affecte une variable , la variable va prendre son type 

const resultat = a.split("")

// attention .split("") fonctionne avec les variables de type chaine de caractères mais pas avec les variables de type Boolean
