// 09-exo.ts

export 
// class Parent
class Page{
    constructor(
        private titre :string ,
        private description:string
    ){}

    footer() : string{
        return `<h3>${this.titre}</h3><p>${this.description}</p>`
    }
}
// class Enfant 
class Portfolio extends Page{}
const p = new Portfolio("présentation", "travaille n° 1");
console.log(p.footer());
// tsc 09-exo.ts && node 09-exo.js

