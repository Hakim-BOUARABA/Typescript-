// 11-exo.ts
// tsc --watch 11-exo.ts

// faire en sorte que les variables soient locales

export

const liste1:string = "pêche poire ananas";

const liste2:Array<string> = ["pêche" , "poire", "ananas"];
// autre solution 
//const liste2:string[] = ["pêche" , "poire", "ananas"];

const liste3:Array<string|number> = ["pêche", 4, "poire", 3, "ananas" , 2];
// autre solution 
// const liste3:Array<any> = ["pêche", 4, "poire", 3, "ananas" , 2];
const liste3A:(String|Number)[] = ["pêche", 4, "poire", 3, "ananas" , 2];
const liste3B:any[] = ["pêche", 4, "poire", 3, "ananas" , 2];

// je vous donne la réponse Mardi !! => Interface
const liste4 : Object = {
    items : ["pêche", 4, "poire", 3, "ananas" , 2],
    budget : 40 ,
    unite : "euros"
};

// il est possible d'être plus précis via les interfaces 
const liste5 : object[] = [
    {id: 1 , nom : "pêche" , quantite : 4},
    {id: 2 , nom : "poire" , quantite : 3},
    {id: 3 , nom : "ananas" , quantite : 2},
]


const liste5A : Array<Object> = [
    {id: 1 , nom : "pêche" , quantite : 4},
    {id: 2 , nom : "poire" , quantite : 3},
    {id: 3 , nom : "ananas" , quantite : 2},
]

// 12-interface.js