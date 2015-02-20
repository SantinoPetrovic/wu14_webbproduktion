<?php
include_once("autoloader.php");
$cq = New ContentMachine("127.0.0.1","cms_example","root","mysql");
if (isset($_REQUEST["insertCategory"])) {

    echo(json_encode($cq->saveCategory($_REQUEST["insertCategory"])));
}
else if (isset($_REQUEST["insertEditedCategory"])) {

    echo(json_encode($cq->saveEditedCategoryByCat($_REQUEST["insertEditedCategory"])));
}
