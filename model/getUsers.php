<?php
include("database.php");

$selectAll = "SELECT * from `$db_table1`";
$resultSelectAll = mysqli_query($conexion, $selectAll);

if ($resultSelectAll) {
    $data = array();
    while ($result = mysqli_fetch_array($resultSelectAll)) {
        $data[] = array(
            "nombre" => $result["nombre"],
            "apellido" => $result["apellido"],
            "email" => $result["email2"],
            "dni" => $result["dni"],
            "movil" => $result["movil"]
        );
    }
    echo json_encode($data);
} else {
    die("Error to do the select query" . mysqli_error($conexion));
}

include("closedatabase.php");
