function factorial(number){
    if (number == 1){
        return number
    }else{
        return number * factorial(number - 1)
    }
}

function calculateFactorial() {
  const inputElement = document.getElementById('numberInput');
  const resultElement = document.getElementById('result');

  const number = parseInt(inputElement.value);
  if (!isNaN(number)) {
    const result = factorial(number);
    resultElement.textContent = `Factorial ของ ${number} คือ: ${result}`;
  } else {
    resultElement.textContent = 'กรุณากรอกตัวเลขที่ถูกต้อง';
  }
}