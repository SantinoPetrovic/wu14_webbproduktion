$(function(){
    pushPopListeners();

    $(".newCategory").click(function(){
        $(".allcategories").slideUp(600);
        $(".addAsCategory").slideDown(600);
    });

    $(".newPage").click(function(){
        $(".allpages").slideUp(600);
        $(".addAsPage").slideDown(600);
    });

    // When you're done with your formular and you press the submit button, the page will be saved in DB.
	$(".submitPage").click(function(){
        // the variable filename will remove the path of the value in image but still keep the actual name of the file.
        var filename = $('#file').val().replace(/C:\\fakepath\\/i, '')
		var insertContent = {
			":title" : $("#titleValue").val(),
            ":section" : $("#sectionValue").val(),
			":content" : $("#contentValue").val(),
            ":image_name" : filename,
            ":category_id" : $("#pageSelectCategory option:selected").attr('data-categoryID')
		};
        console.log(filename);
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
                reloadTheHeader();
                loadThePage();
                $("#greetings").slideDown(600);

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
                reloadTheHeader();
            },
            error: function(data){
                console.log("store_category error: ", data);
            }
            });
        return false;
    });
    // when done editing category and pressed save, it will overwrite the value in data with new data in DB.
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
                reloadTheHeader();
            },
            error: function(data){
                console.log("store_category error: ", data);
            }
            });
    });

    // when done editing page and pressed save, it will overwrite the value in data with new data in DB.
    $(".savePage").click(function(){
        var editedFilename = $('#editFile').val().replace(/C:\\fakepath\\/i, '')
        var insertEditedPage = {
            ":title" : $("#editedPage").val(),
            ":section" : $("#editSectionValue").val(),
            ":content" : $("#editContentValue").val(),
            ":image_name" : editedFilename,
            ":image_id" : $("#dataPage").attr('data-imageID'),
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
                alert('Page saved!');
                console.log("store_category success: ", data);
                loadThePage();
                reloadTheHeader();
            },
            error: function(data){
                console.log("store_category error: ", data);
            }
        });
    });
    // when pressing delete button and confirm the delete, the category will be deleted in DB.
    $(".deleteCategory").click(function(){
    if(confirm('Are you sure you want to delete the category and all its pages?')) {
        var deleteCategory = {
            ":category_id" : $("#editedCategory").attr('data-categoriesID')
        };
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
                reloadTheHeader();
            },
            error: function(data){
                console.log("delete category error: ", data);
            }
        });
    }
    });
    // when pressing delete button and confirm the delete, the page will be deleted in DB.
    $(".deletePage").click(function(){
    if(confirm('Are you sure you want to delete the page?')) {
        var deletePage = {
            ":page_id" : $("#dataPage").attr('data-pagesID')
        };
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
                reloadTheHeader();
            },
            error: function(data){
                console.log("delete page error: ", data);
            }
        });
    }
    });

});