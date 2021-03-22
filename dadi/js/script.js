// variabili per numero casuale dell'utente e del cumputer
var numeroCasualeUtente = Math.floor(Math.random() * 6 + 1);
var numeroCasualeCumputer = Math.floor(Math.random() * 6 + 1);

if(numeroCasualeCumputer > numeroCasualeUtente) {
    alert('Ha vinto il computer');
}else if(numeroCasualeCumputer < numeroCasualeUtente) {
    alert('Ha vinto l\'utente');
}else {
    alert('Pareggio');
}