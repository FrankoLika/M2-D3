/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
  console.log("ES.1");
  console.log("");

  let num1 = 19;
  let num2 = 22;
  if(num1 > num2){
    console.log('il numero più grande è ' + num1)
  }else{
    console.log('il numero più grande è ' + num2)
  }
  



/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
console.log("");
console.log("ES.2");
console.log("");

function notequal(numero){
  if(numero !== 5){
    console.log('not equal');
  }
}
notequal(3);



/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
console.log("");
console.log("ES.3");
console.log("");

function controllasedivisibile(numeroo){
  if(numeroo % 5 === 0);{
  console.log('divisible by 5');
  }
}
controllasedivisibile(25);



/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
console.log("");
console.log("ES.4");
console.log("");

function add8(nm1, nm2){
  if(nm1 === 8 || nm2 === 8){
    console.log('uno dei due ha come valore 8')
  }else if(nm1+nm2 === 8 || nm1-nm2 === 8){
    console.log('la loro addizione o sottrazione risulta 8');
  }else{
    console.log("False");
  }
}
add8(8,12);



/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
console.log("");
console.log("ES.5");
console.log("");

function totalShoppingCart(totalShoppingCart){
let costospedizione = 10;
if(totalShoppingCart>50){
  console.log( 'Totale = '+ totalShoppingCart + ', con Spedizione Gratuita');
}else{
  let totale =totalShoppingCart + costospedizione;
  console.log("Il totale è " + totale);
}
}
totalShoppingCart(52);



/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
console.log("");
console.log("ES.6");
console.log("");

function shoppingcart(totalShoppingCart){
  let costospedizione = 10;
  const sconto = totalShoppingCart * 0.2;
  if(totalShoppingCart > 50){
    let totaleT = totalShoppingCart - sconto;
    console.log( 'Totale = '+ totaleT + ', con Spedizione Gratuita');
  }else{
    let totaleT = totalShoppingCart - sconto;
    let totale = totaleT + costospedizione;
    console.log("Il totale è " + totale + ', spedizione inclusa');
  }
  }
  shoppingcart(42);


/* ESERCIZIO 7
  Crea tre variabili e assegna un valore numerico a ciascuna di esse utilizzando un blocco condizionale 
  crea un algoritmo per ordinarle secondo il loro valore dal piu alto al piu basso
*/
console.log("");
console.log("ES.7");
console.log("");

function ordinaNumer(num1, num2, num3){
 let numeriOrdinati = [num1, num2, num3];
 numeriOrdinati.sort(function(a,b){
 return b - a;
 })
 console.log(numeriOrdinati)
}
 ordinaNumer(10,5,8);


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
console.log("");
console.log("ES.8");
console.log("");

  function controllaSeIntero(num){
    if(typeof(num) === 'number' && Number.isInteger(num)){
      return "intero";
    }else{
      return "no";
    }
  }
  console.log(controllaSeIntero(0.5));



 /* ESERCIZIO 9
  crea un algoritmo per controllare se un numero fornito sia pari o dispari
*/
console.log("");
console.log("ES.9");
console.log("");

function controllaPariDispari(num){
  if(num % 2 === 0){
    return "pari";
  }else{
    return "dispari";
  }
}
console.log(controllaPariDispari(121));


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
console.log("");
console.log("ES.10");
console.log("");

let val = 7
    if (val < 5) {
      console.log("Meno di 5");
    }
      else if (val < 10) {
        console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }





/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/
console.log("");
console.log("ES.11");
console.log("");

let numero = 20;
if(numero < 5){
  console.log("Tiny");
}else if (numero < 10){
  console.log("Small");
}else if(numero < 15){
  console.log("Medium");
}else if(numero < 20){
  console.log("Large");
}else{
  console.log("Huge");
}





/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/
console.log("");
console.log("ES.12");
console.log("");

let gender;
let isMale = false;
gender = isMale ? "male":"female";
console.log(gender);



/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/
console.log("");
console.log("ES.13");
console.log("");

let num = 0;
while(num <= 5){
  console.log(num);
  num ++;
}





/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/
console.log("");
console.log("ES.14");
console.log("");


for(var i = 0; i <= 10; i++){
  console.log(i);
}




/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/
console.log("");
console.log("ES.15");
console.log("");


for(var numberr = 0; numberr <= 10; numberr++){
  if(numberr === 3 || numberr === 8){
    continue;
  }
  console.log(numberr)
}




/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/
console.log("");
console.log("ES.16");
console.log("");

for(let numb = 0; numb <= 15 ; numb++){
  console.log(numb);
  if(numb % 2 ===0){
    console.log("Pari");
  }else{
    console.log("Dispari");
  }
  console.log("");
}






/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, 
  stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano
  entrambe, stampa "FizzBuzz".
*/
console.log("");
console.log("ES.17");
console.log("");

for(i = 1; i<=100 ; i++){
  if(i %3 === 0 && i %5 !==0 ){
    console.log("Fizz");
  } else if(i %5 === 0 && i %3 !== 0 ){
    console.log("Buzz");
  } else if(i %5 === 0 && i %3 === 0 ){
    console.log("FizzBuzz"); 
  } else {
    console.log(i);
  }  
}

/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", 
  che può avere un valore da 1 a 7. Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il
   valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/
console.log("");
console.log("ES.17");
console.log("");

let day = 2;
switch(day){
  case 1:
    console.log("Lunedi");
    break;
  case 1:
    console.log("Martedi");
    break;
  case 1:
    console.log("Mercoledi");
    break;
  case 1:
    console.log("Giovedi");
    break;
  case 1:
    console.log("Venerdi");
    break;  
  case 1:
    console.log("Sabato");
    break;
  case 1:
    console.log("Domenica");
    break;
  default: // istruzione eseguita se nessun altro case è stato gestito
    console.log("Error");
}



