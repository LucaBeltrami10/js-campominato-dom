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
