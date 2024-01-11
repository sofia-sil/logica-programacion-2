function convertirTemperatura() {
    let temperaturaCelsius;

    while (true) {
        let entradaUsuario = prompt("Ingrese la temperatura en grados Celsius:");

        if (!isNaN(entradaUsuario)) {
            temperaturaCelsius = parseFloat(entradaUsuario);
            break;
        } else {
            alert("Por favor, ingrese un valor numérico válido.");
        }
    }

    let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
    let temperaturaKelvin = temperaturaCelsius + 273.15;

    
    console.log(`Temperatura en grados Celsius: ${temperaturaCelsius}°C`);
    console.log(`Temperatura en grados Fahrenheit: ${temperaturaFahrenheit}°F`);
    console.log(`Temperatura en Kelvin: ${temperaturaKelvin}K`);

   
    document.getElementById("resultado").innerHTML = `
        <p>Temperatura en grados Celsius: ${temperaturaCelsius}°C</p>
        <p>Temperatura en grados Fahrenheit: ${temperaturaFahrenheit}°F</p>
        <p>Temperatura en Kelvin: ${temperaturaKelvin}K</p>
    `;
}

convertirTemperatura();
