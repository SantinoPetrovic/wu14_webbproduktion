<?php
include_once("autoloader.php");
$cq = New ContentMachine("127.0.0.1","kebab","root","mysql");
if (isset($_REQUEST["catId"])) {
	echo(json_encode($cq->getContentByCat($_REQUEST["catId"])));
}
else if(isset($_REQUEST["pagID"])) {
	echo(json_encode($cq->getContentByPag($_REQUEST["pagID"])));
}
 else {
	echo(json_encode($cq->getPages()));
}
