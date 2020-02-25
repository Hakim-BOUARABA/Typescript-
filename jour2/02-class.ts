// 02-class.ts
export 

interface Telephone{
    numero : string,
    proprietaire : string 
}

const call = function(tel : Telephone) :void{
    const texte = `j'appelle le ${tel.numero} de ${tel.proprietaire}`;
    console.log(texte);
}

// ici l'interface définit fortement la fonction 
// fonction est DEPENDANTE de l'interface 
// => intérêt à transformer ce code en une class 

class Phone { //nom de la class
    numero : string ; // propriétés de la class  
    proprietaire : string ;

    call() :string{ // méthode de class 
        const texte = `j'appelle le ${this.numero} de ${this.proprietaire}`;
        return texte;
    }

    verifInfos() :void{
        console.log(this.numero , this.proprietaire)
    }
}

// pour utiliser une fonction nom_de_la_fonction();

// pour exécuter une class new 

const tel = new Phone() ; 
// tel : objet 
// Phone class 
// lorsque vous utilisez le mot clé new => transformer une class en un objet = Instanciation 

//console.log(tel) ;
// remplir les propriétés de mon objet tel de valeurs 

tel.numero = "010101010101";
tel.proprietaire = "Alain" ;

const resultat = tel.call(); // ne pas oublier les parenthèses à la fin de call()
// pour exécuter la méthode 

// tsc 02-class.ts && node 02-class.js


// class = RANGER EN SECURITE plein de concepts
// variables
// fonction 

// créer une class 
    // Vehicule 
    // possède deux propriétés 
    // marque : string
    // annee : chiffre 

    // méthode rouler 
    // renvoie rien (pas de return ) => :void 
    // instructions quelle va réaliser 
    // dans la console : je roule depuis annee de la class

    // méthode description
    // renvoyer une chaine de caractères 
    // instructions quelle va réaliser 
    // concaténation 
    // je suis un véhicule de la marque de la class 

    // https://sharemycode.fr/68c





