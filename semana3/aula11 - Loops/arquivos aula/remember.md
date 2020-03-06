# Remember

>1. Explique, com as suas palavras, o que são condicionais. Cite 2 exemplos de estruturas condicionais em projetos de programação.

Condicinais são estruturas que realizam diferentes ações diante da satisfação ou não de uma dada condição.

Exemplos: if, else, switch case


>2. Em que situações utilizamos blocos switch case?

Switch case é indicado quando precisamos atribuir um valor a uma variável em relação ao valor de outra variável. Ao realizar o comparação e retornar true um comando é executado. 

>3. Explique, com suas palavras, o que são escopos. Escreva um trecho de código que demonstre bem o que são escopos e blocos.

Escopos são blocos de código, as estruturas de código Javascript ficam dentro do escopo global e tudo o que for declarado diretamente nele tem valor universal enquanto que os blocos são marcado por {} e tudo o que tiver contido dentro dessas chaves só tem valor no próprio bloco.

```Javascript
    let n1 = 1
    let n2 = 5
    if (n1%2===0 && n2%2!==0) {
       console.log("Você foi premiado")
    } else {
        console.log("Infelizmente não foi dessa vez")
    }
```