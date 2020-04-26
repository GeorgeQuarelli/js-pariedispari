//gioco pari o dispari contro il pc: chiedere all'utente un numero tra 1 e 5 e generare un numero random tra 1 e 5. Chiedere all'utente se sceglie pari o dispari, quindi fare la somma dei due numeri (giocata utente + giocata pc), quindi valutare se il risultato è pari o dispari e comunicare all'utente se ha vinto o meno

//chiedo all'utente un numero tra 1 e 5
var numero_utente = parseInt(prompt('inserisci un numero tra 1 e 5', 3))
//chiedo all'utente se sceglie pari o dispari
var pari_dispari = prompt('pari o dispari?')

//il computer randomizza un numero a caso tra 1 e 5
var numero_pc = Math.floor((Math.random() * 5) + 1);

//se la somma è pari
function pari() {
    return (numero_utente + numero_pc) % 2 == 0;
}

//Controllo
if ((scelta == 'pari' || 'Pari') && (numero_utente >= 1 && numero_utente <= 5)) {

    console.log('Hai scelto: ' + numero_utente);
    console.log('Il PC ha scelto: ' + numero_pc);

    //Vittoria
    if (((scelta == 'pari' || scelta == 'Pari') && pari() == true) || ((scelta == 'dispari' || scelta == 'Dispari') && pari() == false)) {

        console.log("Hai vinto!");

    }
    //sconfitta
    else {

        console.log('Hai perso!');
    }
}
//Messaggio di errore
else {
    console.log('Errore! re inserisci i dati');
}
