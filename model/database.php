<?php
$host = "localhost";
$basededatos = "bvirtual_prueba";
$usuario = "root";
$password = "";

$db_table1 = "user";

$conexion = mysqli_connect($host, $usuario, $password, $basededatos);

if ($conexion->connect_errno) {
    echo "Error";
    exit();
}
