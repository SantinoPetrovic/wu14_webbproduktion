$(function(){
    $(".addAsPage").hide();
    $(".addAsCategory").hide();
    $.ajax ({
        url: "php/getdataCategory.php",
        type: "post",
        dataType: "json",
        success: function(data){
            console.log("get_category success: ", data);
            // $("h1").html(data[0].title);
            for(var i in data){
                $(".categoryContainer").append(
                    "<li class='dropdown'><a href='#' class='dropdown-toggle' data-toggle='dropdown' role='button' aria-expanded='false'>" + data[i].title + "<span class='caret'></span></a><ul class='dropdown-menu pageContent' role='menu'></ul></li>"
                    );
                // console.log(data[i].title);
            }
        },
        error: function(data){
            console.log("get_category error: ", data);
        }
    });

    $.ajax ({
        url: "php/getdata.php",
        type: "post",
        dataType: "json",
        success: function(data){
            console.log("get_page success: ", data);
            for(var j in data){
                $(".pageContent").append("<li><a href='#'>" + data[j].title + "</a></li>"
                    );
            }
        },
        error: function(data){
            console.log("get_page error: ", data);
        }
    });

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
			":content" : $("#contentValue").val()
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
            },
            error: function(data){
                console.log("store_category error: ", data);
            }
            });
        return false;
    });
});
