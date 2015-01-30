<?php


class ContentMachine extends PDOHelper {

    protected $user_info = array("user_id" => 1);

    public function saveContent($insertContent) {
        $insertContent[":user_id"] = $this->user_info["user_id"];
        // $page_path = $insertContent[":path"];
        // unset($insertContent[":path"]);
        // $menu_data = $insertContent["menuData"];
        // unset($insertContent["menuData"]);
        $pageSQL = "INSERT INTO pages (title, content) VALUES (:title, :content)";
    }
}
