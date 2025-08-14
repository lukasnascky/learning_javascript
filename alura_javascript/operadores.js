// OPERADORES ARITMÉTICOS

const numeroUm = 4;
const numeroDois = 8;

const subtracao = numeroUm - numeroDois;
console.log("\nSubtração: ", subtracao);

const soma = numeroUm + numeroDois;
console.log("Soma: ", soma);

const divisao = numeroUm / numeroDois;
console.log("Divisão: ", divisao);

const multiplicacao = numeroUm * numeroDois;
console.log("Multiplicação: ", multiplicacao);

const contaComplexa = numeroUm + numeroDois * numeroDois; 
console.log("Conta Complexa: ", contaComplexa);

const resto = 12 % 2;
console.log("Resto da divisão: ", resto);

const potencia = 2 ** 3;
console.log("Potência: ", potencia);


let contador = 0;
// contador += 1;
contador++ // mesma lógica do C++
console.log("Incremento: ", contador);

// contador -= 1
contador--
console.log("Decremento: ", contador);

// ----------------------------------------------------------
// OPERADORES DE COMPARAÇÃO

const idadeVinny = 21;
const minhaIdade = 20;

const saoIguais = idadeVinny == minhaIdade;
console.log("\nSão Iguais? ", saoIguais);

const idadeMaior = idadeVinny > minhaIdade;
console.log("Idade maior? ", idadeMaior);

const idadeMenor = idadeVinny < minhaIdade;
console.log("Idade Menor? ", idadeMenor);

// >= <= também podem ser usados

// no JS há um operador de estritamente igual ( === )
const numeroString = "34";
const numeroNumber = 34;
const numeroNumberDois = 34;

const comparacaoEstrita = numeroString === numeroNumber;
console.log("\nSão estritamente iguais? ", comparacaoEstrita);

const comparacaoEstritaDois = numeroNumber === numeroNumberDois;
console.log("São estritamente iguais? ", comparacaoEstritaDois);