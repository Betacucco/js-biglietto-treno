//Dichiaro le mie variabili
const chilometri = prompt("Inserisci i chilometri da percorrere");
const eta = prompt("Inserisci l'eta");

let prezzoBiglietto = parseFloat(0.21 * chilometri);
//Controllo se vengono inseriti valori numerici
if((isNaN(chilometri)) || (isNaN(eta))){
    alert("Il valore inserito non e' numerico");
    prezzoBiglietto = NaN;
} else {
    if(eta < 18){
        prezzoBiglietto = (prezzoBiglietto - ((prezzoBiglietto * 20)/100)); 
    } else if(eta > 65){
        prezzoBiglietto = (prezzoBiglietto - ((prezzoBiglietto * 40)/100));
    } else {
        prezzoBiglietto;
    }
}
//Il risultato finale deve avere due cifre decimali
prezzoBiglietto = prezzoBiglietto.toFixed(2);
//Testo stampato sullo schermo
let testoDaStampare = `-----Prezzo Biglietto------
Chilometri:  ${chilometri}
Eta:  ${eta}

Prezzo: ${prezzoBiglietto}
--------------------------------`

console.info(testoDaStampare);
//Valori da inserire tramite il prompt ed il calcolo del prezzo
document.getElementById("chilometri").innerHTML = chilometri;
document.getElementById("eta").innerHTML = eta;
document.getElementById("prezzoBiglietto").innerHTML = prezzoBiglietto;