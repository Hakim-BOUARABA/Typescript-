//  03-exo.ts 

export 


// bonne pratique : mettre la 1ère lettre des class en majuscule 
//  permet pour les utilisateurs de savoir que l'on peut utiliser le mot clé new 

class Vehicule{
    // très envi de const let devant 
    // variable de class 
    // NE PAS mettre 
    marque : string ;
    annee : number ;
    // ne pas faire const marque : string ;

    // fonction de class = méthode 
    // ne pas  mettre le mot clé function
    // lorque l'on déclare une méthode de class 
    rouler() :void{
        const texte:string = `je roule depuis ${this.annee}`;
       this.s1(texte);
    }

    description() :string{
        const texte:string = `je suis un véhicule de la marque ${this.marque}`;// ES6
        // ES3 ES5
        // const texte :string = "je suis un véhicule de la marque "+ this.marque ;
        return texte;
    }

    // fonction qui fait la même chose q'une autre 
    // alias
    s1(texte:string) :void{
        console.log(texte)
    }

    // document.getElementById("p").innerHTML = "hello"
    // $("p").html()

}
// tsc --removeComments 03-exo.ts  && node 03-exo.js