"use strict";
// 13-exo.ts 
// tsc --watch 13-exo.ts 
exports.__esModule = true;
function drawCarre(origin, final) {
    return "le carr\u00E9 a pour point de d\u00E9part " + origin.x + " " + origin.y + " du point de d\u00E9part pour point final " + final.x + " " + final.y + " du point final";
}
var resultat = drawCarre({ x: 2, y: 3 }, { x: 10, y: 50 });
console.log(resultat);
// tsc 13-exo.ts && node 13-exo.js
