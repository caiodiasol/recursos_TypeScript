"use strict";
let estaChovendo = false;
estaChovendo = true;
let idade = 22;
let altura = 1.77;
const nacionalidade = 'brasileiro';
//tipando arrays
const colegas = ['Lucas', 'Fernanda', 'Paulo', 'Carlos', 'Maria'];
//outra forma (array normal)
const tecnologias = ['Html', 'JS', 'CSS',];
//Array de leitura - nao consegue dar o .push para adicionar novos itens 
const notas = [4, 6, 8, 10];
//criando uma tupla 
const lista = ['caio', true, 38];
//Union typescript - permite combinar um ou mais tipos de dados
// com o "|" a variavel idadeDaAna vai aceitar tanto o tipo numerico quanto uma string;
let idadeDaAna = 26;
idadeDaAna = '25 anos';
//Any Typescript - utilizado quando fazemos integracao com backend e n temos certeza de qual 
//tipo de dado que o backend vai nos devolver. 
//O "any" é um coringa que permite atribuir qualquer tipo de valor a uma variável, 
//sem restrições de verificação de tipo. Por exemplo, uma variável do tipo "any" pode 
//ser usada como uma string, uma função ou um objeto. 
let dadosDaApi;
dadosDaApi = 400;
dadosDaApi = 'String';
dadosDaApi = true;
dadosDaApi = [1, 2, 3];
