"use strict";
// 11-exo.ts
// tsc --watch 11-exo.ts
exports.__esModule = true;
// faire en sorte que les variables soient locales
exports.liste1 = "pêche poire ananas";
var liste2 = ["pêche", "poire", "ananas"];
// autre solution 
//const liste2:string[] = ["pêche" , "poire", "ananas"];
var liste3 = ["pêche", 4, "poire", 3, "ananas", 2];
// autre solution 
// const liste3:Array<any> = ["pêche", 4, "poire", 3, "ananas" , 2];
var liste3A = ["pêche", 4, "poire", 3, "ananas", 2];
var liste3B = ["pêche", 4, "poire", 3, "ananas", 2];
// je vous donne la réponse Mardi !! => Interface
var liste4 = {
    items: ["pêche", 4, "poire", 3, "ananas", 2],
    budget: 40,
    unite: "euros"
};
// il est possible d'être plus précis via les interfaces 
var liste5 = [
    { id: 1, nom: "pêche", quantite: 4 },
    { id: 2, nom: "poire", quantite: 3 },
    { id: 3, nom: "ananas", quantite: 2 },
];
var liste5A = [
    { id: 1, nom: "pêche", quantite: 4 },
    { id: 2, nom: "poire", quantite: 3 },
    { id: 3, nom: "ananas", quantite: 2 },
];
// 12-interface.js
