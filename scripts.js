// Configuratie voor alle grafieken
function createDoughnutChart(chartId, data) {
    return new Chart(document.getElementById(chartId).getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['Citrix', 'Microsoft 365'],
            datasets: [{
                label: 'Kosten',
                data: data,
                backgroundColor: ['#ff6b6b', '#4caf50']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: false
                }
            }
        }
    });
}

// Data voor de grafieken
createDoughnutChart('licensesChart', [12000, 9000]);
createDoughnutChart('hardwareChart', [5000, 2000]);
createDoughnutChart('maintenanceChart', [2000, 1000]);
createDoughnutChart('supportChart', [3000, 1500]);
createDoughnutChart('totalChart', [22000, 13500]);
