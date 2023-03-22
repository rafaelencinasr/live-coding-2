// API
const API_ENDPOINT = 'https://yesno.wtf/api';
console.log("test");
/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */

// Crear funcion para llamar a la API
async function fetchAnswer(){
    answerLocation.textContent="Loading...";
    await fetch(API_ENDPOINT)
    .then(res=>res.json())
    .then(data=>{
        answerLocation.textContent=data.answer;
    });
    
    setTimeout(()=>{
        borrarRespuesta()
    },3000);
}

function borrarRespuesta(){
    answerLocation.textContent="";
}

//Ubicacion de donde queremos mostrar la respuesta
const answerLocation = document.querySelector("#answer");

//Elemento del boton
const buttonLocation = document.querySelector("#button");

//Se agrega event listener al boton, cuando se haga click se llame a la funcion fetchAnswer()
buttonLocation.addEventListener('click',()=>{
    fetchAnswer();
});