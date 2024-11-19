var map = L.map('map', {dragging: true, trackResize: true}).setView([52.234, 21.007], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">Live Crowd</a>'
}).addTo(map);
map.on('dblclick', function(){
})

var kategoria = 'a';
var category;

//sortowanie na gorze
/*document.getElementById('plywalnie').addEventListener("click", function plywalnia(){
    kategoria = 'p';
    update_mapy(kategoria);
});

document.getElementById('wszystko').addEventListener("click", function wszystko(){
    kategoria = 'a';
    update_mapy(kategoria);
});

document.getElementById('biblioteki').addEventListener("click", function biblioteki(){
    kategoria = 'b';
    update_mapy(kategoria);
});

document.getElementById('rozrywka').addEventListener("click", function rozrywka(){
    kategoria = 'r';
    update_mapy(kategoria);
});
*/
/*
document.addEventListener("DOMContentLoaded", function() {
    var radioForm = document.getElementById("radioForm");

    radioForm.addEventListener("click", function(event) {
      var target = event.target;

      if (target.type === "radio" && target.name === "category" && target.checked) {
        category = target.value;
        if (category == "Wszystko"){
            kategoria = 'a';
            update_mapy(kategoria);
        }
        else if(category == "Biblioteki"){
            kategoria = 'b';
            update_mapy(kategoria);
        }
        else if(category == "Pływalnie"){
            kategoria = 'p';
            update_mapy(kategoria);
        }
        else if(category == "Rozrywka"){
            kategoria = 'r';
            update_mapy(kategoria);
        }
      }
      else{
        update_mapy('a');
      }
    });
});
*/

var biblioteka_koszykowa = L.circle([52.2224,21.0186], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.7,
    radius: 80,
    stroke: false
})
biblioteka_koszykowa.bindPopup("Biblioteka na Koszykowej");

var biblioteka_narodowa = L.circle([52.213730, 21.004610], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.7,
    radius: 80,
    stroke: false
})
biblioteka_narodowa.bindPopup("Biblioteka Narodowa");

var biblioteka_uw = L.circle([52.242600, 21.024040], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.7,
    radius: 80,
    stroke: false
})
biblioteka_uw.bindPopup("Biblioteka Uniwersytetu Warszawskiego");

var biblioteka_bemowo = L.circle([52.226559, 20.915251], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.7,
    radius: 80,
    stroke: false
})
biblioteka_bemowo.bindPopup("Biblioteka Publiczna w Dzielnicy Bemowo m.st. Warszawy");

var biblioteka_bialoleka = L.circle([52.305010, 20.989020], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.7,
    radius: 80,
    stroke: false
})
biblioteka_bialoleka.bindPopup("Biblioteka Publiczna w Dzielnicy Białołęka m.st. Warszawy");

var biblioteka_mokotow = L.circle([52.201040, 21.022040], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.7,
    radius: 80,
    stroke: false
})
biblioteka_mokotow.bindPopup("Biblioteka Publiczna im. Z. Łazarskiego w Dzielnicy Mokotów m.st. Warszawy");

var biblioteka_ochota = L.circle([52.212410, 20.978610], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.7,
    radius: 80,
    stroke: false
})
biblioteka_ochota.bindPopup("Biblioteka Publiczna w Dzielnicy Ochota m.st. Warszawy");

var biblioteka_ppolnoc = L.circle([52.258860, 21.02786], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.7,
    radius: 80,
    stroke: false
})
biblioteka_ppolnoc.bindPopup("Biblioteka Publiczna im. Księdza J. Twardowskiego w Dzielnicy Praga-Północ m.st. Warszawy");

var biblioteka_ppoludnie = L.circle([52.222000, 21.087470], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.7,
    radius: 80,
    stroke: false
})
biblioteka_ppoludnie.bindPopup("Biblioteka Publiczna im. Zygmunta Jana Rumla w Dzielnicy Praga-Południe m.st. Warszawy");

var biblioteka_rembertow = L.circle([52.258600, 21.162830], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.7,
    radius: 80,
    stroke: false
})
biblioteka_rembertow.bindPopup("Biblioteka Publiczna im. Jana Pawła II w Dzielnicy Rembertów m.st. Warszawy");

var biblioteka_srodmiescie = L.circle([52.215880, 21.019910], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.7,
    radius: 80,
    stroke: false
})
biblioteka_srodmiescie.bindPopup("Biblioteka Publiczna w Dzielnicy Śródmieście m.st. Warszawy");

var biblioteka_wawer = L.circle([52.217040, 21.159000], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.7,
    radius: 80,
    stroke: false
})
biblioteka_wawer.bindPopup("Biblioteka Publiczna w Dzielnicy Wawer m.st. Warszawy");

var biblioteka_wlochy = L.circle([52.206540, 20.911970], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.7,
    radius: 80,
    stroke: false
})
biblioteka_wlochy.bindPopup("Biblioteka Publiczna w Dzielnicy Włochy m.st. Warszawy");

var biblioteka_wola = L.circle([52.240230, 20.987780], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.7,
    radius: 80,
    stroke: false
})
biblioteka_wola.bindPopup("Biblioteka Publiczna w Dzielnicy Wola m.st. Warszawy");

var biblioteka_zoliborz = L.circle([52.269930, 20.980290], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.7,
    radius: 80,
    stroke: false
})
biblioteka_zoliborz.bindPopup("Biblioteka Publiczna w Dzielnicy Żoliborz m.st. Warszawy");

//plywalnie
var plywalnia_rozbrat = L.circle([52.225370, 21.035110], {
    color: 'blue',
    fillColor: '#1147d1',
    fillOpacity: 0.7,
    radius: 80,
    stroke: false
})
plywalnia_rozbrat.bindPopup("Pływalnia 'Rozbrat'");

var plywalnia_polna = L.circle([52.215510, 21.017490], {
    color: 'blue',
    fillColor: '#1147d1',
    fillOpacity: 0.7,
    radius: 80,
    stroke: false
})
plywalnia_polna.bindPopup("Pływalnia POLNA");

var plywalnia_ochota = L.circle([52.214900, 20.972800], {
    color: 'blue',
    fillColor: '#1147d1',
    fillOpacity: 0.7,
    radius: 80,
    stroke: false
})
plywalnia_ochota.bindPopup("Pływalnia OSiR Ochota");

var plywalnia_delfin = L.circle([52.228370, 20.977190], {
    color: 'blue',
    fillColor: '#1147d1',
    fillOpacity: 0.7,
    radius: 80,
    stroke: false
})
plywalnia_delfin.bindPopup("Pływalnia Delfin - OSiR Wola");

var plywalnia_nowafala = L.circle([52.235010, 20.943800], {
    color: 'blue',
    fillColor: '#1147d1',
    fillOpacity: 0.7,
    radius: 80,
    stroke: false
})
plywalnia_nowafala.bindPopup("Pływalnia Nowa Fala - OSiR Wola");

var plywalnia_szuwarek = L.circle([52.24393, 21.11333], {
    color: 'blue',
    fillColor: '#1147d1',
    fillOpacity: 0.7,
    radius: 80,
    stroke: false
})
plywalnia_szuwarek.bindPopup("Pływalnia Szuwarek - OSiR Praga Płd.");

var plywalnia_polonia = L.circle([52.255330, 21.000080], {
    color: 'blue',
    fillColor: '#1147d1',
    fillOpacity: 0.7,
    radius: 80,
    stroke: false
})
plywalnia_polonia.bindPopup("Pływalnia Polonia");

var plywalnia_inflancka = L.circle([52.255180, 20.988940], {
    color: 'blue',
    fillColor: '#1147d1',
    fillOpacity: 0.7,
    radius: 80,
    stroke: false
})
plywalnia_inflancka.bindPopup("Pływalnia Inflancka");

var plywalnia_foka = L.circle([52.244210, 20.980400], {
    color: 'blue',
    fillColor: '#1147d1',
    fillOpacity: 0.7,
    radius: 80,
    stroke: false
})
plywalnia_foka.bindPopup("Pływalnia Foka - OSiR Wola");

var plywalnia_pingwin = L.circle([52.258670, 20.925040], {
    color: 'blue',
    fillColor: '#1147d1',
    fillOpacity: 0.7,
    radius: 80,
    stroke: false
})
plywalnia_pingwin.bindPopup("Pływalnia Pingwin - OSiR Bemowo");

var plywalnia_prawybrzeg = L.circle([52.250170, 21.036680], {
    color: 'blue',
    fillColor: '#1147d1',
    fillOpacity: 0.7,
    radius: 80,
    stroke: false
})
plywalnia_prawybrzeg.bindPopup("Pływalnia Pingwin - OSiR Praga Płn.");

var plywalnia_wodnik = L.circle([52.227590, 21.087050], {
    color: 'blue',
    fillColor: '#1147d1',
    fillOpacity: 0.7,
    radius: 80,
    stroke: false
})
plywalnia_wodnik.bindPopup("Pływalnia Wodnik - OSiR Praga Płd.");

var plywalnia_grzybowska = L.circle([52.235270, 20.995110], {
    color: 'blue',
    fillColor: '#1147d1',
    fillOpacity: 0.7,
    radius: 80,
    stroke: false
})
plywalnia_grzybowska.bindPopup("Pływalnia Grzybowska");

var plywalnia_lindego = L.circle([52.288030, 20.944960], {
    color: 'blue',
    fillColor: '#1147d1',
    fillOpacity: 0.7,
    radius: 80,
    stroke: false
})
plywalnia_lindego.bindPopup("Pływalnia - Lindego 20");

var rozrywka_zagrywki = L.circle([52.230420, 21.02203], {
    color: 'yellow',
    fillColor: '#d609c5',
    fillOpacity: 0.7,
    radius: 80,
    stroke: false
})
rozrywka_zagrywki.bindPopup("Zagrywki");

var rozrywka_tepfactor = L.circle([52.213058, 20.955111], {
    color: 'yellow',
    fillColor: '#d609c5',
    fillOpacity: 0.7,
    radius: 80,
    stroke: false
})
rozrywka_tepfactor.bindPopup("Tepfactor");

obiekty = [['b', 'Biblioteka na Koszykowej'], ['b', 'Biblioteka Narodowa'], 
                ['b', 'Biblioteka UW'], ['b', 'Biblioteka Bemowo'], ['b', 'Biblioteka Białołęka'],
                ['b', 'Biblioteka Mokotów'], ['b', 'Biblioteka Ochota'], ['b', 'Biblioteka Praga Północ'],
                ['b', 'Biblioteka Praga Południe'], ['b', 'Biblioteka Rembertów'], ['b', 'Biblioteka Śródmieście'],
                ['b', 'Biblioteka Wawer'], ['b', 'Biblioteka Włochy'], ['b', 'Biblioteka Wola'], ['b', 'Biblioteka Żoliborz'],
                ['p', 'Pływalnia Rozbrat'], ['p', 'Pływalnia Polna'], ['p', 'Pływalnia Ochota'],
                ['p', 'Pływalnia Delfin'], ['p', 'Pływalnia Nowa Fala'], ['p', 'Pływalnia Szuwarek'],
                ['p', 'Pływalnia Polonia'], ['p', 'Pływalnia Inflancka'], ['p', 'Pływalnia Foka'],
                ['p', 'Pływalnia Pingwin'], ['p', 'Pływalnia Prawy Brzeg'], ['p', 'Pływalnia Wodnik'],
                ['p', 'Pływalnia Grzybowska'], ['p', 'Pływalnia - Lindego 20'], ['r', 'Zagrywki'], ['r', 'TepFactor']];
miejsca = [biblioteka_koszykowa,
    biblioteka_narodowa,
    biblioteka_uw,
    biblioteka_bemowo,
    biblioteka_bialoleka,
    biblioteka_mokotow,
    biblioteka_ochota,
    biblioteka_ppolnoc,
    biblioteka_ppoludnie,
    biblioteka_rembertow,
    biblioteka_srodmiescie,
    biblioteka_wawer,
    biblioteka_wlochy,
    biblioteka_wola,
    biblioteka_zoliborz, 
    plywalnia_rozbrat,
    plywalnia_polna,
    plywalnia_ochota,
    plywalnia_delfin,
    plywalnia_nowafala,
    plywalnia_szuwarek,
    plywalnia_polonia,
    plywalnia_inflancka,
    plywalnia_foka,
    plywalnia_pingwin,
    plywalnia_prawybrzeg,
    plywalnia_wodnik,
    plywalnia_grzybowska,
    plywalnia_lindego,
    rozrywka_zagrywki,
    rozrywka_tepfactor]

//przyciski na dole
for (let i = 0; i<obiekty.length; i++){
    if (document.getElementById(i) != null){
    document.getElementById(i).addEventListener("click", function open_marker(){
        let obiekt = miejsca[i]
        obiekt.bindPopup(obiekty[i][1]).openPopup();
    });
    }
}

biblioteka_koszykowa.addTo(map);
biblioteka_narodowa.addTo(map);
biblioteka_uw.addTo(map);
biblioteka_bemowo.addTo(map);
biblioteka_bialoleka.addTo(map);
biblioteka_mokotow.addTo(map);
biblioteka_ochota.addTo(map);
biblioteka_ppolnoc.addTo(map);
biblioteka_ppoludnie.addTo(map);
biblioteka_rembertow.addTo(map);
biblioteka_srodmiescie.addTo(map);
biblioteka_wawer.addTo(map);
biblioteka_wlochy.addTo(map);
biblioteka_wola.addTo(map);
biblioteka_zoliborz.addTo(map);

plywalnia_rozbrat.addTo(map);
plywalnia_polna.addTo(map);
plywalnia_ochota.addTo(map);
plywalnia_delfin.addTo(map);
plywalnia_nowafala.addTo(map);
plywalnia_szuwarek.addTo(map);
plywalnia_polonia.addTo(map);
plywalnia_inflancka.addTo(map);
plywalnia_foka.addTo(map);
plywalnia_pingwin.addTo(map);
plywalnia_prawybrzeg.addTo(map);
plywalnia_wodnik.addTo(map);
plywalnia_grzybowska.addTo(map);
plywalnia_lindego.addTo(map);

rozrywka_zagrywki.addTo(map);
rozrywka_tepfactor.addTo(map);

var link = window.location.search;
var kategoria = link.split('=')
//console.log(kategoria[1]);
update_mapy(kategoria);

function update_mapy(kategoria){
    if (kategoria[1] == 'a'){
        biblioteka_koszykowa.addTo(map);
        biblioteka_narodowa.addTo(map);
        biblioteka_uw.addTo(map);
        biblioteka_bemowo.addTo(map);
        biblioteka_bialoleka.addTo(map);
        biblioteka_mokotow.addTo(map);
        biblioteka_ochota.addTo(map);
        biblioteka_ppolnoc.addTo(map);
        biblioteka_ppoludnie.addTo(map);
        biblioteka_rembertow.addTo(map);
        biblioteka_srodmiescie.addTo(map);
        biblioteka_wawer.addTo(map);
        biblioteka_wlochy.addTo(map);
        biblioteka_wola.addTo(map);
        biblioteka_zoliborz.addTo(map);

        plywalnia_rozbrat.addTo(map);
        plywalnia_polna.addTo(map);
        plywalnia_ochota.addTo(map);
        plywalnia_delfin.addTo(map);
        plywalnia_nowafala.addTo(map);
        plywalnia_szuwarek.addTo(map);
        plywalnia_polonia.addTo(map);
        plywalnia_inflancka.addTo(map);
        plywalnia_foka.addTo(map);
        plywalnia_pingwin.addTo(map);
        plywalnia_prawybrzeg.addTo(map);
        plywalnia_wodnik.addTo(map);
        plywalnia_grzybowska.addTo(map);
        plywalnia_lindego.addTo(map);

        rozrywka_zagrywki.addTo(map);
        rozrywka_tepfactor.addTo(map);
    }

    if (kategoria[1] == 'b'){
        biblioteka_koszykowa.addTo(map);
        biblioteka_narodowa.addTo(map);
        biblioteka_uw.addTo(map);
        biblioteka_bemowo.addTo(map);
        biblioteka_bialoleka.addTo(map);
        biblioteka_mokotow.addTo(map);
        biblioteka_ochota.addTo(map);
        biblioteka_ppolnoc.addTo(map);
        biblioteka_ppoludnie.addTo(map);
        biblioteka_rembertow.addTo(map);
        biblioteka_srodmiescie.addTo(map);
        biblioteka_wawer.addTo(map);
        biblioteka_wlochy.addTo(map);
        biblioteka_wola.addTo(map);
        biblioteka_zoliborz.addTo(map);

        plywalnia_rozbrat.remove(map);
        plywalnia_polna.remove(map);
        plywalnia_ochota.remove(map);
        plywalnia_delfin.remove(map);
        plywalnia_nowafala.remove(map);
        plywalnia_szuwarek.remove(map);
        plywalnia_polonia.remove(map);
        plywalnia_inflancka.remove(map);
        plywalnia_foka.remove(map);
        plywalnia_pingwin.remove(map);
        plywalnia_prawybrzeg.remove(map);
        plywalnia_wodnik.remove(map);
        plywalnia_grzybowska.remove(map);
        plywalnia_lindego.remove(map);

        rozrywka_zagrywki.remove(map);
        rozrywka_tepfactor.remove(map);
    }

    if (kategoria[1] == 'p'){
        plywalnia_rozbrat.addTo(map);
        plywalnia_polna.addTo(map);
        plywalnia_ochota.addTo(map);
        plywalnia_delfin.addTo(map);
        plywalnia_nowafala.addTo(map);
        plywalnia_szuwarek.addTo(map);
        plywalnia_polonia.addTo(map);
        plywalnia_inflancka.addTo(map);
        plywalnia_foka.addTo(map);
        plywalnia_pingwin.addTo(map);
        plywalnia_prawybrzeg.addTo(map);
        plywalnia_wodnik.addTo(map);
        plywalnia_grzybowska.addTo(map);
        plywalnia_lindego.addTo(map);

        biblioteka_koszykowa.remove(map);
        biblioteka_narodowa.remove(map);
        biblioteka_uw.remove(map);
        biblioteka_bemowo.remove(map);
        biblioteka_bialoleka.remove(map);
        biblioteka_mokotow.remove(map);
        biblioteka_ochota.remove(map);
        biblioteka_ppolnoc.remove(map);
        biblioteka_ppoludnie.remove(map);
        biblioteka_rembertow.remove(map);
        biblioteka_srodmiescie.remove(map);
        biblioteka_wawer.remove(map);
        biblioteka_wlochy.remove(map);
        biblioteka_wola.remove(map);
        biblioteka_zoliborz.remove(map);

        rozrywka_zagrywki.remove(map);
        rozrywka_tepfactor.remove(map);
    }

    if (kategoria[1] == "r"){
        rozrywka_zagrywki.addTo(map);
        rozrywka_tepfactor.addTo(map);

        biblioteka_koszykowa.remove(map);
        biblioteka_narodowa.remove(map);
        biblioteka_uw.remove(map);
        biblioteka_bemowo.remove(map);
        biblioteka_bialoleka.remove(map);
        biblioteka_mokotow.remove(map);
        biblioteka_ochota.remove(map);
        biblioteka_ppolnoc.remove(map);
        biblioteka_ppoludnie.remove(map);
        biblioteka_rembertow.remove(map);
        biblioteka_srodmiescie.remove(map);
        biblioteka_wawer.remove(map);
        biblioteka_wlochy.remove(map);
        biblioteka_wola.remove(map);
        biblioteka_zoliborz.remove(map);

        plywalnia_rozbrat.remove(map);
        plywalnia_polna.remove(map);
        plywalnia_ochota.remove(map);
        plywalnia_delfin.remove(map);
        plywalnia_nowafala.remove(map);
        plywalnia_szuwarek.remove(map);
        plywalnia_polonia.remove(map);
        plywalnia_inflancka.remove(map);
        plywalnia_foka.remove(map);
        plywalnia_pingwin.remove(map);
        plywalnia_prawybrzeg.remove(map);
        plywalnia_wodnik.remove(map);
        plywalnia_grzybowska.remove(map);
        plywalnia_lindego.remove(map);
    }
    if (kategoria[1] == "i"){
        rozrywka_zagrywki.remove(map);
        rozrywka_tepfactor.remove(map);

        biblioteka_koszykowa.remove(map);
        biblioteka_narodowa.remove(map);
        biblioteka_uw.remove(map);
        biblioteka_bemowo.remove(map);
        biblioteka_bialoleka.remove(map);
        biblioteka_mokotow.remove(map);
        biblioteka_ochota.remove(map);
        biblioteka_ppolnoc.remove(map);
        biblioteka_ppoludnie.remove(map);
        biblioteka_rembertow.remove(map);
        biblioteka_srodmiescie.remove(map);
        biblioteka_wawer.remove(map);
        biblioteka_wlochy.remove(map);
        biblioteka_wola.remove(map);
        biblioteka_zoliborz.remove(map);

        plywalnia_rozbrat.remove(map);
        plywalnia_polna.remove(map);
        plywalnia_ochota.remove(map);
        plywalnia_delfin.remove(map);
        plywalnia_nowafala.remove(map);
        plywalnia_szuwarek.remove(map);
        plywalnia_polonia.remove(map);
        plywalnia_inflancka.remove(map);
        plywalnia_foka.remove(map);
        plywalnia_pingwin.remove(map);
        plywalnia_prawybrzeg.remove(map);
        plywalnia_wodnik.remove(map);
        plywalnia_grzybowska.remove(map);
        plywalnia_lindego.remove(map);

        mscdn.remove(map);
    }
}
plywalnia_lindego.on('dblclick', function(){
    location.href = 'pływalnia_-_lindego_20.php';
})

function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '5px';
    }
  }
  