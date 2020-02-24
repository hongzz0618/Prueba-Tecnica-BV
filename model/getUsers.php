<?php
include("database.php");

$selectAll = "SELECT * from `$db_table1`";

if (isset($_POST["valueSearch"])) {
    $realValue = $conexion->real_escape_string($_POST["valueSearch"]);
    $selectAll = "SELECT id,nombre, apellido, email2, dni, movil from `$db_table1` WHERE nombre LIKE '%" . $realValue . "%' OR apellido LIKE '%" . $realValue . "%' OR email2 LIKE '%" . $realValue . "%' OR dni LIKE '%" . $realValue . "%' OR movil LIKE '%" . $realValue . "%'";
}

$resultSelectAll = mysqli_query($conexion, $selectAll);

if ($resultSelectAll->num_rows > 0) {
    $data = array();
    while ($result = mysqli_fetch_array($resultSelectAll)) {
        $data[] = array(
            "id" => $result["id"],
            "nombre" => $result["nombre"],
            "apellido" => $result["apellido"],
            "email" => $result["email2"],
            "dni" => $result["dni"],
            "movil" => $result["movil"]
        );
    }
    echo json_encode($data);
} else {
    echo "No rows";
}

include("closedatabase.php");
