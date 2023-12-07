function convertDayToSec() {
    const dayInput = document.getElementById('dayInput').value;
    const conversionResult = document.getElementById('result');

    if (!isNaN(dayInput)) {
        const day = parseInt(dayInput);
        const hour = day * 24;
        const sec = hour * 60 * 60;
        conversionResult.innerHTML = `${day} วัน เท่ากับ ${sec} วินาที`;
    } else {
        conversionResult.innerHTML = 'กรุณากรอกตัวเลขที่ถูกต้อง';
    }
}

function printAlphabets() {
    function printNextAlphabet(i) {
        if (i <= 90) {
            const alphabet = String.fromCharCode(i);
            document.getElementById("demo").innerHTML = alphabet;
            setTimeout(() => {
                printNextAlphabet(i + 1);
            }, 1000);
        }
    }

    printNextAlphabet(65);
}

printAlphabets();
