<?php
include("database.php");

$deleteRow = "DELETE from `$db_table1` where id='" . $_POST["id"] . "'";
$resultDeleteRow = mysqli_query($conexion, $deleteRow);
echo $resultDeleteRow;

include("closedatabase.php");
