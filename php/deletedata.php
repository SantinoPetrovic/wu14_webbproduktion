<?php
include_once("autoloader.php");
$cq = New ContentMachine("127.0.0.1","kebab","root","188830");
if (isset($_REQUEST["deletePage"])) {
    echo(json_encode($cq->deletePageByPag($_REQUEST["deletePage"])));
}