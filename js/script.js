// Descrizione esercizio:
// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

// Chiedo all'utente il suo nome
const nomeUtente = prompt('Inserisci il tuo nome');
console.log('Nome utente ' + nomeUtente);

// Chiedo all'utente il suo cognome
const cognomeUtente = prompt('Inserisci il tuo cognome');
console.log('Cognome utente', cognomeUtente);

// Chiedo all'utente il suo colore preferito
const colorePreferitoUtente = prompt('Inserisci il tuo colore preferito');
console.log('Colore preferito utente ' + colorePreferitoUtente);

// Variabile per numero 21
const number = 21;

// Scrivo sulla pagina nomecognomecolorepreferito21
let password = nomeUtente + cognomeUtente + colorePreferitoUtente + number;
console.log(password);
document.getElementById('password').innerHTML = '<h1>' + password + '</h1>';