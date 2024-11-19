<?php
$page = $_SERVER['PHP_SELF'];
//$sec = "2";
?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pływalnia - Lindego 20</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
     integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
     crossorigin=""/>
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
     integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
     crossorigin=""></script>
     <script type='text/javascript' src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.1.1/chart.min.js"></script>
     <script type='text/javascript' src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.1.1/helpers.esm.min.js"></script>
     <link rel="stylesheet" href="lindego.css">
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

            if (strpos($line, '1') === 0) {
                $liczCzytnikWejscie++;
            } elseif (strpos($line, '2') === 0) {
                $liczCzytnikWyjscie++;
            }
        }
    
            fclose($file);

            if ($liczCzytnikWejscie - $liczCzytnikWyjscie<0){
                $liczCzytnikWejscie = 0;
                $liczCzytnikWyjscie = 0;
                $ilosc_osob_na_zywo = $liczCzytnikWejscie - $liczCzytnikWyjscie;
            }
            else{
                $ilosc_osob_na_zywo = $liczCzytnikWejscie - $liczCzytnikWyjscie;
            }
        } else {
            echo "Blad przy otwarciu pliku";
        }
    } else {
        echo "Plik $fileName nie istnieje";
    }
    ?>

    <a href="index.php" class="powrot">Powrót</a>
    <div class="grid-container">
        <div class="grid-child-green">
            <?php

            $obiekty = array(array('b', 'Biblioteka na Koszykowej'), array('b', 'Biblioteka Narodowa'),                 array('b', 'Biblioteka UW'), array('b', 'Biblioteka Bemowo'), array('b', 'Biblioteka Białołęka'),
            array('b', 'Biblioteka Mokotów'), array('b', 'Biblioteka Ochota'), array('b', 'Biblioteka Praga Północ'),
            array('b', 'Biblioteka Praga Południe'), array('b', 'Biblioteka Rembertów'), array('b', 'Biblioteka Śródmieście'),
            array('b', 'Biblioteka Wawer'), array('b', 'Biblioteka Włochy'), array('b', 'Biblioteka Wola'), array('b', 'Biblioteka Żoliborz'),
            array('p', 'Pływalnia Rozbrat'), array('p', 'Pływalnia Polna'), array('p', 'Pływalnia Ochota'),
            array('p', 'Pływalnia Delfin'), array('p', 'Pływalnia Nowa Fala'), array('p', 'Pływalnia Szuwarek'),
            array('p', 'Pływalnia Polonia'), array('p', 'Pływalnia Inflancka'), array('p', 'Pływalnia Foka'),
            array('p', 'Pływalnia Pingwin'), array('p', 'Pływalnia Prawy Brzeg'), array('p', 'Pływalnia Wodnik'),
            array('p', 'Pływalnia Grzybowska'), array('p', 'Pływalnia - Lindego 20'), array('r', 'Zagrywki'), array('r', 'TepFactor'));

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
            ?>
        </div>
        <div class="grid-child-purple">
            <div class="tekstnapisu">
            <div class="napisnagorze">Pływalnia - Lindego 20</div>
            </div>
            <div class="flex-containera">
                <div class="flex-i">
                <div class="flex-containerb">
                    <div class="flex-it">
                        <div class="na_zywo">Liczba osób na żywo:</div>
                        <div class="ilosc_osob" id='ilosc_osob_na_zywo'>
                            <?php
                            //echo $ilosc_osob_na_zywo;
                            //echo 10
                            echo 'N/A';
                            ?>
                        </div>
                        <div class="godzina">Stan na godzinę: 
                            <?php
                            echo date('H:i:s');
                            ?>
                        </div>
                    </div>
                    <div class="flex-it">
                        <div id='map'></div>
                    </div>
                </div>
                </div>
                <div class="flex-i">
                    <div class="wykres">
                    <canvas id='myChart' class='myChart'></canvas>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="lindego.js"></script>
</body>
</html>