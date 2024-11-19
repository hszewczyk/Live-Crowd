var map = L.map('map', {dragging: true, trackResize: true}).setView([52.288029, 20.944960], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">Live Crowd</a>'
}).addTo(map);

var marker = L.marker([52.288029, 20.944960]);
marker.addTo(map);

marker.bindPopup("Pływalnia - Lindego 20");

var iloscosobnazywo = document.getElementById('ilosc_osob_na_zywo').textContent;
iloscosobnazywo = iloscosobnazywo.replace(/ /g,'');
console.log(iloscosobnazywo);

var skala = iloscosobnazywo+1;

var data_rok = new Date();
var miesiac = data_rok.getMonth() + 1;
var dzien = data_rok.getDate();
//var pelna_data = miesiac.concat(" ", dzien);
//console.log(pelna_data);

var wartosci = [0,0,0,0,0,0,3,9,14,12,20,31,36,34,32,26,17,20,28,34,30,18,7,0,  
                0,0,0,0,0,0,2,7,15,16,21,33,34,34,30,23,15,22,28,35,26,14,6,0,
                0,0,0,0,0,0,1,5,11,13,18,30,31,32,30,25,18,23,29,34,27,13,9,0,
                0,0,0,0,0,0,5,8,14,19,21,28,30,30,27,23,16,20,25,28,24,12,7,0,
                0,0,0,0,0,0,0,0,6,13,16,21,27,33,41,44,45,44,34,27,18,9,3,0,
                0,0,0,0,0,0,0,0,5,11,15,20,26,30,34,37,39,40,37,22,16,5,2,0,
                0,0,0,0,0,0,4,10,13,19,22,30,32,36,35,30,12,10,16,20,19,15,7,0,
                0,0,0,0,0,0,2,8,11,14,17,21,28,30,29,30,26,23];
var data = [];

for (let i=0; i<7; i++){
    let dzien2 = dzien-7+i;
    if (dzien2>0){
        let zmienna = String(dzien2)+" grudnia";
        data.push(zmienna);
    }
    else if(dzien2<=0){
        dzien2 = 30-i;
        let zmienna = String(dzien2)+" listopada";
        data.push(zmienna);
    }
    for (let j = 1; j<24; j++){
        let godzina_na_wykresie = j+":00";
        data.push(godzina_na_wykresie);
    }
}
var dzien_ostatni = String(dzien)+" grudnia";
data.push(dzien_ostatni);
for (let h=0; h<16;h++){
    let godzina_do_dodania = h+":00" 
    data.push(godzina_do_dodania);
}

console.log(data);

var max = [];
for (let i=0; i<24*7+20; i++){
    let zmienna = 48;
    max.push(zmienna);
}

console.log(max);
var ctx = document.getElementById('myChart');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: data,
        datasets: [{
            type: 'line',
            label: "Liczba osób na pływalni:",
            data: wartosci,
            borderColor: '#247e33',
        }, {
            type: 'line',
            label: "Maksymalna ilość osób na pływalni:",
            data: max,
            borderColor: '#db121c',
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
                max: 50,
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