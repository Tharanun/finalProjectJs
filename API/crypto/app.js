function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

function CatFact() {
    fetch("https://catfact.ninja/fact")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let txt = "";
            for (let x in data) {
                txt += data[x] + " ";
                document.getElementById("textCat").innerHTML = txt;
            }

            return data;
        });
}

function ZipLine() {
    let zipCode = document.getElementById("zipCode").value;
    fetch(`https://api.zippopotam.us/th/${zipCode}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let txt = JSON.stringify(data, null, 2);
            document.getElementById("locatiobZip").innerHTML = txt;
        });
}

function BTC() {
    fetch("https://api.coinbase.com/v2/exchange-rates?currency=BTC")
        .then((response) => response.json())
        .then((data) => {
            const rates = data.data.rates;
            let table =
                '<h2>Exchange Rates for BTC</h2><table border="1"><tr><th>Currency</th><th>Rate</th></tr>';
            let count = 0;
            for (const currency in rates) {
                if (rates.hasOwnProperty(currency)) {
                    table += `<tr><td>${currency}</td><td>${rates[currency]}</td></tr>`;
                    count++;
                    if (count === 10) {
                        break;
                    }
                }
            }

            table += "</table>";
            document.getElementById("btc_table").innerHTML = table;
        })
        .catch((error) => console.error("Error fetching data:", error));
}
setInterval(BTC, 30000);
BTC();