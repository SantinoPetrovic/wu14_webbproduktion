<?php
include_once("autoloader.php");
$cq = New ContentMachine("127.0.0.1","kebab","root","188830");
if (isset($_REQUEST["catID"])) {

    echo(json_encode($cq->editCategoryByCat($_REQUEST["catID"])));
}
else{
echo(json_encode($cq->getCategory()));
}
