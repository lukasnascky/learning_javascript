const readline = require("readline")

const leitor = readline.Interface({
    input: process.stdin,
    output: process.stdout
})

leitor.question("Qual é o seu nome?\n>>> ", (nome) => {
    console.log("\nOlá,", nome)
    console.log("Boas vindas!")

    leitor.question("\nQual a sua idade?\n>>> ", (idade) => {
        
        if(idade > 18) {
            console.log("Você já pode beber!\n")
        } else {
            console.log("Você não pode beber!\n")
        }

        leitor.close()
    })
})