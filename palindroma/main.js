//scrivere una funzione per capire se una parola è palindroma. Quindi chiedere una parola all'utente, utilizzare la funzione per sapere se la parola inserita è palindroma e stampare un messaggio appropriato

//chiediamo una parola all'utente
var parola_utente = prompt('inserisci una parola')
console.log(parola_utente);

//funzione per sapere se la parola è palindroma
function parola_palindroma(phrase) {
    phrase = phrase.replace(/\s+/g, '');
    var phrase_into_array = phrase.split('');
    var reverse_phrase = phrase_into_array.reverse().join('');
    return reverse_phrase.toUpperCase() == phrase.toUpperCase()
}

//se la parola dell'utente è palindroma e stampa un messaggio
if (parola_palindroma(parola_utente) == true) {
    console.log('La frase è palindroma!');
}
else {
    console.log('La frase non è palindroma!');
}
