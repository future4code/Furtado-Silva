/** EXERCÍCIO 1
 * a. false
 * b. false
 * c. true
 * d. false
 * e. boolean
 */

 /** EXERCÍCIO 2
    a. O que é `array` e como se declara em `JS`?
        array é uma estrutura de dados capaz de armazenar/receber
        mútiplos valores/dados.
        let nomeArray = [n1, n2, n3, ... ,n]

    b. Qual o index inicial de um `array`?
       O ítem 0 de um array representa o primeiro elemento.
       nomeArray[0] => n1
    c. Como se determinar o tamanho do `array`?
        nomeArray.length
    d. Indique todas as mensagens impressas no console.
        I. undefined
        II. null
        III. 11
        IV. 3 e 4
        V. 19 e 9
        VI. 3
        VII. 1
  */

  //ATIVIDADE ESCRITA #1
let grausFahrenheit = 77
let grausCelcius = [80, 30, Number(prompt("Insira o valor °C"))]

const fahrenheitToKelvin = (grausFahrenheit - 32)*5/9 + 273.15 + "°K"
const celciustoFahrenheit = [
    grausCelcius[0]*9/5 + 32 + "°F",   
    grausCelcius[1]*9/5 + 32 + "°F",
]
let celciusToKelvin = [
    grausCelcius[1] + 273.15 + "°K",
    grausCelcius[2] + 273.15 + "°K"
]

console.log(fahrenheitToKelvin) // 77F = 298.15K
console.log(celciustoFahrenheit[0]) // 30C = 176F
console.log(celciusToKelvin[0]) // 30C = 303.15K
console.log (grausCelcius[2] + "°C " + "equivale a " + celciusToKelvin[1])

