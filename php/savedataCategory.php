<?php
include_once("autoloader.php");
$cq = New ContentMachine("127.0.0.1","kebab","root","mysql");
if (isset($_REQUEST["insertCategory"])) {

    echo(json_encode($cq->saveCategory($_REQUEST["insertCategory"])));
}