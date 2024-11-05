"use strict";
//construindo uma classe com TypeScript (AS PROPRIEDADES VEM ANTES DO CONSTRUTOR)
//o argumento opcional (:?) por convenção sempre depois do argumento principal
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOla() {
        return (`${this.nome} disse Oi!`);
    }
}
//Modificadores
//transformando o saldo numa propriedade privada( nao consegue acessar na classe filha)
//transformando o saldo numa propriedade protegida( consegue acessar na classe filha)
//utilizando modificadores estaticos (pertence a classe e nao a instancia)
class contaBancaria {
    constructor(numeroDaConta) {
        this.saldo = 0;
        this.numeroDaConta = numeroDaConta;
    }
    static retornaNumeroDoBanco() {
        return 123;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
class contaBancariaPessoaFisica extends contaBancaria {
    depositar(valor) {
        this.saldo = valor * 2;
    }
}
const contaDoPedro = new contaBancariaPessoaFisica(123456);
