<?php
include_once("autoloader.php");
$cq = New ContentMachine("127.0.0.1","kebab","root","188830");
echo(json_encode($cq->getCategory()));
// var_dump($cq->getCategory());
