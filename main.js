// 1. Creo le variabili di partenza
let gattiTotali = 44;
let gattiInFila = 6;

// 2. Calcolo le file, l'avanzo e quanti mancano per la riga successiva
let fileRisultanti = Math.floor(gattiTotali / gattiInFila);
let gattiFuori = gattiTotali % gattiInFila;
let gattiMancanti = gattiInFila - gattiFuori;

// 3. Mostro la frase esatta richiesta in console
console.log("Ci sono " + fileRisultanti + " file di gatti e ne mancano " + gattiMancanti + " per una nuova fila, con un avanzo di " + gattiFuori + ".");
