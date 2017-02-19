$(document).ready(function(){

	faqComplete();
	carouselAplication();
	filterModalities();
	
});

var faqComplete = function(){
	$(".faq__see-all span").click(function(){
		$(".faq__doubts").slideDown( "slow", function() {
			$(this).css({
				"height": "auto",
				"overflow": "normal"
			});
			$(".faq__see-all span").css("display","none");
		});

	});	
}

var carouselAplication = function() {
	$('.mt-payment__carousel').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: true,
		arrows: false
	});
}

var filterModalities = function() {

	$(".avaliable-modalities__row-choose label").click(function(){
		var label_data_value = $(this).data('modalities');
		console.log(label_data_value);

		$('.modalities-box').css("display","block");

		var filter = $('.modalities-box').filter(function(){
			return $(this).data('result-md') !== label_data_value;
		}).css("display","none");

		var qtd_visible = $('.modalities-box').filter(function(){
			return $(this).data('result-md') === label_data_value;
		}).length;

		console.log("qtd boxes: "+qtd_visible);

		for (i=0; i < qtd_visible; i++ ) {
			console.log("loop:"+ i);
			
		}


	})
}