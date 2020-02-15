<?php
include("database.php");

$selectAll = "SELECT * from `$db_table1`";
$resultSelectAll = mysqli_query($conexion, $selectAll);

$userdb = "";

$userdb .= "<div class='table-responsive-sm'>";
$userdb .= "<table class='table'>";
$userdb .= "<tr>";
$userdb .= "<th>Nombre</th>";
$userdb .= "<th>Apellido</th>";
$userdb .= "<th>Email</th>";
$userdb .= "<th>DNI</th>";
$userdb .= "<th>Móvil</th>";
$userdb .= "</tr>";
if (!$resultSelectAll) {
    die("Error to do the select query");
} else {
    while ($colum = mysqli_fetch_assoc($resultSelectAll)) {
        $userdb .= "<tr>";
        $userdb .= "<td>" . $colum["nombre"] . "</td>";
        $userdb .= "<td>" . $colum["apellido"] . "</td>";
        $userdb .= "<td>" . $colum["email2"] . "</td>";
        $userdb .= "<td>" . $colum["dni"] . "</td>";
        $userdb .= "<td>" . $colum["movil"] . "</td>";
        $userdb .= "</tr>";
    }
}
$userdb .= "</table>";
$userdb .= "</div>";

echo $userdb;

include("closedatabase.php");
