// 10-extends-suite.ts

// à partir du moment où vous voyez le mot clé
// extends 
// héritage
// permet de décupérer l'intégralité du code écrit dans la class Parent

// hériter + modifier => polymorphisme 

// modifier une propriété / méthode du parent sans avoir à réécrire le code du parent 

class Animal{
    constructor(protected nom: string , protected age : number){}
    description() : string{
        return `
            je suis un Animal, 
            mon nom est ${this.nom} 
            mon age est ${this.age}
            `;
    }
}
class Chat extends Animal{
    // ajouter une nouvelle propriété à ma class Enfant
    constructor(
            protected nom: string , 
            protected age : number,
            protected couleur : string
        ){
        super(nom , age );// fonction clé qui va permettre d'éxécuter la constructeur du parent
        // récupère les instructions du parent et on les modifie = polymorphisme 
    }
    information() : string{
        return `
        Je suis un chat 
        mon nom est ${this.nom}
        mon age est ${this.age}
        ma couleur est ${this.couleur}
        `;
    }
}
const c = new Chat("croquette", 4, "roux"); // surcharger la méthode du parent = polymorphisme 
console.log(c.description()) // méthode du parent
console.log(c.information()) // méthode de l'enfant

// tsc 10-extends-suite.ts && node 10-extends-suite.js

// créer une class Page 
// titre 
// contenu
// méthode retourner du html 
/* <article>
    <h2>titre class</h2>
    <p>contenu class</h2>
</article> */

// créer une autre class qui Article qui étend Page
// 3 propriétés 
// titre
// contenu
// categories
// méthode  html 
/* <article>
    <h2>titre class</h2>
    <p>contenu class</h2>
    <ul>
        <li>catégories[0]</li>
        <li>catégories[1]</li>
    </ul>
</article> */

// utiliser la class Page avec la méthode  retourner html
// utiliser la class Article avec la méthode  retourner html

// https://sharemycode.fr/68c