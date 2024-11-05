let estaChovendo : boolean = false;

estaChovendo = true;

let idade : number = 22;

let altura : number = 1.77;

const nacionalidade : string = 'brasileiro';

//tipando arrays
const colegas : string[] = ['Lucas', 'Fernanda', 'Paulo', 'Carlos', 'Maria'];

//outra forma (array normal)
const tecnologias : Array<string> =['Html', 'JS', 'CSS',];

//Array de leitura - nao consegue dar o .push para adicionar novos itens 
const notas : ReadonlyArray<number> = [4, 6, 8 , 10];

//criando uma tupla 
const lista : [nome: string, estaEstudando: boolean, idade: number] = ['caio', true, 38];

//Union typescript - permite combinar um ou mais tipos de dados
// com o "|" a variavel idadeDaAna vai aceitar tanto o tipo numerico quanto uma string;
let idadeDaAna : number | string = 26 
idadeDaAna = '25 anos';

//Any Typescript - utilizado quando fazemos integracao com backend e n temos certeza de qual 
//tipo de dado que o backend vai nos devolver. 
//O "any" é um coringa que permite atribuir qualquer tipo de valor a uma variável, 
//sem restrições de verificação de tipo. Por exemplo, uma variável do tipo "any" pode 
//ser usada como uma string, uma função ou um objeto. 
let dadosDaApi : any;
dadosDaApi = 400
dadosDaApi = 'String'
dadosDaApi = true
dadosDaApi = [1,2,3]


