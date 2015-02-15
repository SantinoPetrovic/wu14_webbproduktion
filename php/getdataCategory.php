<?php
include_once("autoloader.php");
$cq = New ContentMachine("127.0.0.1","kebab","root","188830");
if (isset($_REQUEST["catID"])) {

    echo(json_encode($cq->editCategoryByCat($_REQUEST["catID"])));
}
else{
    // Get all categories.
    $categories = $cq->getCategory();

    // Loop through each category and get their pages.
    foreach ($categories as &$category) {
        $pages = $cq->getCategoryPages($category['category_id']);
        $category['pages'] = $pages;
    }
    echo(json_encode($categories));
}
