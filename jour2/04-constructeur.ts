// 04-constructeur.ts

export 

class Vehicule{
    marque : string ;

    rouler() : void{
        console.log(this.marque);
    }
}

// pour l'utiliser 
const v = new Vehicule();
// initialiser la propriete marque
v.marque = "VW";
v.rouler();

// je veux compacter deux instructions
//const v = new Vehicule();
//v.marque = "VW";

//ajouter dans class une fonction qui est un mot clé langage
// constructor(){} 
class Telephone {
    numero :string ;
    proprietaire : string;
    // fonction elle s'exécute lorsque l'on fait un new 
    constructor(num:string , prop : string){ // attention en minuscule 
        //console.log("constructeur de la class Telephone")
        // dans le constructeur nous allons mettre des instructions d'initialisation
        this.numero = num;
        this.proprietaire = prop;
        console.log(this.numero, this.proprietaire)
    }
}
const t = new Telephone("0101010101" , "Alain");
// tsc 04-constructeur.ts && node 04-constructeur.js
// la fonction constructrice de class est exécutée lorsque l'on saisit le mot clé new
// la fonction  constructrice peut avoir des arguments
// ce qui va permettre de saisir l'instruction suivante :
new Telephone ("020202020", "Béatrice");
// etant donné que numero et proprietaire sont valeurs de class 
// tsc 04-constructeur.ts && node 04-constructeur.js


// créer un nouveau fichier ts
// il contient une class 
// nommé Telephone 
// dispose de 4 propriétés
// annee : chiffre
// marque : chaine de caractères
// proprietaire : chaine de caractères
// annuaire : tableau de chaine de caractères

// ajouter dans cette class une fonction constructrice qui va initialiser toutes les variables de class 

//https://sharemycode.fr/68c









