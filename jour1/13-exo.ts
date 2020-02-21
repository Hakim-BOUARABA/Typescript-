// 13-exo.ts 
// tsc --watch 13-exo.ts 

export
// type personnalisé
interface Coordonnee{
    x:number,
    y:number
}

function drawCarre(origin:Coordonnee , final:Coordonnee) :string {

    return `le carré a pour point de départ ${origin.x} ${origin.y} du point de départ pour point final ${final.x} ${final.y} du point final`;
}

const resultat = drawCarre({x:2,y:3},{x:10,y:50});

console.log(resultat);

// tsc 13-exo.ts && node 13-exo.js

// créer un nouveau fichier 14-fonction.ts 
