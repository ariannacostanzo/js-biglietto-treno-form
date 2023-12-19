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
const createBtn = document.getElementById('genera')
const cancelBtn = document.getElementById('annulla')

const pricePerKms = 0.21;

//prendo il p che mi serve come alert
const alertNameElement = document.getElementById('nome-obbligatorio')
const alertKmsElement = document.getElementById('kms-obbligatorio')
const alertKms0Element = document.getElementById('kms-non-zero')


//Event Listener di Genera

createBtn.addEventListener('click', function() {
    const inputName = inputNameElement.value;
    const inputKms = parseInt(inputKmsElement.value);
    const inputAge = inputAgeElement.value;

    //mi preparo il calcolo del biglietto base
    let TicketPrice = inputKms * pricePerKms;
    
    //creo le variabili che mi servono per fare la logica dei numeri random
    const minCab = 1;
    const maxCab = 10;
    const minCpCode = 10000;
    const maxCpCode = 99999;

    //Validatore 
    if (inputName === '') {
        alertNameElement.classList.add('d-block')
        return;
    } else if (isNaN(inputKms)) {
        alertKmsElement.classList.add('d-block')
        return;
    } else if (inputKms === 0) {
        alertKms0Element.classList.add('d-block')
        return;
    }
    
    alertNameElement.classList.remove('d-block')
    alertKmsElement.classList.remove('d-block')
    

    //se tutto prima va bene allora si mostra il div
    //oppure posso mostrarlo sempre ed in quel caso rimuovo la classe d-none all'elemento
    ticketContainerElement.classList.remove('d-none')

    
    //Logica dei numeri random
    const randomCab = Math.floor(Math.random() * (maxCab + 1 - minCab)) + minCab
    const randomCpCode = Math.floor(Math.random() * (maxCpCode +1 - minCpCode)) + minCpCode

    
    //Logica dello sconto
    
    if (inputAge === "Riduzione biglietto Minorenni") {
        TicketPrice *= 0.8;
    }  else if (inputAge === "Riduzione biglietto Senior") {
        TicketPrice *= 0.6
    }  


    //stampo in pagina 
    document.getElementById("nome").innerText = inputName;
    document.getElementById("offerta").innerText = inputAge;
    document.getElementById("costo-biglietto").innerText = TicketPrice.toFixed(2) + '€'
    document.getElementById("carrozza").innerText = randomCab
    document.getElementById("codice").innerText = randomCpCode


});


//Event Listener di Annulla

cancelBtn.addEventListener('click', function(){
    // svuoto i campi
    inputNameElement.value = ''
    inputKmsElement.value = ''
    inputAgeElement.value = ''
    // nascondo il div con i risultati
    ticketContainerElement.classList.add('d-none')
    // nascondo i p di alert
    alertNameElement.classList.remove('d-block')
    alertKmsElement.classList.remove('d-block')

});


//sistemare tutto ordinatamente
//sistemare meglio lo stile
//fare il responsive
//sistemare le cose che mancano
//sistemare il p che si mostra obbligatorio