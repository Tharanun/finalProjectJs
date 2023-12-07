function getBitcoinPrice() {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => response.json())
        .then(data => {
            const priceUSD = data.bpi.USD.rate;
            displayBitcoinPrice(priceUSD);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayBitcoinPrice(priceUSD) {
    const bitcoinPriceElement = document.getElementById('bitcoinPrice');
    bitcoinPriceElement.textContent = `Bitcoin price in USD: ${priceUSD}`;
}
