/*Palidroma
1 Chiedere all’utente di inserire una parola
2 Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
1 L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
2 Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
3 Sommiamo i due numeri
4 Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
5 Dichiariamo chi ha vinto.
Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.*/



/*

let parolaUtente = prompt("Inserisci una parola");

function creazioneStringaAlContrario(stringa) { //stringa capovolta

    let stringaCapovolta = stringa.split("").reverse().join("");

    return stringaCapovolta
}
 
//console.log(creazioneStringaAlContrario(parolaUtente)); //stampa stringa capovolta

if (parolaUtente === creazioneStringaAlContrario(parolaUtente)) { //attenzione, capovolgendo questa condizione non funziona
                                                            
    console.log('La parola è palindroma');
    } else {
    console.log ('La parola NON è palindroma');
    }


    
*/



let pariOppureDispari = prompt('Scegli pari o dispari');

console.log('Utente ha scelto: ' + pariOppureDispari) //stampa scelta pari o dispari dell'utente

let numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));

console.log('Il numero scelto da utente è: ' + numeroUtente); //stampa input utente numero

while (numeroUtente > 5 || Number.isNaN(numeroUtente)) {
    alert('Devi inserire un numero compreso tra 1 e 5!');
    numeroRandomUtente = prompt('Inserisci un numero da 1 a 5');
}

//let numeroRandomComputer = Math.floor(Math.random() * 5) + 1; //è pur sempre una funzione già di per sè...?

function numeroRandomPc (min, max) {
    min = Math.ceil(min);           // prende il massimo del numero minimo dato (arrotondamento per eccesso)
    max = Math.floor(max);          // prende il minimo del numero massimo dato (arrotondamento per difetto)
    return Math.floor(Math.random() * (max - min + 1)) + min; // calcola un numero randomico nel suo intervallo
} 

let numeroRandomComputer = numeroRandomPc(1, 5);

console.log('Il numero randomico del computer è: ' + numeroRandomComputer); 

let sommaNumeri = numeroUtente + numeroRandomComputer; //somma input utente e numero random computer

console.log('La somma dei due numeri randomici è: ' + sommaNumeri); //stampa numero random del computer

function testPariODispari (numero) {
    if (numero % 2 == 0) {
        return 'pari'
    } else {
        return 'dispari'
    }
}

if (testPariODispari(sommaNumeri) === pariOppureDispari ) {
   
    console.log('Ha vinto utente')
    } else {
        console.log('Ha vinto il computer')
    } 




//consegna non interpretata bene; lascio comunque passaggi dove credevo servisse far vincere in base al numero scelto
//(in quanto pari o dispari) rapportato alla somma (pari o dispari)
    
/*if ((testPariODispari(numeroRandomUtente) != testPariODispari(sommaNumeri) &&
     testPariODispari(numeroRandomComputer) != testPariODispari(sommaNumeri))) {
    console.log('Avete perso entrambi');
} else if (testPariODispari(numeroRandomUtente) === testPariODispari(numeroRandomComputer)) {
    console.log('Ha vinto lo sport!');
}*/



/*if (testPariODispari(sommaNumeri) === 'dispari' ) {
    
    if (numeroRandomUtente % 2 == 1) {
        console.log('Ha vinto utente')
    } else if (numeroRandomComputer % 2 == 1) {
        console.log('Ha vinto il computer')
    }
}*/



