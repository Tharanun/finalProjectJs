document.addEventListener("DOMContentLoaded", function () {
    fetch('https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-population.json')
        .then(response => response.json())
        .then(data => {
            const countries = data.map(country => country.country);
            const populations = data.map(country => country.population);

            const lineColor = "#b91d47";

            new Chart("myChart", {
                type: "line",
                data: {
                    labels: countries,
                    datasets: [{
                        label: 'Population',
                        data: populations,
                        borderColor: lineColor,
                        fill: false
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: "World Population by Country (Line Chart)"
                    }
                }
            });
        })
        .catch(error => console.error('เกิดข้อผิดพลาด: ', error));
});