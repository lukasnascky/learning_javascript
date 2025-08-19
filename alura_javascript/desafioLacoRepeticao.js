let numerosPares = 0
let numerosImpares = 0

for(let contador = 0; contador <= 100; contador++) {
    if(contador % 2 == 0) {
        numerosPares++
    }
    else {
        numerosImpares++
    }
}

console.log("\nNúmeros Pares:", numerosPares)
console.log("Números Impares:", numerosImpares)