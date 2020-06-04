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
// Chiedo all'utente la difficoltà del livello
// Validazione
var difficoltà = parseInt(prompt('Scegli un livello di difficoltà: 0, 1 o 2?'));


while ( isNaN(difficoltà) || difficoltà > 2 || difficoltà < 0 ) {
  difficoltà = parseInt(prompt('ERRORE: Scegli un livello di difficoltà: 0, 1 o 2?'));
}

// Dichiaro il livello di difficoltà scelto
var numeroMassimoCaselle = sceltaLivelloDiDifficoltà(difficoltà);

// Dichiaro il numeroBombe
var numeroBombe = 16;

// Genero 16 numeri casuali tra 1 e 100 e li metto in una array
// dichiaro array
var arrayBombe = [];

while ( arrayBombe.length < numeroBombe ) {
  // Genero numero random
  var computerRandom = generoNumeriRandom(numeroMassimoCaselle, 1);

  // Verifico che non sia computerRandom ripetuto nell'array bombe
  var doppiaBomba = verificoSeElementoInArray(computerRandom, arrayBombe);

  // Se non è ripetuto, pusho il numero nell'array
  if( doppiaBomba === false ) {
    arrayBombe.push(computerRandom);
  }
}
console.log(arrayBombe);

// Chiedo all'utente di inserire un numero alla volta, fino a un massimo di 84 (100 - 16)
var numeriUtente = [];
var numeroUtenteVietato = false;

// Ciclo di richiesta e controllo di numeri dell'utente
while ( numeroUtenteVietato == false && numeriUtente.length <= (numeroMassimoCaselle - numeroBombe) ) {

  var singoloNumeroUtente = parseInt(prompt('Inserisci un numero da 1 a 100.'));
  while ( singoloNumeroUtente < 1 || singoloNumeroUtente > 100 || singoloNumeroUtente == '' || isNaN(singoloNumeroUtente)) {
    singoloNumeroUtente = parseInt(prompt('ERRORE: Inserisci un numero da 1 a 100.'));
  }

  while (verificoSeElementoInArray(singoloNumeroUtente, numeriUtente) === true) {
    singoloNumeroUtente = parseInt(prompt('ERRORE: hai già inserito questo numero.'));
  }

  // Controllo se il numero è tra quelli generati inizialmente
  // Se c'è, blocco il ciclo
  if ( verificoSeElementoInArray(singoloNumeroUtente, arrayBombe) === true ) {
    numeroUtenteVietato = true;
  }
  // Se non c'è, continuo a chiedere altri numeri
  else {
    numeriUtente.push(singoloNumeroUtente);
  }
}

console.log(numeriUtente);

// Comunico il punteggio, il numero di volte che ha inserito un numero consentito
var messaggio = 'Hai vinto!';

if (numeroUtenteVietato == true) {
  messaggio = 'BOOM, hai preso una bomba. il tuo punteggio è di ' + (numeriUtente.length);
}
console.log(messaggio);

// FUNZIONI
// Creo una funzione che cambia il numeroMassimo in base al livello di difficoltà
// argomento: livello di difficoltà scelto dall'utente col prompt
// return numeroMassimo di 'caselle' di gioco
function sceltaLivelloDiDifficoltà(livelloDiDifficolta) {
  var numeroMassimo;

  switch (livelloDiDifficolta) {
    case 0:
      numeroMassimo = 100;
      break;
    case 1:
      numeroMassimo = 80;
      break;
    case 2:
      numeroMassimo = 50;
      break;
  }

  return numeroMassimo;
}

// Creo una funzione che genera numeri casuali
// Argomento: il valore massimo e minimo che i numeri devono avere
// Return: i numeri casuali
function generoNumeriRandom(max, min) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Creo una funzione che verifica se un elemento si trova già in un array
// Argomento: l'elemento da verificare, l'array in cui controllare
// Return: un valore booleano (false, se il numero non è presente nell'array, true, se lo è)
function verificoSeElementoInArray(elementoDaVerificare, listaArray) {
  var numeroRipetuto = false;

  for (var i = 0; i < listaArray.length; i++) {
    if (elementoDaVerificare == listaArray[i]) {
      numeroRipetuto = true;
    }
  }

  return numeroRipetuto;
}
