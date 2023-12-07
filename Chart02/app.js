
const fruitData = {
    labels: ['ชมรมฟุตบอล', 'ชอมรมวอลเล่บอล', 'ชมรมว่ายน้ำ', 'ชมรมยิงปืน', 'ชมรมแบดมินตัน'],
    datasets: [{
        label: 'จำลองจำนวนสมาชิกชมรมกีฬาใน มหาวิทยาลัยราชภัฏมหาสารคาม',
        data: [40, 35, 20, 24, 16],
        backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(255, 205, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(54, 162, 235, 0.5)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
    }]
};
document.addEventListener('DOMContentLoaded', function () {
  drawChart(fruitData);
});

function updateChart(fruit) {
  const newData = getNewData(fruit);
  updateChartData(newData);
}
function getNewData(fruit) {
  const newData = {
      labels: fruitData.labels,
      datasets: [{
          label: 'Fruit Preferences',
          data: fruitData.labels.map(label => (label === fruit) ? 40 : 20),
          backgroundColor: fruitData.datasets[0].backgroundColor,
          borderColor: fruitData.datasets[0].borderColor,
          borderWidth: 1
      }]
  };
  return newData;
}
function updateChartData(newData) {
  const ctx = document.getElementById('fruitChart').getContext('2d');
  const fruitChart = new Chart(ctx, {
      type: 'bar',
      data: newData,
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
}

function drawChart(data) {
  const ctx = document.getElementById('fruitChart').getContext('2d');
  const fruitChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
}
