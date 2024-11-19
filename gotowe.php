<?php
$page = $_SERVER['PHP_SELF'];
//$sec = "1";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Live Crowd</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
     integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
     crossorigin=""/>
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
     integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
     crossorigin=""></script>
     <link rel="stylesheet" href="gotowe.css">
    <meta http-equiv="refresh" content="<?php echo $sec?>;URL='<?php echo $page?>'">
</head>
<body>
    <?php
    $fileName = 'dane.txt';

    if (file_exists($fileName)) {
        $file = fopen($fileName, 'r');
    
        if ($file) {
            $liczCzytnikWejscie = 0;
            $liczCzytnikWyjscie = 0;
            $ilosc_osob_na_zywo = 0;

        while (!feof($file)) {
            $line = fgets($file);

            if (strpos($line, 'czytnik 1') === 0) {
                $liczCzytnikWejscie++;
            } elseif (strpos($line, 'czytnik_2') === 0) {
                $liczCzytnikWyjscie++;
            }
        }
    
            fclose($file);

            $ilosc_osob_na_zywo = $liczCzytnikWejscie - $liczCzytnikWyjscie;
            //echo $ilosc_osob_na_zywo;
        } else {
            echo "Blad przy otwarciu pliku";
        }
    } else {
        echo "Plik $fileName nie istnieje";
    }
    ?>
    <nav id='menu'>
    <input type='checkbox' id='responsive-menu' onclick='updatemenu()'><label></label>
    <ul>
        <li><a id='wszystko' href="gotowe.php?kategoriajs=a">Wszystko</a></li>
        <li><a id='biblioteki' href="gotowe.php?kategoriajs=b">Biblioteki</a></li>
        <li><a id='plywalnie' href="gotowe.php?kategoriajs=p">Pływalnie</a></li>
        <li><a id='rozrywka'href="gotowe.php?kategoriajs=r">Rozrywka</a></li>
        <li><a id='inne'href="gotowe.php?kategoriajs=i">Inne</a></li>
        <li><a id='dodaj_instytucje' class="dropdown-arrow">Szczegóły</a>
            <ul class='sub-menus'>
            <li><a href='form.php'>Dodaj Instytucję</a></li>
            <li><a>Kontakt</a></li>
            </ul>
        </li>
    </ul>
    </nav>
    <div id='map'></div>
    <!--<div id="kategoria">
        <form id="radioForm">
            <label>
            <input type="radio" name="category" value="Wszystko" checked="checked">Wszystko
            </label>
            <br>
            <label>
            <input type="radio" name="category" value="Biblioteki">Biblioteki
            </label>
            <br>
            <label>
            <input type="radio" name="category" value="Pływalnie">Pływalnie
            </label>
            <br>
            <label>
            <input type="radio" name="category" value="Rozrywka">Rozrywka
            </label>
        </form>
    </div>-->
    <div id='test'></div>
    <div class="grid-container">
        <div class="grid-child purple">
            <div class="legenda-biblioteka">
            <div class="wrapper1">
                <div class="box kolor-biblioteki"></div>
                <div class="biblioteki-na-legendzie"> Biblioteki</div>
            </div>
            </div>
            <div class="legenda-plywalnia">
            <div class="wrapper1">
                <div class="box kolor-plywalnia"></div>
                <div class="plywalnia-na-legendzie"> Pływalnie</div>
            </div>
            </div>
            <div class="legenda-rozrywka">
            <div class="wrapper1">
                <div class="box kolor-rozrywka"></div>
                <div class="rozrywka-na-legendzie"> Rozrywka</div>
            </div>
            </div>
            <div class="legenda-inne">
            <div class="wrapper1">
                <div class="box kolor-inne"></div>
                <div class="inne-na-legendzie"> Inne</div>
            </div>
            </div>
        </div>
        <div class="grid-child green">
        <div class="flex-container1">
            <?php 
                $obiekty = array(array('i', 'MSCDN'), array('b', 'Biblioteka na Koszykowej'), array('b', 'Biblioteka Narodowa'), 
                array('b', 'Biblioteka UW'), array('b', 'Biblioteka Bemowo'), array('b', 'Biblioteka Białołęka'),
                array('b', 'Biblioteka Mokotów'), array('b', 'Biblioteka Ochota'), array('b', 'Biblioteka Praga Północ'),
                array('b', 'Biblioteka Praga Południe'), array('b', 'Biblioteka Rembertów'), array('b', 'Biblioteka Śródmieście'),
                array('b', 'Biblioteka Wawer'), array('b', 'Biblioteka Włochy'), array('b', 'Biblioteka Wola'), array('b', 'Biblioteka Żoliborz'),
                array('p', 'Pływalnia Rozbrat'), array('p', 'Pływalnia Polna'), array('p', 'Pływalnia Ochota'),
                array('p', 'Pływalnia Delfin'), array('p', 'Pływalnia Nowa Fala'), array('p', 'Pływalnia Szuwarek'),
                array('p', 'Pływalnia Polonia'), array('p', 'Pływalnia Inflancka'), array('p', 'Pływalnia Foka'),
                array('p', 'Pływalnia Pingwin'), array('p', 'Pływalnia Prawy Brzeg'), array('p', 'Pływalnia Wodnik'),
                array('p', 'Pływalnia Grzybowska'), array('p', 'Pływalnia - Lindego 20'), array('r', 'Zagrywki'), array('r', 'TepFactor'));

                $kategoria_js = $_GET['kategoriajs'];

                if ($kategoria_js == NULL){
                    $licznik = 0;
                        $licznik2 = 0;
                        echo '<div class="flex-items1"><div class="flex-container2">';
                        while ($licznik<sizeof($obiekty)){
                            $link = strtolower($obiekty[$licznik][1]);
                            $link = str_replace(' ', '_', $link);
                            $link .= ".php";
                            echo '<div class="flex-items';
                            echo $licznik+6;
                            echo '" id="';
                            echo $licznik;
                            echo '">';
                            echo '<div class="testbutton">';
                            if ($obiekty[$licznik][1] == 'Pływalnia - Lindego 20'){
                                echo "<a id='link' href='";
                                echo $link;
                                echo "'>";
                            }
                            elseif ($obiekty[$licznik][1] == 'MSCDN'){
                                echo "<a id='link' href='";
                                echo $link;
                                echo "'>";
                            }
                            echo $obiekty[$licznik][1];
                            echo '</a>';
                            echo '</div></div>';
                            $licznik++;
                            $licznik2++;
                        }
                        echo '</div></div>';
                    }
                elseif ($kategoria_js == 'a'){
                    $licznik = 0;
                        $licznik2 = 0;
                        echo '<div class="flex-items1"><div class="flex-container2">';
                        while ($licznik<sizeof($obiekty)){
                            $link = strtolower($obiekty[$licznik][1]);
                            $link = str_replace(' ', '_', $link);
                            $link .= ".php";
                            echo '<div class="flex-items';
                            echo $licznik+6;
                            echo '" id="';
                            echo $licznik;
                            echo '">';
                            echo '<div class="testbutton">';
                            if ($obiekty[$licznik][1] == 'Pływalnia - Lindego 20'){
                                echo "<a id='link' href='";
                                echo $link;
                                echo "'>";
                            }
                            elseif ($obiekty[$licznik][1] == 'MSCDN'){
                                echo "<a id='link' href='";
                                echo $link;
                                echo "'>";
                            }
                            echo $obiekty[$licznik][1];
                            echo '</a>';
                            echo '</div></div>';
                            $licznik++;
                            $licznik2++;
                        }
                        echo '</div></div>';
                    }
                elseif ($kategoria_js == 'b'){
                    $licznik = 0;
                    $licznik2 = 0;
                    echo '<div class="flex-items1"><div class="flex-container2">';
                    while ($licznik<sizeof($obiekty)){
                        if ($obiekty[$licznik][0] == 'b'){
                            $link = strtolower($obiekty[$licznik][1]);
                            $link = str_replace(' ', '_', $link);
                            $link .= ".php";
                            echo '<div class="flex-items';
                            echo $licznik+6;
                            echo '" id="';
                            echo $licznik;
                            echo '">';
                            echo '<div class="testbutton">';
                            if ($obiekty[$licznik][1] == 'Pływalnia - Lindego 20'){
                                echo "<a id='link' href='";
                                echo $link;
                                echo "'>";
                            }
                            elseif ($obiekty[$licznik][1] == 'MSCDN'){
                                echo "<a id='link' href='";
                                echo $link;
                                echo "'>";
                            }
                            echo $obiekty[$licznik][1];
                            echo '</a>';
                            echo '</div></div>';
                            $licznik++;
                            $licznik2++;
                        }
                        else{
                            $licznik++;
                            $licznik2++;
                        }
                    }
                    echo '</div></div>';
                }
                elseif ($kategoria_js == 'r'){
                    $licznik = 0;
                    $licznik2 = 0;
                    echo '<div class="flex-items1"><div class="flex-container2">';
                    while ($licznik<sizeof($obiekty)){
                        if ($obiekty[$licznik][0] == 'r'){
                            $link = strtolower($obiekty[$licznik][1]);
                            $link = str_replace(' ', '_', $link);
                            $link .= ".php";
                            echo '<div class="flex-items';
                            echo $licznik+6;
                            echo '" id="';
                            echo $licznik;
                            echo '">';
                            echo '<div class="testbutton">';
                            if ($obiekty[$licznik][1] == 'Pływalnia - Lindego 20'){
                                echo "<a id='link' href='";
                                echo $link;
                                echo "'>";
                            }
                            elseif ($obiekty[$licznik][1] == 'MSCDN'){
                                echo "<a id='link' href='";
                                echo $link;
                                echo "'>";
                            }
                            echo $obiekty[$licznik][1];
                            echo '</a>';
                            echo '</div></div>';
                            $licznik++;
                            $licznik2++;
                        }
                        else{
                            $licznik++;
                            $licznik2++;
                        }
                    }
                    echo '</div></div>';
                }
                elseif ($kategoria_js == 'p'){
                    $licznik = 0;
                    $licznik2 = 0;
                    echo '<div class="flex-items1"><div class="flex-container2">';
                    while ($licznik<sizeof($obiekty)){
                        if ($obiekty[$licznik][0] == 'p'){
                            $link = strtolower($obiekty[$licznik][1]);
                            $link = str_replace(' ', '_', $link);
                            $link .= ".php";
                            echo '<div class="flex-items';
                            echo $licznik+6;
                            echo '" id="';
                            echo $licznik;
                            echo '">';
                            echo '<div class="testbutton">';
                            if ($obiekty[$licznik][1] == 'Pływalnia - Lindego 20'){
                                echo "<a id='link' href='";
                                echo $link;
                                echo "'>";
                            }
                            elseif ($obiekty[$licznik][1] == 'MSCDN'){
                                echo "<a id='link' href='";
                                echo $link;
                                echo "'>";
                            }
                            echo $obiekty[$licznik][1];
                            echo '</a>';
                            echo '</div></div>';
                            $licznik++;
                            $licznik2++;
                        }
                        else{
                            $licznik++;
                            $licznik2++;
                        }
                    }
                    echo '</div></div>';
                }
                elseif ($kategoria_js == 'i'){
                    $licznik = 0;
                    $licznik2 = 0;
                    echo '<div class="flex-items1"><div class="flex-container2">';
                    while ($licznik<sizeof($obiekty)){
                        if ($obiekty[$licznik][0] == 'i'){
                            $link = strtolower($obiekty[$licznik][1]);
                            $link = str_replace(' ', '_', $link);
                            $link .= ".php";
                            echo '<div class="flex-items';
                            echo $licznik+6;
                            echo '" id="';
                            echo $licznik;
                            echo '">';
                            echo '<div class="testbutton">';
                            if ($obiekty[$licznik][1] == 'Pływalnia - Lindego 20'){
                                echo "<a id='link' href='";
                                echo $link;
                                echo "'>";
                            }
                            elseif ($obiekty[$licznik][1] == 'MSCDN'){
                                echo "<a id='link' href='";
                                echo $link;
                                echo "'>";
                            }
                            echo $obiekty[$licznik][1];
                            echo '</a>';
                            echo '</div></div>';
                            $licznik++;
                            $licznik2++;
                        }
                        else{
                            $licznik++;
                            $licznik2++;
                        }
                    }
                    echo '</div></div>';
                }
                else{
                    echo 'awaria';
                }
                
            ?>
            <!--<div class="flex-items1">
                <div class="flex-container2">
                    <div class="flex-items4"><div class="testbutton">Biblioteka na Koszykowej</div></div>
                    <div class="flex-items5"><div class="testbutton">Biblioteka Narodowa</div></div>
                    <div class="flex-items6"><div class="testbutton">Biblioteka UW</div></div>
                    <div class="flex-items7"><div class="testbutton">Biblioteka Bemowo</div></div>
                    <div class="flex-items8"><div class="testbutton">Biblioteka Białołeka</div></div>
                    <div class="flex-items9"><div class="testbutton">Biblioteka Mokotów</div></div>
                </div>
            </div>
            <div class="flex-items2">
                <div class="flex-container3">
                    <div class="flex-items10"><div class="testbutton">Biblioteka Ochota</div></div>
                    <div class="flex-items11"><div class="testbutton">Biblioteka Praga Północ</div></div>
                    <div class="flex-items12"><div class="testbutton">Biblioteka Praga Południe</div></div>
                    <div class="flex-items13"><div class="testbutton">Biblioteka Rembertów</div></div>
                    <div class="flex-items14"><div class="testbutton">Biblioteka Śródmieście</div></div>
                    <div class="flex-items15"><div class="testbutton">Biblioteka Wawer</div></div>
                </div>
            </div>
            <div class="flex-items3">
                <div class="flex-container4">
                    <div class="flex-items16"><div class="testbutton">Biblioteka Włochy</div></div>
                    <div class="flex-items17"><div class="testbutton">Biblioteka Wola</div></div>
                    <div class="flex-items18"><div class="testbutton">Biblioteka Żoliborz</div></div>
                    <div class="flex-items19"><div class="testbutton">Pływalnia Rozbrat</div></div>
                    <div class="flex-items20"><div class="testbutton">Pływalnia Polna</div></div>
                    <div class="flex-items21"><div class="testbutton">Pływalnia Ochota</div></div>
                </div>
            </div>
            <div class="flex-items4">
                <div class="flex-container5">
                    <div class="flex-items22"><div class="testbutton">Pływalnia Delfin</div></div>
                    <div class="flex-items23"><div class="testbutton">Pływalnia Nowa Fala</div></div>
                    <div class="flex-items24"><div class="testbutton">Pływalnia Szuwarek</div></div>
                    <div class="flex-items25"><div class="testbutton">Pływalnia Polonia</div></div>
                    <div class="flex-items26"><div class="testbutton">Pływalnia Inflancka</div></div>
                    <div class="flex-items27"><div class="testbutton">Pływalnia Foka</div></div>
                </div>
            </div>
            <div class="flex-items5">
                <div class="flex-container6">
                    <div class="flex-items28"><div class="testbutton">Pływalnia Pingwin</div></div>
                    <div class="flex-items29"><div class="testbutton">Pływalnia Prawy Brzeg</div></div>
                    <div class="flex-items30"><div class="testbutton">Pływalnia Wodnik</div></div>
                    <div class="flex-items31"><div class="testbutton">Pływalnia Grzybowska</div></div>
                    <div class="flex-items32"><div class="testbutton">Zagrywki</div></div>
                    <div class="flex-items33"><div class="testbutton">TepFactor</div></div>
                </div>
            </div>-->
        </div>
        </div>
    </div>
    <script src="gotowe.js"></script>
</body>
</html>