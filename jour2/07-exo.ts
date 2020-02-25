// 07-exo.ts

class Page{
    // syntaxe courte pour initaliser 
    constructor(
        private titre : string ,
        private contenu : string ,
        private categories : Array<string>
    ){}
    genererHTML () :string{
        let output :string = `
    <div>
        <h1>${this.titre}</h1>
        <p>${this.contenu}</p>
        <ul>`;
            // boucle 
            for(let i:number = 0 ; i < this.categories.length ; i++)
            {
                output += `<li>${this.categories[i]}</li>`
            }
        output += `
        </ul>
    </div>`;
        return output ;
    }
}
const page = new Page(
                    "Home Page", 
                    "lorem ipsum" , 
                    ["ajax", "node", "angular"]
                )
console.log(page.genererHTML());
// tsc 07-exo.ts && node 07-exo.js
class Page2{
    titre : string ;
    contenu : string ;
    categories : Array<string>;
    // syntaxe courte pour initaliser 
    constructor(
        t : string ,
        c : string ,
        cat : Array<string>
    ){
        this.titre = t ;
        this.contenu = c ;
        this.categories = cat ;
    }

}

// créer un nouveau fichier 08-extends.ts
