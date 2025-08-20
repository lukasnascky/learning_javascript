function saudacao(nome){
    console.log("Function diz: Olá,", nome)
}

let contador = 0

// setInterval recebe como paremetros uma função e o tempo
const id = setInterval(() => {
    contador++
    console.log("Segundos decorridos:", contador)

    if(contador == 10) {
        clearInterval(id)
    }
}, 1000)