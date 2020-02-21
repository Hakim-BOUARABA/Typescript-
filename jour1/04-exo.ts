// créer la variable
const phrase = "je découvre typescript et la transpilation en javascript";

// .split() => découper un string et stocker chacun des élément dans un tableau

const tableau =  phrase.split(" ");

//console.log(tableau);
const resultat = [];
// afficher uniquement les 4 premiers mots de la phrase
for(let i = 0 ; i < 4 ; i++){
    resultat.push(tableau[i]);
}

// .join() => transformer un tableau en une chaine de caractère 

console.log(resultat.join(" "));
// tsc 04-exo.ts && node 04-exo.js

function decouperPhrase(phrase , nbMot){
    const tableau =  phrase.split(" ");
    const resultat = [];
    // afficher uniquement les 4 premiers mots de la phrase
    for(let i = 0 ; i < nbMot ; i++){
        resultat.push(tableau[i]);
    }
    return resultat.join(" ");
}

const boutPhrase = decouperPhrase(phrase , 3);

console.log(boutPhrase);

// tsc 04-exo.ts && node 04-exo.js
// tsc --target es6 04-exo.ts && node 04-exo.js