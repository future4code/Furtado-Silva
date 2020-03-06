# Challenger

### Considere um array com esses elementos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

>1. Como você faria para imprimir todos os elementos deste array um abaixo do outro?
```Javascript
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    console.log(a.join('\n'))
```

>2. Como você faria para adicionar o próximo número neste array (número 16)?

`Number(prompt("Adcione o próximo número"))`

```Javascript
let enesimo = Number(prompt("Adcione o próximo número"))
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, enesimo]
    console.log(a.join('\n'))
```
 
>3. Como você faria para criar um novo array com todos esses elementos com strings, ou seja: ['1', '2', '3', '4', '5', ...]
???