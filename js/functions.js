// This function will always run directly when you go into the page.
function loadThePage(){
    $(".categoryContainer").html("");
    $("#pageSelectCategory").empty();
    $.ajax ({
        url: "php/getdataCategory.php",
        type: "post",
        dataType: "json",
        success: function(data){
        var categories = data;
        console.log(categories);
        for(var i = 0; i < categories.length; i++){
            $(".categoryContainer").append(
                "<li class='dropdown'><a href='#' class='dropdown-toggle' data-toggle='dropdown' role='button' aria-expanded='false'>" + categories[i].title + "<span class='caret'></span></a><ul class='dropdown-menu pageContent' data-categoryID='" + categories[i].category_id + "'role='menu'></ul></li>"
                );
            // calling a function after the categories will be displayed on menu.
            var pages = categories[i].pages;
            for(var j = 0; j < pages.length; j++){
                $(".categoryContainer ul[data-categoryID='"+categories[i].category_id+"']").append(
                    "<li><a class='listDatPage' data-pagesID='"+ pages[j].page_id +"' href='"+ pages[j].page_id +"'>" + pages[j].title + "</a></li>"
                    );
            }
            $("#pageSelectCategory").append(
                "<option data-categoryID='" + categories[i].category_id + "'>" + categories[i].title + "</option>"
            );
        }
        },
        error: function(data){
            console.log("get_category error: ", data);
        }
    });

    $.ajax ({
        url: "php/getFooter.php",
        type: "post",
        dataType: "json",
        success: function(data){
            $(".allInformation").empty();
            //console.log("footer success: ", data);
            $(".informationContainer").append(
                "<p class='allInformation'><strong>Adress:</strong> "+ data[0].street + "</p>  <p class='allInformation'> Phone-number: "+ data[0].phone_number +"</p> "
                );
        },
        error: function(data){
            console.log("footer error: ", data);
        }
    });
}

function reloadTheHeader() {
    // Empty everything and hide the formular.
    $(".allCategories").empty();
    $(".allPages").empty();
    $(".adminMenuPage").hide();
}

function listCategories() {
    $.ajax ({
        url: "php/getdataCategory.php",
        type: "post",
        dataType: "json",
        success: function(data){
            var categories = data;
            //console.log(categories);
            $('.allCategoriesContainer .list-group .list-group-item').remove();
            for(var i = 0; i < categories.length; i++){
                $(".allCategoriesContainer .list-group").append(
                    "<li class='list-group-item editCategoryListItem' data-categoriesID='" + categories[i].category_id + "'>" + categories[i].title + "</li>"
                );
            }

            $(".editCategoryListItem").click(function(){
                $(".adminMenuPage").slideUp(600);
                $(".editCategory").slideDown(600);

                $.ajax ({
                    url: "php/getdataCategory.php",
                    type: "post",
                    dataType: "json",
                    data: {
                        "catID" : $(this).attr("data-categoriesID")
                    },
                    success: function(data){
                        console.log("Edit category data: ", data);
                        $(".editCategoryField").empty();
                        $(".editCategoryField").append(
                            "<label class='col-sm-3 control-label editCategoryContainer'>Title</label><div class='col-sm-8 editCategoryContainer'><input type='text' class='form-control' id='editedCategory' data-categoriesID='"+ data[0].category_id +"' value='"+ data[0].title +"'></div>"
                        );
                        // console.log("attr on this: ", $("#editedCategory").attr('data-categoriesID'));
                    },
                    error: function(data){
                        console.log("get_category error: ", data);
                    }
                });
            });
        },
        error: function(data){
            console.log("get_category error: ", data);
        }
    });
}

function listPages() {
    $.ajax ({
        url: "php/getdata.php",
        type: "post",
        dataType: "json",
        success: function(data){
        var pages = data;
        //console.log(pages);
        $('.allPagesContainer .list-group .list-group-item').remove();
        for(var i = 0; i < pages.length; i++){
            $(".allPagesContainer .list-group").append(
                "<li class='list-group-item editPagesListItem' data-pagesID='" + pages[i].page_id + "'>" + pages[i].title + "</li>"
            );
        }

        $(".editPagesListItem").click(function(){
            $(".adminMenuPage").slideUp(600);
            $(".editPage").slideDown(600);

            $.ajax ({
                url: "php/getdata.php",
                type: "post",
                dataType: "json",
                data: {
                    "pagID" : $(this).attr("data-pagesID")
                },
                success: function(data){
                    //console.log("Edit page data: ", data);
                    $(".editPageField").empty();
                    $(".editPageField").append(
                        "<div class='form-group'><label class='col-sm-3 control-label editPagesContainer'>Title</label><div class='col-sm-8 editPagesContainer' id='dataPage' data-imageID='" + data[0].image_id +"' data-pagesID='"+ data[0].page_id +"'><input type='text' class='form-control' id='editedPage' value='"+ data[0].title +"'></div></div>"
                    );
                    $(".editPageField").append(
                        "<div class='form-group'><label class='col-sm-3 control-label'>Section</label><div class='col-sm-8'><input type='text' class='form-control' id='editSectionValue' value='"+ data[0].section +"'></div></div>"
                    );
                    $(".editPageField").append(
                        "<div class='form-group'><label class='col-sm-3 control-label'> Content </label><div class='col-sm-8'><textarea class='form-control' id='editContentValue' rows='7'>"+ data[0].content +"</textarea></div></div>"
                    );
                    $(".editPageField").append(
                        "<div class='form-group'><label class='col-sm-3 control-label'>Add to category: </label><div class='col-sm-8'><select id='pageEditCategory'></select></div></div>"
                    );
                    $(".editPageField").append(
                        "<div class='form-group'><label class='col-sm-3 control-label'>Add image:</label><div class='col-sm-8'><input type='file' id='editFile' name='img'/></div></div>"
                    );
                    $.ajax ({
                        url: "php/getdataCategory.php",
                        type: "post",
                        dataType: "json",
                        success: function(data){
                            // $("#pageEditCategory").empty();
                            console.log("getdataCategory success: ", data);
                            for(var i = 0; i < data.length; i++){
                                $("#pageEditCategory").append(
                                    "<option data-categoryID='" + data[i].category_id + "'>" + data[i].title + "</option>"
                                );
                            }
                        },
                        error: function(data){
                            console.log("getdataCategory error: ", data);
                        }
                    });
                },
                error: function(data){
                    console.log("get_category error: ", data);
                }
            });

        });
        },
        error: function(data){
            console.log("get_category error: ", data);
        }
    });
}
