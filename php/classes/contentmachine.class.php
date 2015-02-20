<?php


class ContentMachine extends PDOHelper {

    public function saveContent($insertContent) {
        $sql = "INSERT INTO images (image_name) VALUES (:image_name); INSERT INTO pages (title, section, content, category_id, image_id) VALUES (:title, :section, :content, :category_id, (SELECT image_id FROM images WHERE image_name = :image_name))";
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
        $sql ="SELECT * FROM pages, images WHERE pages.page_id = :page_id AND pages.image_id = images.image_id";
        $parameters = array(":page_id" => $page_id);
        return $this->query($sql, $parameters);
    }

    public function saveEditedCategoryByCat($insertEditedCategory) {
        $sql = "UPDATE categories SET title = (:title) WHERE category_id = :category_id ";
        $this->query($sql, $insertEditedCategory);
    }

    public function saveEditedPageByPag($insertEditedPage) {
        $sql = "UPDATE images SET image_name = (:image_name) WHERE image_id = :image_id; UPDATE pages SET title = (:title), section = (:section), content = (:content), category_id = (:category_id) WHERE page_id = :page_id";
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
