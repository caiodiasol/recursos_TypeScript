"use strict";
//criando um array de alunos(objetos - nome, cursos, idade )
const alunos = [
    {
        nome: 'Caio',
        cursos: ['html', 'js', 'css'],
        idade: 38
    },
    {
        nome: 'Ana',
        cursos: ['ux-ui', 'back', 'less'],
        idade: 22
    },
];
alunos.push({
    nome: 'Julia',
    cursos: ['html', 'java', 'css'],
    idade: 33,
});
//utilizando o tipo em um objeto  (utilizando o CRTL + space = autocomplete)
//colocando a iterrogacao na criacao da tipagem permite ter propriedades opcionais
const novoAluno = {
    nome: 'Lucas',
    idade: 44
};
//criando uma funcao para padronizar a estrutura
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
