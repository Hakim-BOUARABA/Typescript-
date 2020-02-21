"use strict";
// 10-typage.ts
// tsc --watch 10-typage.ts
exports.__esModule = true;
// javascript est langage permissif au niveau des types
exports.titre = "Application";
var nombre = 2;
var verif = 10 > 2;
// à utiliser le moins possible si jamais on ne sait pas le type d'une variable
var inconnue;
// variables complexes
// tableau qui contient des chaines de caractères
var semaine = ["lundi", "mardi", "mercredi"];
var parametre = [2, "lettre", true];
// 2ème syntaxe possible 
var matieres = ["js", "php", "ajax"];
var autreParametre = ["init", 12, [], {}];
// objets
// créer un objet simple 
var formation = {
    titre: "javascript",
    duree: 2
};
// collection tableau qui contient des objets
var articles = [
    {
        id: 1,
        nom: "article 1"
    },
    { id: 2, nom: "article 2" }
];
var posts = [
    { id: 1 },
    { id: 2, nom: "article 2" }
];
// créer un nouveau fichier 11-exo.ts
// ce fichier va contenir plusieurs variables
// veuillez les typer les variables suivantes correctement :
// liste1 = "pêche poire ananas";
// liste2 = ["pêche" , "poire", "ananas"];
// liste3 = ["pêche", 4, "poire", 3, "ananas" , 2];
/* liste4 = {
    items : ["pêche", 4, "poire", 3, "ananas" , 2],
    budget : 40 ,
    unite : "euros"
};*/
/* liste5 = [
    {id: 1 , nom : "pêche" , quantite : 4},
    {id: 2 , nom : "poire" , quantite : 3},
    {id: 3 , nom : "ananas" , quantite : 2},
];*/
// faire en sorte que vos variables soient protégées 
// transformer le fichier .ts en .js 
