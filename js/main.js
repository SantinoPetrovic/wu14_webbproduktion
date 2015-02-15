$(function(){
    // This function will always run directly when you go into the page.
    function loadThePage(){

        // Empty everything and hide the formular.
        $(".categoryContainer").html("");
        $("#allCategories").html("");
        $(".adminMenuPage").hide();
        $(".homeAdmin").show();
        getCategories(function (result) {
            var categories = result;
            console.log(categories);
            for(var i = 0; i < categories.length; i++){
                $(".categoryContainer").append(
                    "<li class='dropdown'><a href='#' class='dropdown-toggle' data-toggle='dropdown' role='button' aria-expanded='false'>" + categories[i].title + "<span class='caret'></span></a><ul class='dropdown-menu pageContent' data-categoryID='" + categories[i].category_id + "'role='menu'></ul></li>"
                    );
                // calling a function after the categories will be displayed on menu.
                getContentByCat(categories[i].category_id);
                $("#pageSelectCategory").append(
                    "<option data-categoryID='" + categories[i].category_id + "'>" + categories[i].title + "</option>"
                );
            }
        });

        getPages(function (result) {
            var pages = result;
            //console.log(pages);
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

// Returns all categories from DB by using AJAX.
    function getCategories(callback) {
        // AJAX request to get data from category and show it on nav and as options in the <select> element.
        $.ajax ({
            url: "php/getdataCategory.php",
            type: "post",
            dataType: "json",
            success: function(data){
                callback(data);
            },
            error: function(data){
                console.log("get_category error: ", data);
            }
        });
    }

    // Returns all categories from DB by using AJAX.
    function getPages(callback) {
        // AJAX request to get data from category and show it on nav and as options in the <select> element.
        $.ajax ({
            url: "php/getdata.php",
            type: "post",
            dataType: "json",
            success: function(data){
                callback(data);
            },
            error: function(data){
                console.log("get_category error: ", data);
            }
        });
    }

    function listCategories() {
        getCategories(function (result) {
            var categories = result;
            //console.log(categories);
            $('.allCategoriesContainer .list-group .list-group-item').remove();
            for(var i = 0; i < categories.length; i++){
                $(".allCategoriesContainer .list-group").append(
                    "<li class='list-group-item editCategoryListItem' data-categoriesID='" + categories[i].category_id + "'>" + categories[i].title + "</li>"
                );
            }

            $(".editCategoryListItem").click(function(){
                $(".adminMenuPage").slideUp(300);
                $(".editCategory").slideDown(300);

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
        });
    }

    function listPages() {
        getPages(function (result) {
            var pages = result;
            //console.log(pages);
            $('.allPagesContainer .list-group .list-group-item').remove();
            for(var i = 0; i < pages.length; i++){
                $(".allPagesContainer .list-group").append(
                    "<li class='list-group-item editPagesListItem' data-pagesID='" + pages[i].page_id + "'>" + pages[i].title + "</li>"
                );
            }

            $(".editPagesListItem").click(function(){
                $(".adminMenuPage").slideUp(300);
                $(".editPage").slideDown(300);

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
                            "<div class='form-group'><label class='col-sm-3 control-label editPagesContainer'>Title</label><div class='col-sm-8 editPagesContainer' id='dataPage' data-pagesID='"+ data[0].page_id +"'><input type='text' class='form-control' id='editedPage' value='"+ data[0].title +"'></div></div>"
                        );
                        $(".editPageField").append(
                            "<div class='form-group'><label class='col-sm-3 control-label'> Content </label><div class='col-sm-8'><textarea class='form-control' id='editContentValue' rows='7'>"+ data[0].content +"</textarea></div></div>"
                        );

                        $(".editPageField").append(
                            "<div class='form-group'><label class='col-sm-3 control-label'>Add to category: </label><div class='col-sm-8'><select id='pageEditCategory'></select></div></div>"
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
        });
    }


    // This function will search for pages by category_id.
    function getContentByCat(catId) {
        $.ajax ({
            url: "php/getdata.php",
            type: "post",
            dataType: "json",
            data: {
                "catId": catId
            },
            success: function(data){
                //console.log("get_page by cat success: ", data);
                // The function will loop through the data and display pages as a dropdown menu to categories.
                // The page will append on screen IF the page and category have the same category_id.
                for(var i = 0; i < data.length; i++){
                    $(".categoryContainer ul[data-categoryID='"+catId+"']").append(
                        "<li><a class='listDatPage' data-pagesID='"+ data[i].page_id +"' href='#'>" + data[i].title + "</a></li>"
                        );
                }
                getContentByPag();
                // var pagId = {
                //     pagID : $(".listPage").attr("data-pagesID")
                // };
                // console.log(pagId);
            },
            error: function(data){
                console.log("get_page error: ", data);
            }
        });
    }
    //console.log("lolek",$(".dropdown").length);

	$(".buttonPage").click(function(){
        $(".adminMenuPage").slideUp(300);
        $(".allpages").slideDown(300);
        listPages();
	});

    function getContentByPag(){
        $(".listDatPage").click(function(){
            console.log("HEJHEJ");
        $(".adminMenuPage").slideUp(300);
        $(".allcategories").slideDown(300);
        });
    }

    $(".buttonCategory").click(function(){
        $(".adminMenuPage").slideUp(300);
        $(".allcategories").slideDown(300);
        listCategories();
    });

    $(".newCategory").click(function(){
        $(".allcategories").slideUp(300);
        $(".addAsCategory").slideDown(300);
    });

    $(".newPage").click(function(){
        $(".allpages").slideUp(300);
        $(".addAsPage").slideDown(300);
    });

    // When you're done with your formular and you press the submit button, the page will be saved in DB.
	$(".submitPage").click(function(){
		var insertContent = {
			":title" : $("#titleValue").val(),
			":content" : $("#contentValue").val(),
            ":category_id" : $("#pageSelectCategory option:selected").attr('data-categoryID')
		};
		$.ajax({
			url: "php/savedata.php",
			type: "post",
			dataType: "json",
			data: {
				"insertContent" : insertContent
			},
			success: function(data){
                alert('Page saved!');
				console.log("store_content success: ", data);
                console.log($("option:selected").val());
                $("#pageSelectCategory").empty();
                loadThePage();
			},
			error: function(data){
				console.log("store_content error: ", data);
			}
		});
		return false;
	});

    // When you're done with your formular and you press the submit button, the category will be saved in DB.
    $(".submitCategory").click(function(){
        var insertCategory = {
            ":title" : $("#titleValueCategory").val()
        };
        $.ajax({
            url: "php/savedataCategory.php",
            type: "post",
            dataType: "json",
            data: {
                "insertCategory" : insertCategory
            },
            success: function(data){
                alert('Category saved!');
                console.log("store_category success: ", data);
                loadThePage();
            },
            error: function(data){
                console.log("store_category error: ", data);
            }
            });
        return false;
    });

    $(".saveCategory").click(function(){
        var insertEditedCategory = {
            ":title" : $("#editedCategory").val(),
            ":category_id" : $("#editedCategory").attr('data-categoriesID')
        };
        console.log(insertEditedCategory);
        $.ajax({
            url: "php/savedataCategory.php",
            type: "post",
            dataType: "json",
            data: {
                "insertEditedCategory" : insertEditedCategory
            },
            success: function(data){
                alert('Category saved!');
                console.log("store_category success: ", data);
                loadThePage();
            },
            error: function(data){
                console.log("store_category error: ", data);
            }
            });
    });


    $(".savePage").click(function(){
        var insertEditedPage = {
            ":title" : $("#editedPage").val(),
            ":content" : $("#editContentValue").val(),
            ":category_id" : $("#pageEditCategory option:selected").attr('data-categoryID'),
            ":page_id" : $("#dataPage").attr('data-pagesID')
        };
        console.log(insertEditedPage);
        $.ajax({
            url: "php/savedata.php",
            type: "post",
            dataType: "json",
            data: {
                "insertEditedPage" : insertEditedPage
            },
            success: function(data){
                alert('Category saved!');
                console.log("store_category success: ", data);
                loadThePage();
            },
            error: function(data){
                console.log("store_category error: ", data);
            }
        });
    });

    $(".deleteCategory").click(function(){
        var deleteCategory = {
            ":category_id" : $("#editedCategory").attr('data-categoriesID')
        }
        console.log(deleteCategory);
        $.ajax({
            url: "php/deleteCategory.php",
            type: "post",
            dataType: "json",
            data: {
                "deleteCategory" : deleteCategory
            },
            success: function(data){
                alert('Category deleted with its content!');
                console.log("delete category success: ", data);
                loadThePage();
            },
            error: function(data){
                console.log("delete category error: ", data);
            }
        });
    });

    $(".deletePage").click(function(){
        var deletePage = {
            ":page_id" : $("#dataPage").attr('data-pagesID')
        }
        console.log(deletePage);
        $.ajax({
            url: "php/deletedata.php",
            type: "post",
            dataType: "json",
            data: {
                "deletePage" : deletePage
            },
            success: function(data){
                alert('Page deleted!');
                console.log("delete page success: ", data);
                loadThePage();
            },
            error: function(data){
                console.log("delete page error: ", data);
            }
        });
    });
// The first function begins here.
    loadThePage();
});