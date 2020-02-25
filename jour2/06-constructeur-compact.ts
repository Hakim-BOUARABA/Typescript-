// 06-constructeur-compact.ts
export 

class Page {
    titre : string ;
    auteur : string ;

    constructor(t : string, a : string)
    {
        this.titre = t;
        this.auteur = a ;
    }
}
// manière classique d'utiliser le constructeur 
// désavantage => répétition 
// au préalable de déclarer les variables de class 
// très utilisé sur Angular => syntaxe suivante 
class Article {
    // private ?? mot clé du langage var const ....
    // la variable est dispose d'une portée locale (à la class)
    constructor (private titre :string , private auteur : string){
    }
    genererHTML() :string{
        const output : string = `<article>
            <h2>${this.titre}</h2>
            <p>${this.auteur}</p>
        </article>`;
        return output;
    }
}// https://sharemycode.fr/68c
const article1 = new Article("premier article", "Alain");

console.log(article1.genererHTML()); 
// tsc --removeComments 06-constructeur-compact.ts && node 06-constructeur-compact.js

// créer un nouveau fichier ts
// contenir une class Page 
//dispose de trois propriétés 
// titre chaine
// contenu chaine
// categories tableau de chaine
// utiliser la syntaxe courte pour initialiser toutes les propriétés de la class
// dans le constructeur 
// créer une méthode qui va générer le html suivant
/* <div>
    <h1>titre de la class</h1>
    <p>contenu de la class</p>
    <ul>
        <li>categories[0] de la class</li>
        <li>categories[1] de la class</li>
        <li>categories[2] de la class</li>
    </ul>
<div> */

// utiliser la class avec les valeurs suivantes :
/* titre de la page "Home Page"
contenu de la page "lorem ipsum"
catégories de la page ["ajax", "node", "angular"] */







