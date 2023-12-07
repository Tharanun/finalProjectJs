function TemperatureConvert(farenheit) {
    const celsius = (5 / 9) * (farenheit - 32);
    return celsius;
}

function convertTemperature() {
    const tempInput = document.getElementById('tempInput').value;
    const resultElement = document.getElementById('result');

    if (!isNaN(tempInput)) {
        const farenheit = parseFloat(tempInput);
        const celsius = TemperatureConvert(farenheit);
        resultElement.innerHTML = `${farenheit} องศาฟาเรนไฮต์ มีค่าเท่ากับ ${celsius.toFixed(2)} องศาเซลเซียส.`;
    } else {
        resultElement.innerHTML = 'กรุณากรอกอุณหภูมิที่ถูกต้อง';
    }
}
