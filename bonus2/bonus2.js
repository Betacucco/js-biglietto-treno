const pariDispari = prompt("Inserire pari o dispari");
const numero = Number(prompt("Inserire un numero da 1 a 9"));

let pariDispari2 = null;
let numeroCasuale = Math.floor(Math.random() * 10);
console.log(numeroCasuale);

switch (pariDispari){
    case "pari":
    pariDispari2 = true;
    break;

    case "dispari":
    pariDispari2 = false;
    break;

    default:
    alert("Il valore inserito non e' valido");
}

if(numero < 1 || numero > 9){
    alert("Il numero inserito non e valido");
} else {
    let somma = (numero + numeroCasuale);
    console.log(somma);

    if(somma % 2 == 0 && pariDispari == "pari"){
        document.writeln("La somma e' pari ed ha vinto il giocatore");
    } else if(somma % 2 == 0 && pariDispari == "dispari"){
        document.writeln("La somma e' pari ed ha vinto il computer");
    } else if(somma % 2 == 1 && pariDispari == "pari"){
        document.writeln("La somma e' dispari ed ha vinto il computer");
    } else {
        document.writeln("La somma e' dispari ed ha vinto il giocatore");
    }
}

