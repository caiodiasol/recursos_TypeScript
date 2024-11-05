//construindo uma função tipada

function calculaArea(base : number , altura: number) : number {
    return base * altura;
}

//construindo uma função tipada com arrow function

const calcularArea2 = (base: number, altura: number) : number => base * altura;


//Quando estiver trabalhando com o operador REST (quando n se conhece todos os argumentos q a funcao pode receber)
function somar(...numeros : number[]) : void{
    // numeros.reduce()
    console.log(numeros)
}

//utilizando o union type nas funcoes
function teste(): string | number {
    if (10 > 5) {
        return 'dez maior que cinco'
    } else{
        return 5
    }
}

const resultadoDeTeste = teste();