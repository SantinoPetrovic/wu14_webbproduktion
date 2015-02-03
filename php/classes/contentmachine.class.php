<?php


class ContentMachine extends PDOHelper {

    protected $user_info = array("user_id" => 1);

    public function saveContent($insertContent) {
        // $insertContent[":user_id"] = $this->user_info["user_id"];
        // $page_path = $insertContent[":path"];
        // unset($insertContent[":path"]);
        // $menu_data = $insertContent["menuData"];
        // unset($insertContent["menuData"]);
        $sql = "INSERT INTO pages (title, content) VALUES (:title, :content)";
        $this->query($sql, $insertContent);
        return true;
    }
    public function getContent() {
        $sql ="SELECT title, content FROM pages";
        return $this->query($sql);
    }

    public function saveCategory($insertCategory) {
        $sql = "INSERT INTO categories (title) VALUES (:title)";
        $this->query($sql, $insertCategory);
    }

    public function getCategory() {
        $sql ="SELECT title FROM categories LIMIT 4";
        return $this->query($sql);
    }

}
