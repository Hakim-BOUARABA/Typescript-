// 10-extends-suite.ts
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// à partir du moment où vous voyez le mot clé
// extends 
// héritage
// permet de décupérer l'intégralité du code écrit dans la class Parent
// hériter + modifier => polymorphisme 
// modifier une propriété / méthode du parent sans avoir à réécrire le code du parent 
var Animal = /** @class */ (function () {
    function Animal(nom, age) {
        this.nom = nom;
        this.age = age;
    }
    Animal.prototype.description = function () {
        return "\n            je suis un Animal, \n            mon nom est " + this.nom + " \n            mon age est " + this.age + "\n            ";
    };
    return Animal;
}());
var Chat = /** @class */ (function (_super) {
    __extends(Chat, _super);
    // ajouter une nouvelle propriété à ma class Enfant
    function Chat(nom, age, couleur) {
        var _this = _super.call(this, nom, age) || this;
        _this.nom = nom;
        _this.age = age;
        _this.couleur = couleur;
        return _this;
        // récupère les instructions du parent et on les modifie = polymorphisme 
    }
    Chat.prototype.information = function () {
        return "\n        Je suis un chat \n        mon nom est " + this.nom + "\n        mon age est " + this.age + "\n        ma couleur est " + this.couleur + "\n        ";
    };
    return Chat;
}(Animal));
var c = new Chat("croquette", 4, "roux");
console.log(c.description());
console.log(c.information());
