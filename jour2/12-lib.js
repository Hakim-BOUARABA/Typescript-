"use strict";
exports.__esModule = true;
var Page = /** @class */ (function () {
    function Page(titre) {
        this.titre = titre;
    }
    Page.prototype.html = function () {
        return "<h1>" + this.titre + "</h1>";
    };
    return Page;
}());
exports.Page = Page;
exports.parametres = {
    url: "localhost",
    port: 3333,
    protocole: "https"
};
