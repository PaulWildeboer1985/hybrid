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
            data: [12000, 9000],
            backgroundColor: ['#ff6b6b', '#4caf50']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: createTooltipCallbacks('licenses'),
            title: { display: true, text: 'Licentiekosten' }
        }
    }
});

// Herhaal voor alle andere grafieken (hardware, maintenance, support, total).
