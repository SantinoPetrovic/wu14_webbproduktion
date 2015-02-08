$(function(){
    // This function will always run directly when you go into the page.
    function loadThePage(){

        // Empty everyrhing and hide the formular.
        $(".categoryContainer").html("");
        $("#allCategories").html("");
        $(".adminMenuPage").hide();
        $(".homeAdmin").show();

        getCategories(function (result) {
            var categories = result;
            console.log(categories);
            for(var i in categories){
                $(".categoryContainer").append(
                    "<li class='dropdown'><a href='#' class='dropdown-toggle' data-toggle='dropdown' role='button' aria-expanded='false'>" + categories[i].title + "<span class='caret'></span></a><ul class='dropdown-menu pageContent' data-categoryID='" + categories[i].category_id + "'role='menu'></ul></li>"
                    );
                // calling a function after the categories will be displayed on menu.
                getContentByCat(categories[i].category_id);
                $("#pageSelectCategory").append(
                    "<option data-categoryID='" + categories[i].category_id + "'>" + categories[i].title + "</option>");
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

            $(".editCategoryListItem").click(function(){
                $(".adminMenuPage").slideUp(300);
                $(".editCategory").slideDown(300);
                console.log($(".editCategory").length);
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
                    $(".categoryContainer ul[data-categoryID='"+catId+"']").append("<li><a href='"+data[j].page_id+"'>" + data[j].title + "</a></li>"
                        );
                }
            },
            error: function(data){
                console.log("get_page error: ", data);
            }
        });
    }
// The first function begins here.
    loadThePage();

	$(".buttonPage").click(function(){
        $(".adminMenuPage").slideUp(300);
	});

    $(".buttonCategory").click(function(){
        $(".adminMenuPage").slideUp(300);
        $(".allcategories").slideDown(300);
        listCategories();
    });

    console.log($(".allCategoriesContainer .list-group .list-group-item").val);

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
});