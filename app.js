$(document).ready(function() {
	console.log("The document is ready!");
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
	//
	// $("#1").on("click", function(){
	// 	$(".home").filter(function(){
	// 		return $(this).data('price') > 50000;
	// 	}).remove();
	// });
	//
	// $("#2").on("click", function(){
	// 	$(".home").filter(function(){
	// 		return $(this).data('price') > 100000;
	// 	}).remove();
	// 	$(".home").filter(function(){
	// 		return $(this).data('price') < 50000;
	// 	}).remove();
	// });
	//
	// $("#3").on("click", function(){
	// 	$(".home").filter(function(){
	// 		return $(this).data('price') > 200000;
	// 	}).remove();
	// 	$(".home").filter(function(){
	// 		return $(this).data('price') < 100000;
	// 	}).remove();
	// });
	//
	// $("#4").on("click", function(){
	// 	$(".home").filter(function(){
	// 		return $(this).data('price') > 300000;
	// 	}).remove();
	// 	$(".home").filter(function(){
	// 		return $(this).data('price') < 200000;
	// 	}).remove();
	// });
	//
	// $("#5").on("click", function(){
	// 	$(".home").filter(function(){
	// 		return $(this).data('price') > 500000;
	// 	}).remove();
	// 	$(".home").filter(function(){
	// 		return $(this).data('price') < 300000;
	// 	}).remove();
	// });
	//
	// $("#6").on("click", function(){
	// 	$(".home").filter(function(){
	// 		return $(this).data('price') > 1000000;
	// 	}).remove();
	// 	$(".home").filter(function(){
	// 		return $(this).data('price') < 500000;
	// 	}).remove();
	// });

	$("input").on("click", function(){
		// $(".image-container").remove(".home");
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

	function houseFilter(array){
		// var last = array.length - 1;
		var isInRange = [];
		$(allHomes).each(function(i, home){
			for(i = 0; i < array.length; i++){
				if($(home).data('price') > array[i][0] && $(home).data('price') < array[i][1]){
					isInRange.push(home);
				}
				return isInRange;
			}
		});
		return isInRange;
		// 	$(allHomes).each(function(index, elem){
		// 		if($(elem).data('price') < val[0] || $(elem).data('price') > val[1]){
		// 			isInRange.push(elem);
		// 		}
		// 	});
		// 	return isInRange;
			// $(".home").filter(function(){
			// 	return $(this).data('price') < array[0];
			// }).remove();
			// $(".home").filter(function(){
			// 	return $(this).data('price') > array[last];
			// }).remove();
	}
});
