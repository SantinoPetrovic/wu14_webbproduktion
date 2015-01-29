<?php

//inherits all public PDOHelper methods
class ContentQueries extends PDOHelper {
  //later when we have login in place, real user_info 
  //will be stored in the property user_info.
  //for now let's just fake it
  protected $user_info = array("user_id" => 1);

  public function saveContent($insertContent) {
      $insertContent[":user_id"] = $this->user_info["user_id"];
      $page_path = $insertContent[":path"];
      unset($insertContent[":path"]);
      $menu_data = $insertContent["menuData"];
      unset($insertContent["menuData"]);
      var_dump($insertContent);
      $pageSQL = "INSERT INTO pages (title, content) VALUES (:title, :content)";
   
    }
