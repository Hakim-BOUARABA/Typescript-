//08-extends.ts
export 

class Page {
    constructor (public  titre : string){
    }
    getTitre (): void{
        console.log(this.titre)
    } 
}

const p = new Page("bonjour");
p.titre = "hello";

class Article extends Page{

    generateHTML() :void{
        this.getTitre()
        console.log(this.titre)
    }
}

const a = new Article('mon article')
a.getTitre()
a.generateHTML()
// tsc 08-extends.ts && node 08-extends.js


// encapsulation 
// attention vous pouvez utiliser d'autres mots clé que private
// protected / public
// si vous avez choisi private =  
// la variable ne peut être utilisée QUE DANS LA Class
// protected = variable est utilisable dans le class ainsi que dans les class qui hérite de cette class 
// public = variable est utilisable n'importe ou 

// créer un nouveau fichier 
// class Page 
// titre  chaine
// description chaine 

// méthode footer 
// retourner du html 
/*
    <h3>titre dela class</h3>
    <p>description de la class</p>
*/

// créer une autre class Portfolio 
// extends la class Page

//utiliser la class Portfolio  avec la méthode footer 
// https://sharemycode.fr/68c

