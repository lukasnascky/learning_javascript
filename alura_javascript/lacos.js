
// estrutura do 'for'
for(let contador = 1; contador <= 5; contador++) {
    console.log('Número atual: ', contador);
}

console.log("")

for(let numero = 1; numero <= 15; numero++) {
    if (numero % 2 == 0) {
        console.log("O número", numero, "é par!");
    } else {
        console.log("O número", numero, "é impar!");
    }
}

console.log("")

const palavra = "alohomora"

for (let contador = 0; contador < palavra.length; contador++) {
    console.log(palavra[contador]);
}

