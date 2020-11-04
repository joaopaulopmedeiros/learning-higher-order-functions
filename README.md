# Learning-higher-order-functions
Programação de alto nível envolve abstração. Esconder detalhes de implementação, visando tornar simples o entendimento do código no momento de leitura por outros programadores.
Uma.
É comum que um algoritmo execute uma instrução repetidas vezes. Por exemplo, exibir os números de 0 a 9 no console.

```javascript
for(let i = 0; i < 10; i++) {
    console.log(i);
}
```

Nós podemos, ainda, abstrair a ação de fazer algo n vezes numa função como:

```javascript
function doSomethingOverTime(n){
    for(let i = 0; i < n; i++) {
        console.log(i);
    }
}
```

No entanto, aqui apenas é mostrado um número no console. E se quiséssemos fazer outra coisa, abstrair as ações? Queremos fazer qualquer coisa repetidas vezes.

```javascript
function doSomethingOverTime(n, action){
    for(let i = 0; i < n; i++) {
        action(i);
    }
}

doSomethingOverTime(4, console.log)
```

Conseguiu pegar o pulo do gato?

## Higher Order Functions
São funções que operam em outras funções! Seja as tomando como argumentos ou as retornando. Essas funções nos permitem abstrair sobre ações. Eles vêm em várias formas. Por exemplo, podemos ter funções que criam novas funções.

Há um método de array built-in do Javascript que permite fazer iterações em elementos como higher order function. Esse é o forEach.

```javascript
const array = [100, 22, 34]

array.forEach(value => console.log(value));
```

Dessa forma, com higher order functions já trazidas pelo próprio JS podemos abstrair operações e aumentar a legibilidade do código. Dentre essas, estão:
- Map
- Filter
- Reduce
- Some
- Every