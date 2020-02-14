<?php
include("database.php");
$nombre = $_POST["Nombre"];
$apellido = $_POST["Apellido"];
$email2 = $_POST["RepetirEmail"];
$DNI = $_POST["DNI"];
$movil = $_POST["Movil"];

$selectEmail = "SELECT email2 from `$db_table1` where email2 = '$email2'";
$insertsql = "INSERT INTO `$db_table1` (`nombre`,`apellido`,`email2`,`dni`,`movil`) VALUES ('$nombre','$apellido','$email2','$DNI','$movil')";

$resultEmail = mysqli_query($conexion, $selectEmail);
$row_email = $resultEmail->num_rows;
if ($row_email >= 1) {
    echo "el usuario ya existe";
} else {
    mysqli_query($conexion, $insertsql);
    echo "usuario creado correctamente";
}


include("closedatabase.php");
