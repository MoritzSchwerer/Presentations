const labels = [
  1,2,3,4,5,6,7
];
const data = {
  labels: labels,
  datasets: [{
    label: 'some data',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
  }]
};

// configuration
const config = {
  type: 'line',
  data,
  options: {}
};

const config2 = {
  type: 'scatter',
  data,
  options: {}
};

// chart
var chart = new Chart(
    document.getElementById('line'),
    config
  );

var chart2 = new Chart(
    document.getElementById('scatter'),
    config2
  );

var mixed = new Chart(document.getElementById('line-scatter'),
    { type: 'line',
      data: {
        labels: [1,2,3,4,5,6,7],
        datasets: [{
          type: 'scatter',
          label: 'Bar Dataset',
          data: [10, 5, 20, 30, 25, 35, 42],
          showLine: false,
          backgroundColor: 'rgba(255, 99, 132, 0.2)'
        }, {
          type: 'line',
          label: 'Line Dataset',
          data: [5,10,15,20,25,30,35],
          fill: false,
          borderColor: 'rgb(54, 162, 235)'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    }
  );
