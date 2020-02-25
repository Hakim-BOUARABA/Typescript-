//01-exo.ts 
// lancer le terminal avec le watch 
// tsc --watch 01-exo.ts


// définir une interface 
// permet de qualifier mon objet
// scope éviter que les variables rentre dans le scope glabal
export 

interface Profil {
    id : number,
    nom : string ,
    pays : string
}

// collection 
// tableau qui contient des objets 
const annuaire : Array<Profil> = [
    {id : 1 , nom :"Alain" , pays: "France"},
    {id : 2 , nom :"Béatrice" , pays: "Belgique"},
    {id : 3 , nom :"Charles" , pays: "France"}
];

// function 
function filtrePays(annuaire : Array<Profil> , paysRecherche :string) :Array<Profil> {
    const resultat : Array<Profil> = [];
    // faire une boucle sur annuaire 
    for(let i :number = 0; i < annuaire.length ; i++){
         // vérifier si l'item dispose de la valeur 
        if(annuaire[i].pays == paysRecherche){
             // si ok push() dans resultat
            resultat.push(annuaire[i])
        }
    }
    return resultat;
}

// utiliser ma collection et ma fonction 

const recherche : Array<Profil> =  filtrePays(annuaire , "Belgique");

console.log(recherche);
// arrêt du watch Ctrl + C
// tsc --removeComments 01-exo.ts && node 01-exo.js
