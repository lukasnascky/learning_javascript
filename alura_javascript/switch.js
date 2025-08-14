const nota = 8;

switch(nota) {
    case 10: 
    case 9:
        console.log("Excelente");
        break
    case 8:
    case 7:
        console.log("Bom");
        break
    case 6:
    case 5:
    case 4:
        console.log("Mediano");
        break
    case 3:
    case 2:
    case 1:
    case 0:
        console.log("Ruin");
        break
    default:
        console.log("Valor inválido!")
        break
}