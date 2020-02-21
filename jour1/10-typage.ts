// 10-typage.ts
// tsc --watch 10-typage.ts

// javascript est langage permissif au niveau des types

export // nouvelle syntaxe qui permet de bloquer la portée de toutes les variables que l'on crée dans un fichier js 
// au lieu d'écrire la fonction anonyme autoexécutante
// export => rien n'est disponible ailleurs dans les autres fichiers js

const titre: string = "Application";
let nombre : number = 2;
let verif : boolean = 10 > 2;

// à utiliser le moins possible si jamais on ne sait pas le type d'une variable

let inconnue: any ;

// variables complexes

// tableau qui contient des chaines de caractères

const semaine:string[] = ["lundi","mardi","mercredi"];
const parametre : any[] = [2 , "lettre" , true] ;

// 2ème syntaxe possible 

const matieres:Array<string> = ["js","php","ajax"];
const autreParametre : Array<any> = ["init", 12 , [] , {}];

// objets
// créer un objet simple 

const formation : Object = {
    titre : "javascript",
    duree : 2
} 

// collection tableau qui contient des objets

const articles : Object[] = [
    {
        id :1 , 
        nom: "article 1"
    },
    {id: 2, nom : "article 2"}
]

const posts : Array<Object> = [
    {id :1 },
    {id: 2, nom : "article 2"}
]


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


