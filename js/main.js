$(function(){

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
			url: "php/data.php",
			type: "post",
			dataType: "json",
			data: {
				"insertContent" : insertContent
			},
			success: function(data){
				console.log("store_content success: ", data);
			},
			error: function(data){
				console.log("store_content error: ", data);
			}
		});
		return false;
	});
});
