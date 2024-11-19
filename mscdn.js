var map = L.map('map', {dragging: true, trackResize: true}).setView([52.250450, 21.006320], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">Live Crowd</a>'
}).addTo(map);

var marker = L.marker([52.250450, 21.006320]);
marker.addTo(map);

marker.bindPopup("Mazowieckie Samorządowe Centrum Doskonalenia Nauczycieli");

var iloscosobnazywo = document.getElementById('ilosc_osob_na_zywo').textContent;
iloscosobnazywo = iloscosobnazywo.replace(/ /g,'');
console.log(iloscosobnazywo);

var skala = iloscosobnazywo+1;

var dzien = new Date();
var godzina = dzien.getHours();
console.log(godzina);

var wartosci = [0,0,0,0,0,0,0,0,0,0,iloscosobnazywo];
var data = [];
for (let i=0; i<11; i++){
    let zmienna = godzina-10+i;
    if (zmienna<0){
        zmienna = 24+zmienna;
    }
    zmienna = zmienna+":00";
    data.push(zmienna);
}

var max_wykresu = parseInt(iloscosobnazywo+2);

var ctx = document.getElementById('myChart');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: data,
        datasets: [{
            label: "Liczba osób w obiekcie:",
            data: wartosci,
            borderColor: '#247e33',
        }]
    },
    options: {
        scales: {
            y: {
                title: {
                    display: true,
                    text: "Liczba osób w obiekcie",
                },
                min: 0,
                max: 10,
                ticks: {
                    stepSize: 2,
                }
            }
        },
        layout: {
            padding: 20
        },
        plugins: {
        },
        maintainAspectRatio: false,
        elements: {
            point: {
                radius: 0,
            }
        }
    }
});

myChart.canvas.parentNode.style.width = '80vw';
myChart.canvas.parentNode.style.height = '40vh';