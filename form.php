<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dodaj Instytucję</title>
    <link rel="stylesheet" href="form.css">
</head>
<body>
<a href="index.php" class="powrot">Powrót</a>
<form action='gotowe.php' class="form">
      <div class="title">Dodaj instytucję</div>
      <div class="subtitle">Wpisz dane instytucji, którą chcesz dodać</div>
      <div class="input-container ic1">
        <input id="nazwa" class="input" type="text" placeholder=" " autocomplete="off"/>
        <div class="cut"></div>
        <label for="nazwa" class="placeholder">Nazwa instytucji</label>
      </div>
      <div class="input-container ic2">
        <input id="adres" class="input" type="text" placeholder=" " autocomplete="off"/>
        <div class="cut cut-short2"></div>
        <label for="adres" class="placeholder">Adres</label>
      </div>
      <div class="input-container ic2">
        <input id="kategoria" class="input" type="text" placeholder=" " autocomplete="off"/>
        <div class="cut cut-short"></div>
        <label for="kategoria" class="placeholder">Kategoria</>
      </div>
      <button id='submit' type='submit' class="submit">Prześlij</button>

      <?php
      if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Process your form data here
    
        // Redirect to gotowe.php
        header("Location: gotowe.php");
        exit();
        }
      ?>
</form>
</body>
</html>