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


let numeroRandomUtente = parseInt(prompt('Scegli pari o dispari e inserisci un numero da 1 a 5'));

while (numeroRandomUtente > 5 || Number.isNaN(numeroRandomUtente)) {
    alert('Devi inserire un numero compreso tra 1 e 5!');
    numeroRandomUtente = prompt('Scegli pari o dispari e inserisci un numero da 1 a 5');
}

let numeroRandomComputer = Math.floor(Math.random() * 5) + 1; //vale come "funzione"?

let sommaNumeri = numeroRandomUtente + numeroRandomComputer;

function testPariODispari (numero) {
    if (numero % 2 == 0) {
        return 'pari'
    } else {
        return 'dispari'
    }
}

console.log('Il numero scelto da utente è: ' + testPariODispari(numeroRandomUtente));

console.log('Il numero randomico del computer è: ' + testPariODispari(numeroRandomComputer));

console.log('La somma dei due numeri randomici è: ' + testPariODispari(sommaNumeri));

if ((testPariODispari(numeroRandomUtente) != testPariODispari(sommaNumeri) &&
     testPariODispari(numeroRandomComputer) != testPariODispari(sommaNumeri))) {
    console.log('Avete perso entrambi');
} else if (testPariODispari(numeroRandomUtente) === testPariODispari(numeroRandomComputer)) {
    console.log('Ha vinto lo sport!');
}



if (testPariODispari(sommaNumeri) === 'pari' ) {
    if (numeroRandomUtente % 2 == 0) {
        console.log('Ha vinto utente')
    } else if (numeroRandomComputer % 2 == 1) {
        console.log('Ha vinto il computer')
    } 

}

if (testPariODispari(sommaNumeri) === 'dispari' ) {
    
    if (numeroRandomUtente % 2 == 1) {
        console.log('Ha vinto utente')
    } else if (numeroRandomComputer % 2 == 1) {
        console.log('Ha vinto il computer')
    }
}




/*
let parolaUtente = prompt("Inserisci una parola");


//COPIATO E INCOLLATO DA INTERNET!!! DA RIFARE!!!

function check_Palindrome(str_entry){
    // Change the string into lower case and remove  all non-alphanumeric characters
       var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
        var ccount = 0;
    // Check whether the string is empty or not
        if(cstr==="") {
            console.log("Devi inserire una parola!!!");
            return false;
        }
    // Check if the length of the string is even or odd 
        if ((cstr.length) % 2 === 0) {
            ccount = (cstr.length) / 2;
        } else {
    // If the length of the string is 1 then it becomes a palindrome
            if (cstr.length === 1) {
                console.log("La parola è un palindromo");
                return true;
            } else {
    // If the length of the string is odd ignore middle character
                ccount = (cstr.length - 1) / 2;
            }
        }
    // Loop through to check the first character to the last character and then move next
        for (var x = 0; x < ccount; x++) {
    // Compare characters and drop them if they do not match 
            if (cstr[x] != cstr.slice(-1-x)[0]) {
                console.log("La parola non è un palindromo");
                return false;
            }
        }
        console.log("La parola è un palindromo");
        return true;
    }
    //check_Palindrome(parolaUtente)*/


