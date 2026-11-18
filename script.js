const dadosPatentes = {
    campus: {
        labels: ['CUA', 'CUS', 'CUC', 'CUVG', 'PROFNIT'],
        data:   [1, 7, 28, 1, 1]
    },
    ano: {
        labels: ['2019', '2020', '2021', '2022', '2023'],
        data:   [3, 5, 8, 12, 9]
    },
    tipo: {
        labels: ['Invenção', 'Modelo Utilidade', 'Concedidas'],
        data:   [42, 13, 13]
    }
};

const dadosSoftwares = {
    categoria: {
        labels: ['CUA', 'CUC', 'CUS', 'PROFNIT', 'UFMT'],
        data:   [2, 7, 4, 8, 1]
    },
    ano: {
        labels: ['2019', '2020', '2021', '2022', '2023'],
        data:   [1, 3, 5, 8, 5]
    },
    campus: {
        labels: ['CUA', 'CUC', 'CUS', 'PROFNIT', 'UFMT'],
        data:   [2, 6, 10, 3, 1]
    }
};

const ctx = document.getElementById('myChart');

const chartPatentes = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: dadosPatentes.campus.labels,
        datasets: [{
            label: 'Patentes por Campus da UFMT',
            data: dadosPatentes.campus.data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)'
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
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'Patentes'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Quantidade de Patentes'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Campus'
                }
            }
        }
    }
});

const ctx1 = document.getElementById('Softwares');

const chartSoftwares = new Chart(ctx1, {
    type: 'polarArea',
    data: {
        labels: dadosSoftwares.categoria.labels,
        datasets: [{
            label: 'Registro de Softwares',
            data: dadosSoftwares.categoria.data,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)'
            ]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

const graficos = {
    patentes:  { chart: chartPatentes,  dados: dadosPatentes },
    softwares: { chart: chartSoftwares, dados: dadosSoftwares }
};

function aplicarFiltro(nomeGrafico, chaveFiltro) {
    const cfg = graficos[nomeGrafico];
    if (!cfg) return;

    const bloco = document.querySelector(`.grafico-bloco[data-grafico="${nomeGrafico}"]`);
    if (bloco.classList.contains('fixado')) return;

    const novo = cfg.dados[chaveFiltro];
    if (!novo) return;

    cfg.chart.data.labels = novo.labels;
    cfg.chart.data.datasets[0].data = novo.data;
    cfg.chart.update();
}

document.getElementById('filtroPatentes').addEventListener('change', e => {
    aplicarFiltro('patentes', e.target.value);
});

document.getElementById('filtroSoftwares').addEventListener('change', e => {
    aplicarFiltro('softwares', e.target.value);
});

document.querySelectorAll('.btn-fixar').forEach(btn => {
    btn.addEventListener('click', () => {
        const alvo   = btn.dataset.alvo;
        const bloco  = document.querySelector(`.grafico-bloco[data-grafico="${alvo}"]`);
        const select = bloco.querySelector('.filtro');

        const fixado = bloco.classList.toggle('fixado');
        btn.classList.toggle('fixado', fixado);
        select.disabled = fixado;

        btn.textContent = fixado ? 'Fixado' : 'Fixar';
    });
});