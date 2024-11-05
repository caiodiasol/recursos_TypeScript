//construindo uma classe com TypeScript (AS PROPRIEDADES VEM ANTES DO CONSTRUTOR)
//o argumento opcional (:?) por convenção sempre depois do argumento principal

class Pessoa {
    nome: string;
    renda?: number;
    
    constructor(nome : string, renda ?: number) {
        this.nome = nome;
        this.renda = renda;
    }

    dizOla(): string {
        return (`${this.nome} disse Oi!`)
    }
} 


//Modificadores
//transformando o saldo numa propriedade privada( nao consegue acessar na classe filha)
//transformando o saldo numa propriedade protegida( consegue acessar na classe filha)
//utilizando modificadores estaticos (pertence a classe e nao a instancia)

class contaBancaria{
    protected saldo: number = 0;
    numeroDaConta: number;

    constructor(numeroDaConta: number){
        this.numeroDaConta = numeroDaConta;
    }

    static retornaNumeroDoBanco(){
        return 123;
    }

    getSaldo(){                   //conferindo extrato
        return this.saldo;
    }

    depositar(valor: number){     //depositando um valor
        this.saldo += valor;
    }
}


class contaBancariaPessoaFisica extends contaBancaria {
    depositar(valor: number): void {
        this.saldo = valor * 2;
    
    }
}

const contaDoPedro = new contaBancariaPessoaFisica(123456)


