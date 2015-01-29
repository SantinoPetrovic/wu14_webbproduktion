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
});