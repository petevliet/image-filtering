$(document).ready(function() {
	console.log("The document is ready!");
	$(".dark").on("click", function(){
		$('body').css('background', 'url(img/dark_wood.png)');
	});

	$(".light").on("click", function(){
		$('body').css('background', 'url(img/tileable_wood_texture.png)');
	});

});
