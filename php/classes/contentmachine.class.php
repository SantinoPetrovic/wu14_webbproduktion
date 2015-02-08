<?php


class ContentMachine extends PDOHelper {

    protected $user_info = array("user_id" => 1);

    public function saveContent($insertContent) {
        // $insertContent[":user_id"] = $this->user_info["user_id"];

        $sql = "INSERT INTO pages (title, content, category_id) VALUES (:title, :content, :category_id)";
        $this->query($sql, $insertContent);
        return true;
    }

    public function getContent() {
        $sql ="SELECT * FROM pages";
        return $this->query($sql);
    }

    public function getContentByCat($category_id) {
        $sql = "SELECT * FROM pages WHERE category_id = :category_id";
        $parameters = array(":category_id" => $category_id);
        return $this->query($sql, $parameters);
    }

    public function saveCategory($insertCategory) {
        $sql = "INSERT INTO categories (title) VALUES (:title)";
        $this->query($sql, $insertCategory);
    }

    public function getCategory() {
        $sql ="SELECT * FROM categories";
        return $this->query($sql);
    }

}
