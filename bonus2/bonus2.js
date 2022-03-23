//Mi dichiaro le variabili
const pariDispari = prompt("Inserire pari o dispari");
const numero = parseInt(prompt("Inserire un numero da 1 a 9"));
console.log("Il numero inserito dall'utente e': " + numero);
//Genero il numero casuale e faccio la somma tra i due numeri
let numeroCasuale = Math.floor((Math.random() * 9) + 1);
console.log("Il numero del computer e': " + numeroCasuale);
let somma = (numero + numeroCasuale);
console.log("La somma tra i due numeri e': " + somma);
//Controllo se l'utente inserisce pari o dispari
switch (pariDispari){
    case "pari":
    break;

    case "dispari":
    break;

    default:
    alert("Il valore inserito non e' valido");
}
//Controllo se il nuemro inserito e' maggiore di 1 e minore di 9
if(numero < 1 || numero > 9){
    alert("Il numero inserito non e valido");
} else {
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

