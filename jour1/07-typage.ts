// 07-typage.ts

// tsc --watch 07-typage.ts


(function(){
    let a = "une chaine de caractère";
})()

// en javascript tu peux écrire
// const b = "Bonjour" ;
// const b = "Bonjour" 

// const c = 22 ; const d = 33 ;
// const c = 22  const d = 33 

// créer un fichier 08-accueil.html
// 08-diaporama.js
// 08-twitter.js

// en js il existe plusieurs manières d'écrire des fonctions

// 1ère manière

function premier(){

}

// 2ème manière

const deuxieme = function(){

}

// exécuter le contenu de la fonction premier
premier();

// exécuter le contenu de la fonction deuxieme 
deuxieme ();

(function(){})() /// déclare la fonction ET l'exécute


const maintenant = function(){
    console.log(new Date());
}

maintenant();

// tsc 07-typage.ts && node 07-typage.js

(function(){
    console.log(new Date());
})()
// fonction anonyme auto exécutante
// permet de garantir la portée des variables 

// nouvelle manière de garantir la portée des variables
// export

// créer un nouveau fichier 09-exo.ts
// ce fichier contient une variable de type objet
// nom : formation
// propriétés suivantes
    // duree = 2
    // unite = "mois"
    // sujet = javascript
    // matieres = ["node","ajax","typescript"]
// faire ensorte que la variable formation ne puisse pas être modifiée par un autre script 
// afficher dans la console la phrase suivante
// la formation en javascript dure 2 mois et dispose de 3 matières
// transpiler ce script en js et l'exécuter dans le shell 





