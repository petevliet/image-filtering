$(document).ready(function() {

	var allHomes = $(".image-container").find(".home");

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

	$("input").on("click", function(){
		if ($("input:checked").length === 0){
			$(allHomes).show();
		} else {
			$(".home").hide();
			var checkedBoxes = [];
			$("input:checked").each(function(){
				checkedBoxes.push($(this).attr("id"));
			});
			var array2 = [];
			$(checkedBoxes).each(function(i, val){
				if(val === "1"){
					array2.push([0, 50000]);
				} else if(val === "2"){
					array2.push([50000, 100000]);
				} else if(val === "3"){
					array2.push([100000, 200000]);
				} else if(val === "4"){
					array2.push([200000, 300000]);
				} else if(val === "5"){
					array2.push([300000, 500000]);
				} else if(val === "6"){
					array2.push([500000, 1000000]);
				}
			});
			$(allHomes).each(function(i, elem){
				for(i = 0; i < array2.length; i++){
					if($(elem).data('price') > array2[i][0] - 1 && $(elem).data('price') < array2[i][1] + 1){
						$(elem).show();
						console.log(elem);
					}
				}
			});
		}
	});

});
