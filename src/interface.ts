//Uma interface no POO é um contrato (junçao de regras em uma determinada classe tem que aplicar)

class Conta {
    numeroDaConta: number;
    saldo: number = 0;

    constructor(numeroDaConta: number) {
        this.numeroDaConta = numeroDaConta;
    
    }
}

class ContaSalario extends Conta {
    depositar(valor: number){
        this.saldo += valor;
    }
}

//criando a interface 

interface ITransacional {
    transferir: (valor: number, destinatario: Conta) => boolean;
    taxaTrasferencia: number;
}


interface IExemplo2{
    cnpj: number;
}

interface IExemplo3 extends IExemplo2{
    telefone: number;
}



class ContaCorrente extends Conta implements ITransacional {
    transferir (valor: number, destinatario: Conta)  {
        destinatario.saldo += (valor - this.taxaTrasferencia);
        return true;
    };
    taxaTrasferencia: number =0;

}

