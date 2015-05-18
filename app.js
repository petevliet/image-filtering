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

	$(".low").on("click", function(e){
		e.preventDefault();
		var houses = $(".image-container");
		$(houses).find(".home").sort(function(a, b){
			return $(a).data('price') - $(b).data('price');
		}).appendTo(houses);
	});

	$(".high").on("click", function(e){
		e.preventDefault();
		var houses = $(".image-container");
		$(houses).find(".home").sort(function(a, b){
			return $(b).data('price') - $(a).data('price');
		}).appendTo(houses);
	});

	$("#1").on("click", function(){
		$(".home").filter(function(){
			return $(this).data('price') > 50000;
		}).remove();
	});

	$("#2").on("click", function(){
		$(".home").filter(function(){
			return $(this).data('price') > 100000;
		}).remove();
		$(".home").filter(function(){
			return $(this).data('price') < 50000;
		}).remove();
	});

	$("#3").on("click", function(){
		$(".home").filter(function(){
			return $(this).data('price') > 200000;
		}).remove();
		$(".home").filter(function(){
			return $(this).data('price') < 100000;
		}).remove();
	});

	$("#4").on("click", function(){
		$(".home").filter(function(){
			return $(this).data('price') > 300000;
		}).remove();
		$(".home").filter(function(){
			return $(this).data('price') < 200000;
		}).remove();
	});

	$("#5").on("click", function(){
		$(".home").filter(function(){
			return $(this).data('price') > 500000;
		}).remove();
		$(".home").filter(function(){
			return $(this).data('price') < 300000;
		}).remove();
	});

	$("#6").on("click", function(){
		$(".home").filter(function(){
			return $(this).data('price') > 1000000;
		}).remove();
		$(".home").filter(function(){
			return $(this).data('price') < 500000;
		}).remove();
	});


});
