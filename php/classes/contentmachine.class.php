<?php


class ContentMachine extends PDOHelper {

    protected $user_info = array("user_id" => 1);

    public function saveContent($insertContent) {
        // $insertContent[":user_id"] = $this->user_info["user_id"];
        $sql = "INSERT INTO pages (title, content, category_id) VALUES (:title, :content, :category_id)";
        $this->query($sql, $insertContent);
    }

    public function getPages() {
        $sql ="SELECT * FROM pages";
        return $this->query($sql);
    }

    public function getCategoryPages($category_id) {
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

    public function getFooter() {
        $sql ="SELECT * FROM footer";
        return $this->query($sql);
    }

    public function editCategoryByCat($category_id) {
        $sql ="SELECT * FROM categories WHERE category_id = :category_id";
        $parameters = array(":category_id" => $category_id);
        return $this->query($sql, $parameters);
    }

    public function getContentByPag($page_id) {
        $sql ="SELECT * FROM pages WHERE page_id = :page_id";
        $parameters = array(":page_id" => $page_id);
        return $this->query($sql, $parameters);
    }

    public function saveEditedCategoryByCat($insertEditedCategory) {
        $sql = "UPDATE categories SET title = (:title) WHERE category_id = :category_id ";
        $this->query($sql, $insertEditedCategory);
    }

    public function saveEditedPageByPag($insertEditedPage) {
        $sql = "UPDATE pages SET title = (:title), content = (:content), category_id = (:category_id) WHERE page_id = :page_id ";
        $this->query($sql, $insertEditedPage);
    }

    public function deleteCategoryByCat($deleteCategory){
        $sql = "DELETE FROM pages WHERE category_id = :category_id; DELETE FROM categories WHERE category_id = :category_id ";
        $this->query($sql, $deleteCategory);
    }

    public function deletePageByPag($deletePage){
        $sql = "DELETE FROM pages WHERE page_id = :page_id ";
        $this->query($sql, $deletePage);
    }



}
