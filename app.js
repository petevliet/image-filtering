$(document).ready(function() {
	console.log("The document is ready!");
	$(".dark").on("click", function(){
		$('body').css('background', 'url(img/dark_wood.png)');
	});

	$(".light").on("click", function(){
		$('body').css('background', 'url(img/tileable_wood_texture.png)');
	});

	$(".forest").on("click", function(){
		$('body').css('background', 'url(img/forest.jpg)');
		$('body').css('background-size', 'cover');
	});

	$(".low").on("click", function(){
		var houses = $(".image-container");
		$(houses).find(".home").sort(function(a, b){
			return $(a).data('price') - $(b).data('price');
		}).appendTo(houses);
	});

	$(".high").on("click", function(){
		var houses = $(".image-container");
		$(houses).find(".home").sort(function(a, b){
			return $(b).data('price') - $(a).data('price');
		}).appendTo(houses);
	});

});
