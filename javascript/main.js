console.log('JS OK')

// SCALETTA

// 1. Raccogliere tutti gli elementi della pagina che mi servono
// 2. Chiedere al passeggero il nome, l'età e il numero dei chilometri negli input
// 3. Fare la logica dello sconto
// 4. Stampare in pagina i risultati


// 1. Raccolgo tutti gli elementi che mi servono
const inputNameElement = document.getElementById('userName');
const inputKmsElement = document.getElementById('userKms');
const inputAgeElement = document.getElementById('userAge');
const ticketContainerElement = document.getElementById("my-ticket-section");
//Buttons
const createBtn = document.getElementById('genera');
const cancelBtn = document.getElementById('annulla');

//Prezzo
const pricePerKms = 0.21;
let priceTag = document.getElementById("costo-biglietto")
let oldPrice = document.getElementById("oldPrice");

//prendo il p che mi serve come alert
const alertNameElement = document.getElementById('nome-obbligatorio');
const alertKmsElement = document.getElementById('kms-obbligatorio');
const alertKms0Element = document.getElementById('kms-non-zero');
const alertSelectElement = document.getElementById('select-not-selected')

//Event Listener di Genera

createBtn.addEventListener('click', function() {
    const inputName = inputNameElement.value.trim();
    const inputKms = parseInt(inputKmsElement.value);
    const inputAge = inputAgeElement.value;

    //mi preparo il calcolo del biglietto base
    
    //creo le variabili che mi servono per fare la logica dei numeri random
    const minCab = 1;
    const maxCab = 10;
    const minCpCode = 1;
    const maxCpCode = 99999;

    
    priceTag = inputKms * pricePerKms;

    //Validatore 
    if (inputName === '') {
        // aggiungo l'alert del nome e rimuovo tutti gli altri eventuali
        alertKmsElement.classList.remove('d-block');
        alertKms0Element.classList.remove('d-block');
        alertNameElement.classList.add('d-block');
        inputNameElement.focus();
        //Mia scelta personale, se c'è qualche errore allora il biglietto non verrà mostrato
        ticketContainerElement.classList.add('d-none');
        return;
    } else if (isNaN(inputKms)) {
        // aggiungo l'alert dei Kms e rimuovo tutti gli altri eventuali
        alertNameElement.classList.remove('d-block');
        alertKms0Element.classList.remove('d-block');
        alertKmsElement.classList.add('d-block');
        inputKmsElement.focus();
        //Mia scelta personale, se c'è qualche errore allora il biglietto non verrà mostrato
        ticketContainerElement.classList.add('d-none');
        return;
    } else if (inputKms < 1  || inputKms > 100000) {
        // aggiungo l'alert dei Kms0 e rimuovo tutti gli altri eventuali
        alertNameElement.classList.remove('d-block');
        alertKmsElement.classList.remove('d-block');
        alertKms0Element.classList.add('d-block');
        inputKmsElement.focus();
        //Mia scelta personale, se c'è qualche errore allora il biglietto non verrà mostrato
        ticketContainerElement.classList.add('d-none');
        return;
    }   else if (inputAge === '') {
        alertNameElement.classList.remove('d-block');
        alertKmsElement.classList.remove('d-block');
        alertKms0Element.classList.remove('d-block');
        alertSelectElement.classList.add('d-block');
        //Mia scelta personale, se c'è qualche errore allora il biglietto non verrà mostrato
        ticketContainerElement.classList.add('d-none');
        return
    }

    // Rimuovo qualsiasi campo che sia apparso
    alertNameElement.classList.remove('d-block');
    alertKmsElement.classList.remove('d-block');
    alertKms0Element.classList.remove('d-block');
    alertSelectElement.classList.remove('d-block')

    //se tutto prima va bene allora si mostra il div
    //oppure posso mostrarlo sempre ed in quel caso rimuovo la classe d-none all'elemento
    ticketContainerElement.classList.remove('d-none');

    
    //Logica dei numeri random
    const randomCab = Math.floor(Math.random() * (maxCab + 1 - minCab)) + minCab;
    const randomCpCode = Math.floor(Math.random() * (maxCpCode +1 - minCpCode)) + minCpCode;

    
    //Logica dello sconto
    
    if (inputAge === "Riduzione biglietto 20%") {
        oldPrice.innerText = priceTag.toFixed(2) + '€';
        priceTag *= 0.8;
    }  else if (inputAge === "Riduzione biglietto 40%") {
        oldPrice.innerText = priceTag.toFixed(2) + '€';
        priceTag *= 0.6;
    }  else {
        oldPrice.innerText = '';
    }


    //stampo in pagina 
    document.getElementById("nome").innerText = inputName;
    document.getElementById("offerta").innerText = inputAge;
    document.getElementById("costo-biglietto").innerText = priceTag.toFixed(2) + '€';
    document.getElementById("carrozza").innerText = randomCab;
    document.getElementById("codice").innerText = String(randomCpCode).padStart(5, 0);


});


//Event Listener di Annulla

cancelBtn.addEventListener('click', function(){
    // svuoto i campi
    inputNameElement.value = '';
    inputKmsElement.value = '';
    inputAgeElement.value = '';
    // nascondo il div con i risultati
    ticketContainerElement.classList.add('d-none');
    // nascondo i p di alert
    alertNameElement.classList.remove('d-block');
    alertKmsElement.classList.remove('d-block');

});

//centralizzare meglio il validatore con tipo has error inserito in ogni coso e poi if has error fai tutte le cose