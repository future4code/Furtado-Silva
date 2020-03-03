
/**Exercícios de interpretação de código
    * EXERCÍCIO #1
    
    - Recebe um valor do tipo string na variável respostaDoUsuario;
    - Transforma o tipo de dado recebido(string) em numérico através do
método Number() na variável numero.
    - realiza um teste condicional onde o valor da variávél "número"
dividido por 2 deve ter resto igual a zero (numero%2===0).
Se o número testado retornar true imprime a mensagem "Passou no teste." 
no console.
Senão imprime "Não passou no teste.", nesse caso o valor retornado é false,
ou seja, o número recebido é ímpar.

    * EXERCÍCIO #2
    a. recebe uma entrada e atribui um preço pré-determinado de acordo
com do valor da entrada recebido.

    b. 2.25
    c. 24.55
    d. O preço da fruta  Pêra  é  R$  5.5

    * EXERCÍCIO #3
    Sim haverá erro, pois a variável "mensagem" está declarada dentro
do bloco condicional if e portanto seu valor não pode ser recuperado
fora desse escopo, assim sendo, o modo correto seria
colocar essa variável antes (fora) do bloco ou criar
uma função onde poderiamos recuperar o valor resultante 
da função (invocar), mas não o valor da variável dentro dela.
A mensagem de erro é que a variável não foi declarada.
   
*/

// Exercícios de escrita de código
/**
 * EXERCÍCIO #4
 
const n1 = Number(prompt("Insira PRIMEIRO valor numérico"))
const n2 = Number(prompt("Insira SEGUNDO valor numérico"))
const n3 = Number(prompt("Insira TERCEIRO valor numérico"))

let primeiro
let segundo
let terceiro

switch (n1) {
    case n1<n2 && n1<n3:
    primeiro = n1;

    case n2>n1 && n2<n3:
    segundo = n2;

    case n3>n2 && n3>n1:
    terceiro = n3;
}

console.log(n1)
*/

//  * EXERCÍCIO #5

const reinoAnimal = prompt("O animal possui OSSOS (s/n)")
const testaMamifero = prompt("O animal possui PELOS? (s/n)")
//const testaHumano = prompt("O animal é RACIONAL? (s/n)")
const testaAve = prompt("O animal possui PENAS? (s/n)")
//const testaTerrestre = prompt("O animal é TERRESTRE? (s/n)")
//const testaAnfibio = prompt("O animal passa a PRIMEIRA FASE da vida no AMBIENTE AQUÁTICO? (s/n)")

let reino 
let grupo
let naoHumano
let ave 


if (reinoAnimal === "s") {
   reino = "Vertebrado"
} else {
    reino = "Invertebrado"
}

if (testaMamifero === "s") {
    grupo = "Mamífero"
 } else if (testaAve === "s"){
    grupo = "Ave"
 } 

 if (testaAve)

 


console.log(reino, grupo)

