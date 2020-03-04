//# Exercícios de escrita de código
//## EXERCÍCIO 3
// ### a.
/*
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maior = arrayOriginal[0]
let menor = arrayOriginal[0]

for (let numero of arrayOriginal) {
  if(numero > maior) {
    maior = numero
  } 
  if(numero < menor) {
    menor = numero
  } 
}
console.log("O maior número é", maior , "e o menor número é", menor)
*/


// ### b.
/*
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]  
let newArray = []
for (let item=0; item<arrayOriginal.length; item++) {
   let divisao = arrayOriginal[item]/10
   newArray.push(divisao)
  }
  console.log(newArray)
*/
// ### c.  
/*
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let newArray = []

for (numero of arrayOriginal) {
  if (numero%2===0) {
    newArray.push(numero)
  }  
}
console.log(newArray)
*/
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let item 
newArray = []

for (numero of arrayOriginal) {
  let posicao = arrayOriginal.indexOf(numero) //= numero//+= numero + " "
  item = "O elemento do índex "+ posicao + " é " + numero + " "
  newArray.push(item)
}
console.log(newArray.join('\n'))


