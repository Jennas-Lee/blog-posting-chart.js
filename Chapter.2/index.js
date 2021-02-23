var ctx = document.getElementById('chart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['20:45:58', '20:45:59', '20:46:00', '20:46:01', '20:46:02'],
        datasets: [{
            label: 'CPU',
            data: [65, 59, 80, 15, 27],
            lineTension: 0,
            backgroundColor: '#198754'
        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    fontColor: '#6c757d'
                },
                gridLines: {
                    color: '#6c757d'
                }
            }],
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 100,
                    fontColor: '#6c757d'
                },
                gridLines: {
                    color: '#6c757d'
                }
            }]
        }
    }
});
