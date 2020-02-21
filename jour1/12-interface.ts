//12-interface.ts

// tsc --watch 12-interface.ts

// dans le support le dernier chapitre du jour1

// typescript ajoute un nouveau mot clé 
// interface

// article

export 

// autre manière de typer la variable article de manière plus préciser est de créer une interface 
// vient de créer un type spécifique 
interface Article {
    id: number,
    nom: string ,
    contenu : string
}

// manière rapide de typer notre variable article
const article : Article ={
    id : 1,
    nom : "article 1",
    contenu : "un peu de contenu pour l'article"
}

const listeArticleHome : Array<Article> = [
    {
        id : 1,
        nom : "article 1",
        contenu : "un peu de contenu pour l'article"
    },
    {
        id : 1,
        nom : "article 1",
        contenu : "un peu de contenu pour l'article"
    },
    {
        id : 1,
        nom : "article 1",
        contenu : "un peu de contenu pour l'article"
    }
]

function genererArticle (data:Article) : string {

    const resultat:string = `<h1>${data.nom}</h1><p>${data.contenu}</p>`;
    return resultat;
}


const r = genererArticle({nom:"premier article", contenu : "contenu" , id : 1})

console.log(r);

// créer un nouveau fichier 13-exo.ts 
// bloquer le scope du fichier via export
// créer une interface 
// Coordonnee 
// propriete1 x type nombre
// propriete2 x type nombre 
// créer une fonction dessiner un carre
// drawCarre
// fonction avec deux arguments
// origin type Coordonnee
// final type Coordonnee
// return type string
//   le carre a pour point de départ x y du point de départ
// pour point final x y du point final
// transformer ce fichier ts et fichier js
// et l'exécuter dans le shell
//----------------------
// créer le type plus précis pour la variable suivante :
/* const liste4 : Object = {
    items : ["pêche", 4, "poire", 3, "ananas" , 2],
    budget : 40 ,
    unite : "euros"
}; */




