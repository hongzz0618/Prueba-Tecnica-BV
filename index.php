<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up</title>
    <link rel="stylesheet" href="style/index.css">
    <script src="https://code.jquery.com/jquery-3.1.0.js"></script>
    <script src="function/validation.js"></script>
</head>

<body>
    <div class="container">
        <?php include("header.php"); ?>
        <p>Por favor, rellena los campos siguientes:</p>
        <form id="signUpFrom" method="POST">
            <div class="col-50">
                <input id="idNombre" name="Nombre" type="text" placeholder="Nombre">
                <div id="message1" class="error"> vuelva a introducir un formato correcto</div>
            </div>
            <div class="col-50">
                <input id="idApellido" name="Apellido" type="text" placeholder="Apellido">
                <div id="message2" class="error"> vuelva a introducir un formato correcto</div>
            </div>
            <div class="col-50">
                <input id="idEmail1" name="Email" type="text" placeholder="Email">
                <div id="message3" class="error"> vuelva a introducir un formato correcto</div>
            </div>
            <div class="col-50">
                <input id="idEmail2" name="RepetirEmail" type="text" placeholder="Repetir Email">
                <div id="message4" class="error"> vuelva a introducir un formato correcto</div>
            </div>
            <div class="col-50">
                <input id="idDNI" name="DNI" type="text" placeholder="DNI">
                <div id="message5" class="error"> vuelva a introducir un formato correcto</div>
            </div>
            <div class="col-50">
                <input id="idMovil" name="Movil" type="text" placeholder="Móvil">
                <div id="message6" class="error"> vuelva a introducir un formato correcto</div>
            </div>
            <input id="SubmitButton" type="submit" value="Enviar">
            <div id="responseCreate"></div>
        </form>
    </div>
</body>

</html>