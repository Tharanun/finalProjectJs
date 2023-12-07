function checkAge() {
    const ageInput = document.getElementById('ageInput').value;
    const resultElement = document.getElementById('result');

    if (!isNaN(ageInput)) {
        const age = parseInt(ageInput);
        const message = (age >= 18) ? 'Allowed' : 'Not allowed';
        resultElement.innerHTML = message;
    } else {
        resultElement.innerHTML = 'Please enter a valid age';
    }
}
