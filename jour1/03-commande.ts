// 03-commande.ts

// pour traduire du ts en js => tsc

// la commande tsc dispose d'options 
// que nous allons voir

// tsc fichier.ts

// si vous avez plusieurs fichiers ts
// à transformer en js

// tsc fichier1.ts fichier2.ts 

// tsc *.ts
// tsc src/*.ts
// tous les fichiers qui finissent pas .ts
// dans le dossier src 

// choisir la version de javascript vers laquelle vous voulez transpiler

// tsc --target es6 03-commande.ts 

// enlever tous les commentaires dans le fichier traduit

// tsc --removeComment 03-commande.ts

// cumuler les options 

// tsc --target es6 --removeComment 03-commande.ts 

// dans la documentation => voir toutes les options (flags)possibles que l'on peut utiliser avec tsc

// tsc --removeComments 03-commande.ts

const matieres = ["js","ajax","node"];

for(let sujet of matieres)
{
    console.log(sujet);
}

// tsc --removeComments 03-commande.ts
// tsc --removeComments --target es6 03-commande.ts

// créer un fichier tsconfig.json 
// ce fichier est un fichier de configuration
// il va contenir l'ensemble des options que l'on va choisir
// pour transformer les fichiers ts et js 
// en général on va mettre ce fichier à la racine de nos projets
// il est possible de le mettre dans un autre dossier
// tsc 
// ?? est ce qu'il y a un fichier tsconfig.json ??
// si oui il va utiliser toutes les options mis dans ce fichier 
// npm init --yes => package.json

// pour créer le fichier tsconfig.json 
// tsc --init 

/**
 * commentaire multilignes
 * 
 */

// créer un nouveau fichier 04-exo.ts

// créer une variable phrase : 
// je découvre typescript et la transpilation en javascript

// créer une fonction qui va permettre de retourner les 4 premiers mots de la phrase et les afficher dans la console

// traduire votre fichier type script en version 3 de javascript
// traduire votre fichier type script en version 6 de javascript




