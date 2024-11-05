//Convertendo os tipos no typescript
//Casting: é o processo de alterar a representação de um valor para uma representação relacionada, 
//permitindo que sejam realizadas diferentes operações sobre ele. 


// let idade : any = 25
namespace casting {
    let idade : any = 25;
    (idade as number).toFixed();
    (idade as string).length;
    (idade as string[]).forEach(x => {
        console.log(x);
    })

    // convertendo tipo numerico para tipo desconhecido (unknown)
    let nome : string = 35 as unknown as string;
}


