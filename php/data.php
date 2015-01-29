<?php
include_once("autoloader.php");
$cq = New ContentQueries("127.0.0.1","kebab","root","mysql");
if (isset($_REQUEST["insertContent"])) {
	echo(json_encode($cq->saveContent($_REQUEST["insertContent"])));
}
