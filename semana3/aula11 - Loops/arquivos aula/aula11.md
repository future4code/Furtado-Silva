## WHILE
```Javascript
let numeroDoUsuario = Number(prompt("Digite um número"));
   let soma = 0
   
   while(numeroDoUsuario !== 0) {
    soma += numeroDoUsuario
    numeroDoUsuario = Number(prompt("Digite um número"));
   }
   console.log(soma)
   ```
## FOR
 ```Javascript
 for (let i=0; i<10; i++) {
     console.log(i)
 }
```
#### Imprimindo uma lista numérica com classificação PAR/ÍMPAR
```Javascript
for (let i=0; i<=10; i++) {
    if(i%2===0) {
    console.log(i + " PAR")
    } else {
    console.log(i + " ÍMPAR")
    }  
}
   ```
#### Percorrendo um array
 ```Javascript
const numeros = [14, 67, 89, 15, 23, 99]

for (let i = 0; i<5; i++) { 
    const elemento = numeros[i]
    console.log(elemento)
}
// i < 5: [5] é a posição da lista (99) logo menor que 5 temos [4](23)

// i<numeros.length percorrerá todo o array
   ```
#### Imprimindo apenas o MAIOR número de um array
```Javascript
const numeros = [14, 67, 89, 15, 300, 99]
let maior = numeros[0]

for (let i = 0; i<numeros.length; i++) {
    const elemento = numeros[i]
    if (elemento > maior) {
        maior = elemento
    }
    
}
  
console.log(maior)
   ```
## FOR...OF
   ```Javascript
const numeroS = [14, 67, 89, 15, 300, 99]

for (let numero of numeroS) {
    console.log(numero)   
}
   ```

   ```Javascript
const numeros = [14, 67, 89, 15, 300, 99]
let maior = numeros[0]

for ( let numero of numeros) {
    if(numero > maior) {
        maior = numero
    }  
}
console.log(maior)
   ```
#### Concatenação de itens formando uma mensagem
  ```Javascript
 const listapalavras = ["Oi", "sumida", "tudo", "bem?"]
let mensagem = ""

for (palavra of listapalavras) {
    mensagem += palavra + " " // mensagem = mensagem + palavra + " "
}

console.log(mensagem)
   ```   

## REFERÊNCIAS
  > http://pythontutor.com/javascript.html#mode=display