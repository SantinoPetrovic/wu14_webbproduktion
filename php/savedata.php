<?php
include_once("autoloader.php");
$cq = New ContentMachine("127.0.0.1","kebab","root","188830");
if (isset($_REQUEST["insertContent"])) {

    echo(json_encode($cq->saveContent($_REQUEST["insertContent"])));
}
// var_dump($_REQUEST["insertContent"]);
