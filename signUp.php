<?php
    $conexion=mysqli_connect('localhost', 'root', '', 'bvirtual_prueba');
    $nombre = $_POST["Nombre"];
    $apellido = $_POST["Apellido"];
    $email1 = $_POST["Email"];
    $email2 = $_POST["RepetirEmail"];
    $DNI = $_POST["DNI"];
    $movil = $_POST["Movil"];
    $sql="INSERT INTO `user` (`nombre`,`apellido`,`email1`,`email2`,`dni`,`movil`) VALUES ('$nombre','$apellido','$email1','$email2','$DNI','$movil')";
    mysqli_query($conexion,$sql);
?>