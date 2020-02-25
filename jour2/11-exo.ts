// 11-exo.ts

export

class Page{
    constructor(
            protected titre :string , 
            protected contenu:string )
    {}
    html():string{
        return `
        <article>
            <h2>${this.titre}</h2>
            <p>${this.contenu}</p>
        </article>
        `
    }
}
class Article extends Page{
    constructor(
            protected titre :string, 
            protected contenu:string,
            private categories : Array<string>
            ){
        super( titre , contenu);
    }
    html():string{
       let output : string = `
       <article>
        <h2>${this.titre}</h2>
        <p>${this.contenu}</p>
        <ul>
       `;
        for(let item of this.categories){
            output += `<li>${item}</li>`
        }
        output += `
            </ul>
        </article>
        `
       return output;
    }
}

const p = new Page("page d'accueil" , "contenu de la page d'accueil");
console.log(p.html());
const a = new Article("Blog" , "page de présentation", ["photoshop", "illustrator"]);
console.log(a.html());
// tsc 11-exo.ts && node 11-exo.js
