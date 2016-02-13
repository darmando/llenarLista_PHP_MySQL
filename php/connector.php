<?php
function getConnection() {
	$dbhost="localhost";
	$dbuser="desarr13_ejemplo";
	$dbpass="huevos1";
	$dbname="desarr13_bdSelectsAnidados";
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);	
	$dbh -> exec("set names utf8");
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	return $dbh;
}
?>