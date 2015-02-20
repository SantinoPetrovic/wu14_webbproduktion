<?php
include_once("autoloader.php");
$cq = New ContentMachine("127.0.0.1","cms_example","root","mysql");
if (isset($_REQUEST["deletePage"])) {
    echo(json_encode($cq->deletePageByPag($_REQUEST["deletePage"])));
}