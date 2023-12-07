function circleArea(radius) {
    const area = Math.PI * radius * radius;
    return area;
}

function calculateArea() {
    const radiusInput = document.getElementById('radiusInput');
    const resultElement = document.getElementById('result');

    const radius = parseFloat(radiusInput.value);
    if (!isNaN(radius)) {
        const area = circleArea(radius);
        resultElement.textContent = `พื้นที่ของวงกลมที่มีรัศมี ${radius} คือ ${area.toFixed(1)}`;
    } else {
        resultElement.textContent = 'กรุณากรอกค่ารัศมีที่ถูกต้อง';
    }
}
