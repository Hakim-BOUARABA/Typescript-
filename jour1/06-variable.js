// 06-variable.ts
var a = "Formation";
// tsc --watch 06-variable.ts
// en javascript de base aucun problème pour changer le type des variables
a = true;
// javascript est un langage à typage dynamique
// en fonction de la valeur auquelle on affecte une variable , la variable va prendre son type 
var resultat = a.split("");
// attention .split("") fonctionne avec les variables de type chaine de caractères mais pas avec les variables de type Boolean
