//Core

//Box Size
var youtubeBlockWidth = $('.youtube_block').width(); 
var youtubeBlockMargin = parseInt($('.youtube_block').css('margin-right')); 
var easingMethod = 'easeOutBack';
var boxSize = youtubeBlockWidth+youtubeBlockMargin;
var numberOfBox = $('.youtube_block').length;
var lastBoxPosition = numberOfBox*boxSize;

//Time 
var moveSpeed = 1000;
var displayTime = 3000;

//Set Default position
function setPosition() {
	for(i=0;i<numberOfBox;i++){
		var position = i*boxSize;
		if(position == 0) { position = 1;}
		$('.youtube_block').eq(i).css('left',position);
		console.log('setposition');
	}
}

//Move box
function moveBox() {
	var moveBox = 1;
	for(i=0;i<numberOfBox;i++){
		var leftPosition = parseInt($('.youtube_block').eq(i).css('left'));
		moveTo = leftPosition + 1 - (youtubeBlockWidth+youtubeBlockMargin)*moveBox;
		
		if(moveTo >= 0) {
			//other image
			$('.youtube_block').eq(i).animate({
				left: moveTo
			}, {
				duration: moveSpeed , easing: easingMethod
			});	
		}else {
			//first image
			//move to left
			$('.youtube_block').eq(i).animate({
				left: moveTo	
			}, {
				duration: moveSpeed/2 , easing: easingMethod
			});
			
			//move to last position
			$('.youtube_block').eq(i).animate({
				left: lastBoxPosition
			}, {
				duration: 0 , easing: easingMethod
			});
			
			//move to left
			$('.youtube_block').eq(i).animate({
				left: lastBoxPosition - (youtubeBlockWidth+youtubeBlockMargin)*moveBox
			}, {
				duration: moveSpeed/2 , easing: easingMethod
			});
		}	
	}
}

var callbacks = $.Callbacks();

//Set Position
callbacks.add(setPosition);
callbacks.fire();
callbacks.remove(setPosition);

setInterval(moveBox,displayTime);

//If position in negative value move to max 
