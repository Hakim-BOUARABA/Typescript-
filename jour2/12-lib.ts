export class Page{
    constructor(private titre :string){

    }
    html():string{
        return "<h1>"+this.titre+"</h1>";
    }
}

export const parametres = {
    url : "localhost",
    port : 3333,
    protocole : "https"
}