$(function(){

    function loadThePage(){
        $(".categoryContainer").html("");
        $("#allCategories").html("");
        $(".addAsPage").hide();
        $(".addAsCategory").hide();
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
                    getContentByCat(data[i].category_id);
                    $("#allCategories").append(
                        "<option data-categoryID='" + data[i].category_id + "'>" + data[i].title + "</option>");
                            // console.log($("#catId9").val());
                    // console.log(data[i].title);
                    console.log(data[i].category_id);
                }
            },
            error: function(data){
                console.log("get_category error: ", data);
            }
        });
    }

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
    
    loadThePage();
	$(".buttonPage").click(function(){
		$(".addAsPage").slideDown(300);
        $(".addAsCategory").slideUp(300);
	});

    $(".buttonCategory").click(function(){
        $(".addAsCategory").slideDown(300);
        $(".addAsPage").slideUp(300);
    });


	$(".pageCancel").click(function(){
		$(".addAsPage").slideUp(300);
        $(".addAsCategory").slideUp(300);
	});

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