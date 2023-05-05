function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

// a) O que vai ser impresso no console?
// Vai ser impresso 10 e depois 50

// b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
// Não apareceriam pois o return necessita de console.log, enquanto isso, se n tivesse console.log para invocar, mas, tivessem console.log na função apareceria




let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

// a. Explique o que essa função faz e qual é sua utilidade
//Essa função recebe o texto do usuário irá primeiro transformá-lo em lowercase e depois checará se ela contêm a palavra cenoura
// ela retornará true ou false dependendo se ela possui a palavra cenoura ou nao. No caso, independentemente do status de maiúscula ou minúscula da frase, se ela conter cenoura


// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//      i.   `Eu gosto de cenoura`

// true

//      ii.  `CENOURA é bom pra vista`

// true

//      iii. `Cenouras crescem na terra`

// true


// 1. Escreva as funções explicadas abaixo:
    
//     a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:

// "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

// Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.

function nome () {
    console.log("Eu sou Rafa, tenho 17 anos, moro em Rio Grande do Sul e sou estudante")
}
nome()

// b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

function nomeParametros(i1,i2, i3, i4) {
    console.log(`Eu sou ${i1}, tenho ${i2}, moro em ${i3} e sou ${i4}`)
}

nomeParametros(prompt("nome:"), Number(prompt("idade:"), prompt("Cidade:", prompt("profissão:"))))


// 2. Escreva as funções explicadas abaixo:
    
//     a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
    
function soma (i1, i2) {
    return i1 + i2
}

console.log(soma(Number(prompt("Digite um número")), Number(prompt("Digite outro número"))))

//     b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
 
function verdadeiroFalso (i1, i2) {
    return i1 >= i2
}

console.log(verdadeiroFalso(Number(prompt("Digite um número"), Number(prompt("Digite outro número")))))

//     c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
    
function par (i1){
    return i1 % 2 === 0
}

console.log(par(Number(prompt("Digite um número"))))

//     d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

function tamanhoString(coiso) {
    return [coiso.toUpperCase(), coiso.length]
}

let resposta3 = String(prompt("Digite uma mensagem"))

console.log(tamanhoString(resposta3)[0], tamanhoString(resposta3)[1])

// Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

// Números inseridos: 30 e 3
// Soma: 33
// Diferença: 27
// Multiplicação: 90
// Divisão: 10

function soma (i1, i2){
   return i1 + i2 
}
function subtração (i1, i2){
    return i1-i2
}
function multiplicacao (i1, i2){
    return i1*i2
}
function divisao (i1, i2){
    return i1/i2
}

let boom = prompt("Digite dois números, divididos por espaço").split(' ').map(Number)

console.log(`Soma ${soma(boom[0], boom[1])}`)
console.log("subtração", subtração(boom[0], boom[1]))
console.log("multiplicação", multiplicacao(boom[0], boom[1]))
console.log("divisão", divisao(boom[0], boom[1]))

// 1. Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código através de invocações/chamadas. Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções
    


//     a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro
    
let arrow = (i1) => {
    return i1
}

//     b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo

let arrowSoma = (i1, i2) => {
    let sominha = i1 + i2
    return arrow(sominha)
}

console.log(arrowSoma(Number(prompt("Digite um número")), Number(prompt("Digite outro número"))) )

// Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa. Retorne este valor, invoque a função e imprima o resultado no console. 

function pitagoras (i1, i2) {
    return Math.sqrt((i1**2) + (i2**2)).toFixed(2)
}

console.log(pitagoras(Number(prompt("Digite um número")), Number(prompt("Digite um número"))))
