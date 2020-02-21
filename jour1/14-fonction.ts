// 14-fonction.ts 
// tsc --watch 14-fonction.ts 

export 

function calculAireRectangle(l:number , h:number) :string{
    const resultat = (l * h) + "cm²" ;
    return resultat;
}

// si vous avez des fonctions qui ne retourne rien

function generateLorem() :void{
    console.log("Lorem ipsum");
}

// si vous avez des fonctions avec des argument facultatifs
// h est facultatif
function calculAire (l : number , h ? :number) :number{
    if(h){
        return l*h ;
    }else{ 
        return l*l;
    }
}

const resultat = calculAire(2);

console.log(resultat);

// tsc 14-fonction.ts && node 14-fonction.js