<?php
$host = 'localhost';
$user = 'your_db_user';
$pass = 'your_db_pass';
$db = 'your_db_name';

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
?>
