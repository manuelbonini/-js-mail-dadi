// lista di email
var arrayEmail = ['mariorossi@gmail.com', 'giovanniverdi@gmial.com', 'marco1213@gmail.com', 'lucafiore@gmail.com'];

// chiedo all'utente di inserire la sua email
var emailUtente = prompt('Inserisci la tua email:');

// variabile per sapere se gia registrato
var isPresente = false;

// ciclo per controllare che la mail dell'utente si gia inserita
for(i = 0 ; i <arrayEmail.length ; i++ ){

    if(emailUtente == arrayEmail[i] ) {

        isPresente = true;
    }
}

if(isPresente) {
    alert('Utente gia registrato, inserire password');
}else {
    alert('Utente non registrato');
}