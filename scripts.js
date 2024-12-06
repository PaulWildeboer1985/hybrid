// Tooltip uitleg per grafiek
const tooltipExplainers = {
    licenses: {
        Citrix: 'Citrix-licenties zijn duurder vanwege de complexe infrastructuur en serververeisten.',
        'Microsoft 365': 'Microsoft 365-licenties besparen kosten door schaalbaarheid en een pay-per-user model.'
    },
    hardware: {
        Citrix: 'Citrix vereist meerdere fysieke servers en randapparatuur, wat de kosten verhoogt.',
        'Microsoft 365': 'Microsoft 365 maakt hardware bijna overbodig door alles in de cloud te hosten.'
    },
    maintenance: {
        Citrix: 'Citrix vereist regelmatig onderhoud voor zowel hardware als software.',
        'Microsoft 365': 'Onderhoudskosten zijn minimaal dankzij geautomatiseerde updates in de cloud.'
    },
    support: {
        Citrix: 'Gebruikerssupport is intensiever door de complexiteit van Citrix-configuraties.',
        'Microsoft 365': 'Microsoft 365 biedt ingebouwde ondersteuning en gebruiksvriendelijke interfaces.'
    },
    total: {
        Citrix: 'De totale kosten voor Citrix zijn hoog vanwege infrastructuur, licenties, en onderhoud.',
        'Microsoft 365': 'Microsoft 365 verlaagt de totale kosten door gestroomlijnde cloudoplossingen.'
    }
};

// Functie om tooltips dynamisch te configureren
function createTooltipCallbacks(chartType) {
    return {
        callbacks: {
            label: function(context) {
                const datasetLabel = context.label || context.dataset.label || 'Onbekend';
                const value = context.raw.toLocaleString('nl-NL', { style: 'currency', currency: 'EUR' });
                const explanation = tooltipExplainers[chartType]?.[datasetLabel] || 'Geen toelichting beschikbaar.';
                return `${datasetLabel}: ${value}\n${explanation}`;
            }
        }
    };
}

// Licenties grafiek
new Chart(document.getElementById('licensesChart').getContext('2d'), {
    type: 'bar',
    data: {
        labels: ['Citrix', 'Microsoft 365'],
        datasets: [{
            label: 'Licenties',
            data: [12000, 9000], // Vul data in
            backgroundColor: ['#ff6b6b', '#4caf50']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: createTooltipCallbacks('licenses'),
            title: {
                display: true,
                text: 'Licentiekosten'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Kosten (€)'
                }
            }
        }
    }
});

// Hardware grafiek
new Chart(document.getElementById('hardwareChart').getContext('2d'), {
    type: 'doughnut',
    data: {
        labels: ['Citrix', 'Microsoft 365'],
        datasets: [{
            label: 'Hardware',
            data: [5000, 2000], // Vul data in
            backgroundColor: ['#ff6b6b', '#4caf50']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: createTooltipCallbacks('hardware'),
            title: {
                display: true,
                text: 'Hardwarekosten'
            }
        }
    }
});

// Onderhoud grafiek
new Chart(document.getElementById('maintenanceChart').getContext('2d'), {
    type: 'line',
    data: {
        labels: ['Citrix', 'Microsoft 365'],
        datasets: [{
            label: 'Onderhoud',
            data: [2000, 1000], // Vul data in
            borderColor: '#4caf50',
            backgroundColor: 'rgba(76, 175, 80, 0.2)',
            tension: 0.4,
            fill: true
        }]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: createTooltipCallbacks('maintenance'),
            title: {
                display: true,
                text: 'Onderhoudskosten'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Kosten (€)'
                }
            }
        }
    }
});

// Gebruikerssupport grafiek
new Chart(document.getElementById('supportChart').getContext('2d'), {
    type: 'radar',
    data: {
        labels: ['Citrix', 'Microsoft 365'],
        datasets: [{
            label: 'Gebruikerssupport',
            data: [3000, 1500], // Vul data in
            backgroundColor: 'rgba(76, 175, 80, 0.2)',
            borderColor: '#4caf50'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: createTooltipCallbacks('support'),
            title: {
                display: true,
                text: 'Gebruikerssupportkosten'
            }
        }
    }
});

// Totale kosten grafiek
new Chart(document.getElementById('totalChart').getContext('2d'), {
    type: 'polarArea',
    data: {
        labels: ['Citrix', 'Microsoft 365'],
        datasets: [{
            label: 'Totale Kosten',
            data: [22000, 13500], // Vul data in
            backgroundColor: ['#ff6b6b', '#4caf50']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: createTooltipCallbacks('total'),
            title: {
                display: true,
                text: 'Totale Kosten'
            }
        }
    }
});