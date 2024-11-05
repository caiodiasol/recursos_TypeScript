"use strict";
//Convertendo os tipos no typescript
//Casting: é o processo de alterar a representação de um valor para uma representação relacionada, 
//permitindo que sejam realizadas diferentes operações sobre ele. 
// let idade : any = 25
var casting;
(function (casting) {
    let idade = 25;
    idade.toFixed();
    idade.length;
    idade.forEach(x => {
        console.log(x);
    });
    // convertendo tipo numerico para tipo desconhecido (unknown)
    let nome = 35;
})(casting || (casting = {}));
