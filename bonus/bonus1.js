const eta1 = prompt("Inserire eta prima persona");
const eta2 = prompt("Inserire eta seconda persona");

if(isNaN(eta1) || isNaN(eta2)){
    alert("Inserire valore numerico");
} else {
    if(eta1 > eta2){
        alert("La prima persona e' piu grande");
    } else if( eta1 < eta2){
        alert("La seconda persona e' piu grande");
    } else {
        alert("Hanno la stessa eta");
    }
}