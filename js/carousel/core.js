// Youtube Carousel 
var Carousel_model = Backbone.Model.extend({
	
	defaults: {
		slide_display: 5,
		slide_speed: 10000, //sec
		slide_stop: 5, //sec
		slide_delay: 5000,
		block_width : parseInt($('.youtube_block').css('width'))
	} ,

	initialize: function() { 
	
		/*
		for(i=0;i<this.get('block_width');i++) {
			$('.youtube_block').eq(0).css('margin-left',-i);	
		}
		*/
	
		//$('.youtube_block').eq(2).addClass('selected');		
		
		//$('.youtube_block').eq(4).delay(this.get('slide_speed')).fadeOut(1000);

	} ,
	
	move: function() {
		
	}
	
	//$('.youtube_block').eq(2).addClass('selected');
});

var Carousel_view = Backbone.View.extend({

	model: Carousel_model ,
	
	initialize: function() {
	
		$('.youtube_block').animate(
			{right: Carousel_model.get('block_width') },Carousel_model.get('slide_speed'),'linear' ,
			function() {	
		});

	},
	
});


var youtube_carousel = new Carousel_view;

