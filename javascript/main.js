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



//Event Listener di Genera

createBtn.addEventListener('click', function() {
    const inputName = inputNameElement.value;
    const inputKms = parseInt(inputKmsElement.value);
    const inputAge = inputAgeElement.value;

    //mi preparo il calcolo del biglietto base
    let TicketPrice = inputKms * pricePerKms;
    
    //prendo il p che mi serve come alert
    const alertNameElement = document.getElementById('nome-obbligatorio')
    const alertKmsElement = document.getElementById('kms-obbligatorio')

    //Validatore 
    if (inputName === '') {
        alertNameElement.classList.add('d-block')
        return
    } else if (isNaN(inputKms)) {
        alertKmsElement.classList.add('d-block')
        return
    }
    
    alertNameElement.classList.remove('d-block')
    alertKmsElement.classList.remove('d-block')

    //se tutto prima va bene allora si mostra il div
    //oppure posso mostrarlo sempre ed in quel caso rimuovo la classe d-none all'elemento
    ticketContainerElement.classList.remove('d-none')
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

    

});


//Event Listener di Annulla

cancelBtn.addEventListener('click', function(){
    inputNameElement.value = ''
    inputKmsElement.value = ''
    inputAgeElement.value = ''
    ticketContainerElement.classList.add('d-none')
});
