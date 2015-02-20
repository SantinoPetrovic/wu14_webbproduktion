<?php
include_once("autoloader.php");
$cq = New ContentMachine("127.0.0.1","cms_example","root","mysql");
if (isset($_REQUEST["insertContent"])) {

    echo(json_encode($cq->saveContent($_REQUEST["insertContent"])));
}

else if (isset($_REQUEST["insertEditedPage"])) {

    echo(json_encode($cq->saveEditedPageByPag($_REQUEST["insertEditedPage"])));
}
