const map = L.map('map').setView([-12.6819, -56.9211], 6);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const pontos = [
    { nome: 'ASSOCIACAO EVANGELICA MAOS A OBRA - AEMO', coords: [-15.5985076279996, -56.1247027199996] },
    { nome: 'LOJA MACONICA AMIZADE E CONSCIENCIA NUMERO 2964', coords: [-15.5650369439996, -56.0667556799996] },
    { nome: 'IGREJA PRESBITERIANA RENOVADA CENTRAL DE CUIABA', coords: [-15.5921447059996, -56.0882259859997] },
    { nome: 'AUGUSTA E RESPEITAVEL LOJA SIMBOLICA TEMPLO INTIMO N 29', coords: [-15.6185406889996, -56.0789499159997] },
    { nome: 'FRATERNIDADE SANTA ISABEL DA HUNGRIA', coords: [-15.5924679559996, -56.0921333419996] },
    { nome: 'ARLS HENRIQUE JOSE DE SOUZA - JHS N. 49', coords: [-15.5545385379996, -55.9774505179996] },
    { nome: 'ARLS-MESTRE ARISTIDES FELIX DE ANDRADE-3247', coords: [-15.5898371019996, -56.0889493029997] },
    { nome: 'IGREJA BATISTA BEREANA DO PEDRA 90', coords: [-15.5969932779996, -56.1379332319996] },
    { nome: 'IGREJA BATISTA NACIONAL GOIABEIRAS', coords: [-15.5904875779996, -56.1131898539996] },
    { nome: 'COMUNIDADE EVANGELICA JESUS PAO DA VIDA', coords: [-15.5855831499996, -56.0957310069996] },
    { nome: 'LOJA SIMBOLICA LUZ NAS TREVAS NR. 77' , coords: [-15.5545385379996,-55.9774505179996]},
    { nome: 'CONSELHO DOS MINISTROS EVANGELICOS CRISTAOS MT' , coords: [-15.5853934139996,-56.0928432519996]},
    { nome: 'IGREJA DA PAZ DE CUIABA' , coords: [-15.6123538609996,-56.0782945869996]}
];

pontos.forEach(p => {
    L.marker(p.coords)
        .addTo(map)
        .bindPopup(`<b>${p.nome}</b>`);
});