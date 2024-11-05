//criando a tipagem 
type aluno = {
    nome: string;
    cursos?: string[];
    idade: number;
}

//criando um array de alunos(objetos - nome, cursos, idade )

const alunos: aluno[] = [
    {
        nome: 'Caio',
        cursos: ['html', 'js', 'css' ],
        idade : 38
    },
    {
        nome: 'Ana',
        cursos: ['ux-ui', 'back', 'less' ],
        idade : 22
    },
]

alunos.push({
    nome: 'Julia',
    cursos: ['html', 'java', 'css'],
    idade : 33,
})

//utilizando o tipo em um objeto  (utilizando o CRTL + space = autocomplete)
//colocando a iterrogacao na criacao da tipagem permite ter propriedades opcionais
const novoAluno : aluno = {
    nome: 'Lucas',
    idade: 44
}

//criando uma funcao para padronizar a estrutura
function exibeAluno(aluno : aluno) {
    console.log(aluno.nome)
}