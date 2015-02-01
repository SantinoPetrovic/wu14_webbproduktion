$(function(){
    $.ajax ({
        url: "php/getdata.php",
        type: "post",
        dataType: "json",
        success: function(data){
            console.log("get_content success: ", data);
            $(".saken").append("<h1>" + data[0].title + "</h1>");
        },
        error: function(data){
            console.log("get_content error: ", data);
        }
    });

	$(".pageFormular").hide();
		$(".buttonCategory").submit(function(){
			return false;
		});

	$(".buttonPage").click(function(){
		$(".pageFormular").slideDown(300);
	});

	// $("").click(function(){});

	$(".pageCancel").click(function(){
		$(".pageFormular").slideUp(300);
	});

	$(".submitButton").click(function(){
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
});
