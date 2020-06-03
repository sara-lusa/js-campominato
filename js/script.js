// Il computer deve generare 16 numeri casuali tra 1 e 100.
// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre
// compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si
// continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero
// massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte
// che l’utente ha inserito un numero consentito.

// BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il
// range di numeri casuali.
// Con difficoltà 0=> tra 1 e 100, con difficoltà 1 => tra 1 e 80, con difficoltà 2=> tra 1 e 50

// PER BONUS
var difficoltà = prompt('Scegli un livello di difficoltà: 0, 1 o 2?');
var numeroMassimo;

switch (difficoltà) {
  case '0':
    numeroMassimo = 100;
    break;
  case '1':
    numeroMassimo = 80;
    break;
  case '2':
    numeroMassimo = 50;
    break;
}

// Genero 16 numeri casuali tra 1 e 100 e li metto in una array
// dichiaro array
var numeriComputer = [];

for (var i = 0; i <= 16; i++ ) {
  // Genero numero random
  var computerRandom = Math.floor(Math.random() * 100) + 1;
  // push nell'array
  numeriComputer.push(computerRandom);
}
console.log(numeriComputer);

// Chiedo all'utente di inserire un numero alla volta, fino a un massimo di 84 (100 - 16)
var numeriUtente = [];
var singoloNumeroUtente;
var numeroUtenteVietato = false;

while ( numeroUtenteVietato == false && numeriUtente.length <= (numeroMassimo - 16) ) {

  singoloNumeroUtente = parseInt(prompt('Inserisci un numero da 1 a 100.'));

  // Controllo se il numero è tra quelli generati inizialmente
  if ( numeriComputer.includes(singoloNumeroUtente) ) {
    numeroUtenteVietato = true;
  }

  // Se non c'è, continuo a chiedere
  else {
    numeriUtente.push(singoloNumeroUtente);
  }
}

console.log(numeriUtente);

// Comunico il punteggio, il numero di volte che ha inserito un numero consentito
var messaggio = 'Hai vinto!';
if (numeroUtenteVietato == true) {
  messaggio = 'Peccato, hai perso. il tuo punteggio è di ' + (numeriUtente.length);
}
console.log(messaggio);
