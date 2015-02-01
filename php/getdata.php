<?php
include_once("autoloader.php");
$cq = New ContentMachine("127.0.0.1","kebab","root","mysql");
echo(json_encode($cq->getContent()));
// var_dump($cq->getContent());