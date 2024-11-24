const year = document.querySelector("#year");
const month = document.querySelector("#month");
const day = document.querySelector("#day");
const wind = document.querySelector("#wind");
const windchill = document.querySelector("#windchill");
const temperature = document.querySelector("#temperature");

const today = new Date();
copyright = new Date();
let oLastModif = new Date(document.lastModified);

const temperatureValue = 30
const windspeedValue = 60
currentyear.innerHTML = `© <span class="highlight">${copyright.getFullYear()}</span>`;
last_modified.innerHTML = `last modified: <span class="highlight">${oLastModif}</span>`;


//don't know third party api's
temperature.textContent = `${temperatureValue} °F`
wind.textContent = `${windspeedValue} Mph`

function calculateWindChill(temperature,windspeed) {
       if (temperature > 50 || windspeed < 3){
        return "N/A"
    }
    const windchill =
        35.74 + 0.6215 * temperature - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temperature * Math.pow(windspeed, 0.16);

    return `${windchill} °F`
 
}

windchill.textContent = calculateWindChill(temperatureValue, windspeedValue)
