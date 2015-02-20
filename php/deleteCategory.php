<?php
include_once("autoloader.php");
$cq = New ContentMachine("127.0.0.1","kebab","root","mysql");
if (isset($_REQUEST["deleteCategory"])) {
    echo(json_encode($cq->deleteCategoryByCat($_REQUEST["deleteCategory"])));
}