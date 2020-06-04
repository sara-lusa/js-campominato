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


// // PER BONUS
// // Chiedo all'utente la difficoltà del livello
// // Validazione
// var difficoltà = parseInt(prompt('Scegli un livello di difficoltà: 0, 1 o 2?'));
//
// while ( isNaN(difficoltà) || difficoltà > 2 || difficoltà < 0 || difficoltà == '' ) {
//   difficoltà = parseInt(prompt('ERRORE: Scegli un livello di difficoltà: 0, 1 o 2?'));
// }
// console.log(difficoltà);
//
// // Dichiaro il livello di difficoltà scelto
// var numeroMassimoCaselle = sceltaLivelloDiDifficoltà(difficoltà);
//
//
// console.log(numeroMassimoCaselle);
//
// // Dichiaro il numeroBombe
// var numeroBombe = 16;
//
// // Genero 16 numeri casuali tra 1 e 100 e li metto in una array
// // dichiaro array
// var arrayBombe = [];
//
// while ( arrayBombe.length < numeroBombe ) {
//   // Genero numero random
//   var computerRandom = generoNumeriRandom(numeroMassimoCaselle, 1);
//   console.log(computerRandom);
//
//   // // Controllo se ci sono numeri doppi nell'array delle bombe
//   // var numeroDoppio = arrayBombe.includes(computerRandom);
//   //
//   // // Se non ci sono numeri ripetuti, faccio push nell'array delle bombe
//   // if (numeroDoppio == false) {
//   //   arrayBombe.push(computerRandom);
//   // }
// }
// console.log(arrayBombe);
//
// // // Chiedo all'utente di inserire un numero alla volta, fino a un massimo di 84 (100 - 16)
// // var numeriUtente = [];
// // var singoloNumeroUtente;
// // var numeroUtenteVietato = false;
// //
// // // Ciclo di richiesta e controllo di numeri dell'utente
// // while ( numeroUtenteVietato == false && numeriUtente.length <= (numeroMassimoCaselle - numeroBombe) ) {
// //
// //   singoloNumeroUtente = parseInt(prompt('Inserisci un numero da 1 a 100.'));
// //
// //   // Controllo se il numero è tra quelli generati inizialmente
// //   // Se c'è, blocco il ciclo
// //   if ( arrayBombe.includes(singoloNumeroUtente) ) {
// //     numeroUtenteVietato = true;
// //   }
// //
// //   // Se non c'è, continuo a chiedere altri numeri
// //   else {
// //     numeriUtente.push(singoloNumeroUtente);
// //   }
// // }
// //
// // console.log(numeriUtente);
// //
// // // Comunico il punteggio, il numero di volte che ha inserito un numero consentito
// // var messaggio = 'Hai vinto!';
// // if (numeroUtenteVietato == true) {
// //   messaggio = 'BOOM, hai perso. il tuo punteggio è di ' + (numeriUtente.length);
// // }
// // console.log(messaggio);
//
// // FUNZIONI
// // Creo una funzione che cambia il numeroMassimo in base al livello di difficoltà
// // argomento: livello di difficoltà scelto dall'utente col prompt
// // return numeroMassimo di 'caselle' di gioco
// function sceltaLivelloDiDifficoltà(livelloDiDifficolta) {
//   var numeroMassimo;
//
//   switch (livelloDiDifficolta) {
//     case 0:
//       numeroMassimo = 100;
//       break;
//     case 1:
//       numeroMassimo = 80;
//       break;
//     case 2:
//       numeroMassimo = 50;
//       break;
//   }
//
//   return numeroMassimo;
// }

function generoNumeriRandom(max, min) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function verificoSeElementoInArray(elementoDaVerificare, listaArray) {
  var numeroRipetuto = false;

  for (var i = 0; i < listaArray.length; i++) {
    if (elementoDaVerificare == listaArray[i]) {
      numeroRipetuto = true;
    }
  }

  return numeroRipetuto;
}

var test = [1, 2, 3, 4, 5];
var elemento = 33;
var funzione = verificoSeElementoInArray(elemento, test)

console.log(funzione);
