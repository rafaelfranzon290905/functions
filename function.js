// const altura = 4
// const largura = 3

// const area = altura * largura

// console.log(area)

// function calcArea(i1, i2) {
//     return i1 * i2
// }

// console.log(calcArea(altura, largura))
// console.log(calcArea(10, 3))
// console.log(calcArea(9, 10000000))
// console.log(calcArea(726, 2))

// function nomear (i1){
//     console.log(`Olá ${i1}`)
// }

// nomear("Jorge")
// nomear("Bianca")
// nomear("Bruna")

// nomear(prompt("Digite seu nome"))

// let numero1 = Number(prompt("Digite um número"))
// let numero2 = Number(prompt("Digite um número"))

// function soma(i1, i2) {
//     let mais = i1 + i2
//     return mais
// }

// let funcaoSoma = soma(numero1, numero2)

// console.log(funcaoSoma)

// funcaoSoma = Number(prompt("Digite outro número"), Number(prompt("Digite outr número")))

// console.log(funcaoSoma)

function divisoes (i1) {
    console.log("i1",i1);
    return [i1[0] / 2, i1[i1.length -1] / 2]
}

const numeros = prompt("Digite sua lista").split(' ')

console.log(divisoes(numeros))

let nomear = function (i1) {
    console.log(`Olá ${i1}`)
}
nomear(prompt("Digite um nome"))
nomear(prompt("Digite um nome"))
nomear(prompt("Digite um nome"))


let soma = (i1, i2) => {
    let mais = i1 + i2
    return mais
}

soma(Number(prompt("Primeiro número")), Number(prompt("Segundo número")))