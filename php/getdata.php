<?php
include_once("autoloader.php");
$cq = New ContentMachine("127.0.0.1","kebab","root","mysql");
if (isset($_REQUEST["catId"])) {
	echo(json_encode($cq->getContentByCat($_REQUEST["catId"])));
} else {
	echo(json_encode($cq->getContent()));
}
