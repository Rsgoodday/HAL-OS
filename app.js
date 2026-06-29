// =========================
// HAL OS
// =========================

const statusText = document.getElementById("status");
const eye = document.getElementById("eye");

const temp = document.getElementById("temp");
const hum = document.getElementById("hum");

const consoleText = document.getElementById("console");
const clock = document.getElementById("clock");

// -------------------------

const messages = [

    "REMOTE LINK ESTABLISHED",

    "ALL SYSTEMS NOMINAL",

    "ENVIRONMENT MONITORING",

    "SELF TEST COMPLETE",

    "HAL READY"

];

let messageIndex = 0;

// -------------------------

function updateClock(){

    clock.textContent = new Date().toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();

// -------------------------

function updateConsole(){

    consoleText.textContent =
        new Date().toLocaleTimeString() +
        " · " +
        messages[messageIndex];

    messageIndex++;

    if(messageIndex >= messages.length)
        messageIndex = 0;

}

setInterval(updateConsole,3000);

updateConsole();

// -------------------------

let temperature = 22.4;
let humidity = 46;

// Datos simulados.
// Más adelante sustituiremos esta función
// por una llamada al ESP32.

function updateSensors(){

    temperature += (Math.random()-0.5)*0.2;
    humidity += (Math.random()-0.5);

    temp.textContent =
        temperature.toFixed(1) + " °C";

    hum.textContent =
        Math.round(humidity) + " %";

}

setInterval(updateSensors,5000);

// -------------------------

eye.addEventListener("click",()=>{

    statusText.textContent =
        "AUTHENTICATING...";

    eye.animate([

        {
            transform:"scale(1)"
        },

        {
            transform:"scale(1.08)",
            filter:"brightness(1.5)"
        },

        {
            transform:"scale(1)"
        }

    ],{

        duration:900

    });

    setTimeout(()=>{

        statusText.textContent =
            "COMMAND ACCEPTED";

    },700);

    setTimeout(()=>{

        statusText.textContent =
            "REMOTE LINK ACTIVE";

    },1700);

});

// =========================
// ESP32
// =========================
//
// Próxima versión:
//
// async function updateESP32(){
//
// const response = await fetch("/status");
//
// const data = await response.json();
//
// temp.textContent = data.temperature;
// hum.textContent = data.humidity;
//
// }
//
// =========================
