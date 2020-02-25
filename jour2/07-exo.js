// 07-exo.ts
var Page = /** @class */ (function () {
    // syntaxe courte pour initaliser 
    function Page(titre, contenu, categories) {
        this.titre = titre;
        this.contenu = contenu;
        this.categories = categories;
    }
    Page.prototype.genererHTML = function () {
        var output = "\n    <div>\n        <h1>" + this.titre + "</h1>\n        <p>" + this.contenu + "</p>\n        <ul>";
        // boucle 
        for (var i = 0; i < this.categories.length; i++) {
            output += "<li>" + this.categories[i] + "</li>";
        }
        output += "\n        </ul>\n    </div>";
        return output;
    };
    return Page;
}());
var page = new Page("Home Page", "lorem ipsum", ["ajax", "node", "angular"]);
console.log(page.genererHTML());
var Page2 = /** @class */ (function () {
    // syntaxe courte pour initaliser 
    function Page2(t, c, cat) {
        this.titre = t;
        this.contenu = c;
        this.categories = cat;
    }
    return Page2;
}());
