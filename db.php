<?php

$host = "localhost";
$dbname = "hospital";
$user = "root";
$password = "";


$dsn = "mysql:host=$host;dbname=$dbname;charset=utf8mb4";


try {
    $conn = new PDO($dsn, $user, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo 'Error al conectar con la base de datos: ' . $e->getMessage();
    exit;
}
?>

