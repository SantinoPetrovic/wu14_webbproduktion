$(function(){
    // This function will always run directly when you go into the page.
    function loadThePage(){
        // Empty everyrhing and hide the formular.
        $(".categoryContainer").html("");
        $("#allCategories").html("");
        $(".addAsPage").hide();
        $(".addAsCategory").hide();

        // AJAX request to get data from category and show it on nav and as options in the <select> element.
        $.ajax ({
            url: "php/getdataCategory.php",
            type: "post",
            dataType: "json",
            success: function(data){
                console.log("get_category success: ", data);
                for(var i in data){
                    $(".categoryContainer").append(
                        "<li class='dropdown'><a href='#' class='dropdown-toggle' data-toggle='dropdown' role='button' aria-expanded='false'>" + data[i].title + "<span class='caret'></span></a><ul class='dropdown-menu pageContent' data-categoryID='" + data[i].category_id + "'role='menu'></ul></li>"
                        );
                    // calling a function after the categories will be displayed on menu.
                    getContentByCat(data[i].category_id);
                    $("#allCategories").append(
                        "<option data-categoryID='" + data[i].category_id + "'>" + data[i].title + "</option>");
                }
            },
            error: function(data){
                console.log("get_category error: ", data);
            }
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
		$(".addAsPage").slideDown(300);
        $(".addAsCategory").slideUp(300);
	});

    $(".buttonCategory").click(function(){
        $(".addAsCategory").slideDown(300);
        $(".addAsPage").slideUp(300);
    });

    // Slide up everything if you press the cancel button.
	$(".pageCancel").click(function(){
		$(".addAsPage").slideUp(300);
        $(".addAsCategory").slideUp(300);
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
});