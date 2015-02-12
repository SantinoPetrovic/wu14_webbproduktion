$(function(){
    // This function will always run directly when you go into the page.
    function loadThePage(){

        // Empty everything and hide the formular.
        $(".categoryContainer").html("");
        $("#allCategories").html("");
        $(".adminMenuPage").slideUp(300);
        $(".homeAdmin").slideDown(300);

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
                    "<option data-categoryID='" + categories[i].category_id + "'>" + categories[i].title + "</option>");
                // console.log($("#pageSelectCategory").append(
                //     "<option data-categoryID='" + categories[i].category_id + "'>" + categories[i].title + "</option>"));
                console.log($("#pageSelectCategory option"));
            }

        });

        getPages(function (result) {
            var pages = result;
            console.log(pages);
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
            console.log(categories);
            $('.allCategoriesContainer .list-group .list-group-item').remove();
            for(var i in categories){
                $(".allCategoriesContainer .list-group").append(
                    "<li class='list-group-item editCategoryListItem' data-categoriesID='" + categories[i].category_id + "'>" + categories[i].title + "</li>"
                );
            }

            // $(".editCategoryListItem").click(function() {
            //     search for id
            //     $(".editCategoryListItem[data-categoriesID='"+10+"]");
            //     find out which id
            //     console.log("I clicked cat: ", $(this).attr("data-categoriesID"));
            // });

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
                        $(".editCategoryContainer").remove();
                        $(".editCategoryField").prepend(
                            "<label class='col-sm-3 control-label editCategoryContainer'>Title</label><div class='col-sm-8 editCategoryContainer'><input type='text' class='form-control' value='"+ data[0].title +"'></div>"
                        );
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
            console.log(pages);
            $('.allPagesContainer .list-group .list-group-item').remove();
            for(var i in pages){
                $(".allPagesContainer .list-group").append(
                    "<li class='list-group-item editPagesListItem' data-pagesID='" + pages[i].pages_id + "'>" + pages[i].title + "</li>"
                );
            }

            $(".editPagesListItem").click(function(){
                $(".adminMenuPage").slideUp(300);
                $(".editPage").slideDown(300);
                $(".editPageField").append("<p>hahagg</p>");
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
                console.log("get_page by cat success: ", data);
                // The function will loop through the data and display pages as a dropdown menu to categories.
                // The page will append on screen IF the page and category have the same category_id.
                for(var j = 0; j < data.length; j++){
                    $(".categoryContainer ul[data-categoryID='"+catId+"']").append("<li><a class='listPage' data-pagesID='"+ data[j].page_id +"' href='"+data[j].page_id+"'>" + data[j].title + "</a></li>"
                        );
                }
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

	$(".buttonPage").click(function(){
        $(".adminMenuPage").slideUp(300);
        $(".allpages").slideDown(300);
        listPages();
	});

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
            ":category_id" : $("option:selected").attr('data-categoryID')
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
// The first function begins here.
    loadThePage();
});