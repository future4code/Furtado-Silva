 //ATIVIDADE ESCRITA #3
let consumoKwh = Number(prompt("Insira o valor em KWh: "))
let valorKwh = 0.05
let desconto = 15
let calculo = consumoKwh * valorKwh
let calculoDesconto = calculo - (calculo * desconto)/100
console.log("Valor: R$ " + calculo)
console.log("Valor com desconto: R$ " + calculoDesconto)


