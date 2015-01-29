$(function(){

	$(".pageFormular").hide();
		$(".buttonCategory").submit(function(){

		});

	$(".buttonPage").click(function(){
		$(".pageFormular").slideDown(300);
	});

	// $("").click(function(){});

	$(".pageCancel").click(function(){
		$(".pageFormular").slideUp(300);
	});

	$(".submitButton").submit(function(){
		var insertContent = {
			":title" : $(this).find("#titleValue").val(),
			":content" : $(this).find("#contentValue").val()
		};

		$.ajax({
			url: "php/store_content.php",
			type: "post",
			dataType: "json",
			data: {

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
