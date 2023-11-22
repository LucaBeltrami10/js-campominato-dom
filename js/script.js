/**
 * 1)seleziono bottone in doom
 * 2)eventlistener su bottone. al click:
 *  -> CICLO FOR: 
 *      ->FUNZIONE DI GENERAZIONE QUADRATI - genero un quadrato. return un ELEMENT
 *      -> aggiungere il quadrato (ELEMENT) generato alla graglia un numero X di volte (bonus. inizialmente 100)
 *      -> aggiungi contenuto (num da 1 a 100, usa index del ciclo)
 *      -> aggiungi classi css
 *      -> 3)addEventListener su ELEMENT. al click
 *          = classlist.add(classe css colore)
 *          = console.log(THIS)(index ciclo usato per aggiungere contenuto)  (prova THIS, teoricamente dovrebbe essere il soggetto del listener. verrà stampato il tag o il contenuto? penso il tag)
 *
    * secondo modo per aggiungere event listener DA TESTARE. FUORI DAL CICLO FOR:
    * 3))seleziono con quatyselectorAll ogni quadrato (ELEMENT)
    *      -> AGGIUNGO a tutti gli elementi selezionati EventListener. al click:
    *          -> .classlist.toggle(classe css.colore)aggiungo listener su ELEMENTO
    *          -> console.log
 */

const playButton = document.getElementById('play-button');
const squareContainer = document.getElementById('squares-container');
console.log(squareContainer)


playButton.addEventListener('click', function(){
    const difficultyLevel =  document.getElementById('difficulty').value
    console.log(difficultyLevel)
    let squareNumber = difficultyLevel * difficultyLevel
    removeChild(squareContainer)

    let randomNumber = []
    randomUniqueNumberFromOneToInFor(squareNumber, randomNumber, 10)
    console.log(randomNumber)

    for (let i = 0; i < squareNumber; i++){
        let newSquare = createDivSquare(difficultyLevel)
        squareContainer.appendChild(newSquare);
        newSquare.innerHTML = i + 1
        newSquare.addEventListener('click', function(){
            newSquare.classList.toggle('bc-lightblue')
            console.log(i + 1)
        })
        
    }
});


/** GENERAZIONE  E APPLICAZIONE BOMBE (DENTRO event listener PLAY button)
 * 1) Inizializzo array vuoto contenente numeri random
 * 2) Creo FUNZIONE per GENERARE un numero random e CONTROLLARE che sia diverso dai numeri in un array guori funzione
 * ...generazione quadrati...
 * 3) CICLO per i numeri inseriti nei quadrati
 *      -> quando un numero è uguale a quello contenuto lista numeri random
 *          - applico classe specifica css
 */







/* FUNZIONI */

/**
 * 
 * @param {*} nColumn // inserisci il numero di quadrati su una singola colonna o riga
 * @returns //div con classe css e dimensionato in base a nColumn
 */
function createDivSquare(nColumn){
    const divSquare = document.createElement('div');
    divSquare.classList.add('my_square');
    divSquare.style.width = `calc(100% / ${nColumn})`
    divSquare.style.height = `calc(100% / ${nColumn})`
    return divSquare;
};


/* funzione con spunto preso da internet */
/**
 * 
 * @param {*} parent //inserisci il padre degli elementi da eliminare
 */
function removeChild(parent){
    while (parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}

/**
 * 
 * @param {*} to limite numerico massimo (compreso) tra cui i numeri randomici verranno generati
 * @param {*} listName nome variabile in cui verrano inseriti i numeri
 * @param {*} multiplicator numero di valori restitutiti nella lista. NB: mai maggiore di TO (ciclo infinito)
 */
function randomUniqueNumberFromOneToInFor(to, listName, multiplicator){
    for ( i=0; i < multiplicator; i++){
        let randomNumber = Math.floor(Math.random() * to) + 1
        while (listName.includes(randomNumber)){
            randomNumber = Math.floor(Math.random() * to) + 1
        }
        listName.push(randomNumber)
    }
}







/* prove da dancellare
let number = [1,2,3,4,12]
let randomNumber = [2,5,6,7,8,1,1,1,4,12]
console.log(number)


let equalNumber = []

for (let i=0; i<number.length; i++){

    let intIndex = 0

    while(intIndex <= randomNumber.length){

        if ( number[i] == randomNumber[intIndex]){
            equalNumber.push(randomNumber[intIndex])
            console.log('numero uguale')
            intIndex += 1
        } else{
            intIndex += 1
        }
    }
}

console.log(equalNumber) */



/* prova per verifica funzionamento funzione
let number = [1,2,3,4,5,6,7,8,9]
let randomListNumber = 1

let ceononce = number.includes(randomListNumber)
console.log(ceononce) */