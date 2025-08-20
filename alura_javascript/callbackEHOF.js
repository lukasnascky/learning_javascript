// HOF -> Higher-Order Function = função que recebe outra função como parametro

function calcular(numero1, numero2, operacao) {
   return operacao(numero1, numero2)
}

function soma(num1, num2) {
   return num1 + num2
}

console.log(calcular(2, 3, soma))