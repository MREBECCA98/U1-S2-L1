/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I datatype sono le categorie che indicano il valore che noi diamo ad una variabile. 
Che cos'è una variabile? è la nostra scatola, dove successivamente andremo a mettere un valore,
come se fosse un regalo, ma in primis dobbiamo creare la scatola, in che modo?
Dobbiamo inizialmente creare la nostra keyword che è composta da LET, seguita dal nome che vogliamo dare
alla nostra scatola, seguito da un'operatore di assegnazione che è "=" ed infine il nostro regalo all'internp
che è il valore.
I valori si suddividono in: VALORI PRIMITIVI e VALORI/DATI STRUTTURALI.
I valori PRIMITIVI sono: string, che serve per immettere all'interno del testo di qualsiasi genere.
Number, viene utilizzato per i numeri sia interi che decimali (con un punto).
Booleand, ammette due soli valori (TRUE or FALSE)
Null, che viene inserito direttamente dall'utente e indica l'assenza di un valore
Undefined, quando la variabile non ha il suo regalo, quindi è vuota
I valori/dati STRUTTURALI sono: array, liste di valore.
Object, modelli di entità più complesse
Function, pacchetti di istruzioni ripetibili.
ES: LET (keyword) nome (string) = (operatore di assegnazione) "Rebecca" (valore)" */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

const myName = "Rebecca";
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let sum = 12 + 20;
console.log("sum", sum);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
console.log("x", x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/*const myName = "Matarozzo";
console.log("myName", myName);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione = 4 - x;
console.log("sottrazione", sottrazione);
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
console.log("name1", name1 == name2);

let EXTRA = name2.toLocaleLowerCase();
console.log("EXTRA", name1 == EXTRA);
