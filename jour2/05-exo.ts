// 05-exo.ts
export 

class Telephone{
    annee : number;
    marque : string;
    proprietaire : string ;
    annuaire : string[] ;
    // annuaire : Array<string> ;

    // si vous avez des méthodes avec de nombreux arguments , vous pouvez faire de saut de ligne pour rendre votre code lisible 
    constructor(
            a :number, 
            m :string, 
            p :string, 
            data : Array<string> 
    ) {
        this.annee = a ;
        this.marque = m ;
        this.proprietaire = p ;
        this.annuaire = data ;
    }
}
// tsc --removeComments 05-exo.ts && node 05-exo.js

// créer le fichier 06-constructeur-compact.ts

// extend /super / portée des variables => héritage

// decorateur 
