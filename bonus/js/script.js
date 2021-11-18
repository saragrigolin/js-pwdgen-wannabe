// Descrizione esercizio:
// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

// Chiediamo all'utente anche il suo numero preferito
// al numero preferito sommiamo 5
// attacchiamo alla password, al posto del 21, il risultato



// Chiedo all'utente il suo nome
let nomeUtente = prompt('Inserisci il tuo nome');
console.log('Nome utente ' + nomeUtente);

// Chiedo all'utente il suo cognome
let cognomeUtente = prompt('Inserisci il tuo cognome');
console.log('Cognome utente', cognomeUtente);

// Chiedo all'utente il suo colore preferito
let colorePreferitoUtente = prompt('Inserisci il tuo colore preferito');
console.log('Colore preferito utente ' + colorePreferitoUtente);

// Chiedo all'utente il suo numero preferito
let numeroPreferitoUtente = prompt('Inserisci il tuo numero preferito');
console.log ('Numero preferito utente', numeroPreferitoUtente);

// Sommo 5 al numero preferito
let somma = parseInt(numeroPreferitoUtente) + 5;
console.log('Numero preferito più 5 ' + somma);

// Scrivo sulla pagina nome+cognome+colore+somma
let password = nomeUtente + cognomeUtente + colorePreferitoUtente + somma;
console.log(password);
document.getElementById('password').innerHTML = '<h1>' + password + '</h1>';