
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

// Exercícios de escrita de código ===================

 // * EXERCÍCIO #4
 
let n1 = Number(prompt("Insira PRIMEIRO valor numérico"))
let n2 = Number(prompt("Insira SEGUNDO valor numérico"))
let n3 = Number(prompt("Insira TERCEIRO valor numérico"))



//  * EXERCÍCIO #5
/**
const reinoAnimal = prompt("O animal possui OSSOS (s/n)")
let testaMamifero
let testaHumano
let testaAve
let testaTerrestre
let testaAnfibio

let reino 
let grupo
let especie

if(reinoAnimal === "s") { //inicio bloco
    reino = "Vertebrado"
    testaMamifero = prompt("O animal possui PELOS? (s/n)")
    
    if(testaMamifero === "s") {
        grupo = "Mamífero"
        testaHumano = prompt("O animal é RACIONAL? (s/n)")
    } if(testaHumano ==="s") {
        especie = "Humano"
        console.log(especie)    
    } if(testaHumano ==="n" ) {
        especie = "Não Humano"
        console.log(especie)
    } if(testaMamifero==="n") {
        testaAve = prompt("O animal possui PENAS? (s/n)")  
    } if(testaAve === "s") {
        especie = "Ave"
        console.log(especie)
    } if(testaAve === "n") {
        testaTerrestre = prompt("O animal é TERRESTRE? (s/n)")  
    } if(testaTerrestre === "s") {
        testaAnfibio = prompt("O animal passa a PRIMEIRA FASE da vida no AMBIENTE AQUÁTICO? (s/n)")
    } if(testaAnfibio ==="s") {
        especie = "Anfíbio"
        console.log(especie)
    } if(testaAnfibio ==="n") {
        especie = "Reptil"
        console.log(especie)
    } if(testaTerrestre === "n") {
        especie = "Peixe"
        console.log(especie)
    } 
    
 } //fim bloco 
 else {
    reino = "Invertebrado" 
    console.log(reino)
 }
 */