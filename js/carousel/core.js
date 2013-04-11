//Core
var displayBox = 5;
var focusBoxIndex = Math.round(displayBox/2)-1;
$('.youtube_block').eq(focusBoxIndex).addClass('focus');
$('.play_img').hide();

$('.youtube_block').eq(focusBoxIndex)
	.append('<div class="play_img"><img src="img/play-vdo.png" alt="" /></div>');


//Box Size
var youtubeBlockWidth = $('.youtube_block').width();
var youtubeBlockHeight = $('.youtube_block').height(); 
var youtubeBlockMargin = parseInt($('.youtube_block').css('margin-right')); 
var youtubeBlockTop = $('.youtube_block').css('top');
var youtubeFocusWidth = $('.youtube_block.focus').width();
var youtubeFocusHeight = $('.youtube_block.focus').height();
var youtubeFocusTop = $('.youtube_block.focus').css('top');

//Time 
var moveSpeedDefault = 1000;
var displayTime = 2500;
var easingMethod = 'easeOutBack';

//System Var
var boxSize = youtubeBlockWidth+youtubeBlockMargin;
var numberOfBox = $('.youtube_block').length;
var lastBoxPosition = ((numberOfBox-1)*boxSize)+youtubeFocusWidth;

//Callback
var callbacks = $.Callbacks();
callbacks.add(moveBox);

//Set Default position
function setPosition() {
	for(i=0;i<numberOfBox;i++){
		var position = i*boxSize;
		if(i<=focusBoxIndex) { 
			$('.youtube_block').eq(i).css('left',position);	
		}else {
			$('.youtube_block').eq(i).css('left',(position+youtubeFocusWidth+youtubeBlockMargin)-boxSize);	
		}
	}
}//setPosition

//Move box
function moveBox(time) {
	if(time != null) {
		var moveSpeed = time;
	}else {
		moveSpeed = moveSpeedDefault;
	}
	if($('.youtube_block:animated').length != 0) {
		return;
	}
	var moveBox = 1;
	var moveTo = 0;
	for(i=0;i<numberOfBox;i++){
		var leftPosition = parseInt($('.youtube_block').eq(i).css('left'));
		var position = i*boxSize;
		var positionAfterMiddle = (position+youtubeFocusWidth+youtubeBlockMargin)-boxSize;
		var moveTo = leftPosition - (youtubeBlockWidth+youtubeBlockMargin)*moveBox;
		
		if(moveTo < 0)  { //first image
			
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
			
			//move from last
			$('.youtube_block').eq(i).animate({
				left: lastBoxPosition - (boxSize-youtubeBlockMargin)
			}, {
				duration: moveSpeed/2 , easing: easingMethod
			});
			
		} else if(moveTo >= 0 && moveTo < boxSize*(focusBoxIndex-1)) {
		
			//Before Middle box
			$('.youtube_block').eq(i).animate({
				left: moveTo
			}, {
				duration: moveSpeed , easing: easingMethod
			});
			
		} else if(moveTo > (boxSize*(focusBoxIndex))+youtubeFocusWidth) {
		
			//After Middle box
			$('.youtube_block').eq(i).animate({
				left: moveTo 
			}, {
				duration: moveSpeed , easing: easingMethod
			});
		} else if(moveTo >= 0 && moveTo == boxSize*(focusBoxIndex-1) ) {
			
			//Middle move
			$('.youtube_block').eq(i).animate({
				left: moveTo ,
				top: youtubeBlockTop , 
				width: youtubeBlockWidth ,
				height : youtubeBlockHeight
			},
				moveSpeed , easingMethod ,
				function() {
					$(this).removeClass('focus');
					$(this).find('.play_img').remove();
					$(this).children('iframe').remove();
				}
			);
		} else if(moveTo == 723) {
			
			//Move to middle
			$('.youtube_block').eq(i).children('.thumnail_image').children('img').hide();
			$('.youtube_block').eq(i).children('.description').hide();
			
			$('.youtube_block').eq(i).animate({
				left: boxSize*(focusBoxIndex) ,
				top: youtubeFocusTop , 
				width: youtubeFocusWidth ,
				height : youtubeFocusHeight
			} ,
				moveSpeed , easingMethod ,
				function() {
					$(this).addClass('focus');
					$(this).children('.thumnail_image').children('img').fadeIn();
					$(this).children('.description').fadeIn();
					$(this).append('<div class="play_img"><img src="img/play-vdo.png" alt="" /></div>');
				} 
			);
		}
	}//End for
}//moveBox


//Move box
function moveBoxToRight(time) {
	if(time != null) {
		var moveSpeed = time;
	}else {
		moveSpeed = moveSpeedDefault;
	}
	if($('.youtube_block:animated').length != 0) {
		return;
	}
	var moveBox = 1;
	var moveTo = 0;
	for(i=0;i<numberOfBox;i++){
		var leftPosition = parseInt($('.youtube_block').eq(i).css('left'));
		var position = i*boxSize;
		var positionAfterMiddle = (position+youtubeFocusWidth+youtubeBlockMargin)-boxSize;
		var moveTo = leftPosition + (youtubeBlockWidth+youtubeBlockMargin)*moveBox;
		console.log(moveTo);
		if(moveTo > 1129)  { //last image
			
			//move to left
			$('.youtube_block').eq(i).animate({
				left: moveTo	
			}, {
				duration: moveSpeed/2 , easing: easingMethod
			});
			
			//move to negative position
			$('.youtube_block').eq(i).animate({
				left: -boxSize
			}, {
				duration: 0 , easing: easingMethod
			});
			
			//move from negative
			$('.youtube_block').eq(i).animate({
				left: 0
			}, {
				duration: moveSpeed/2 , easing: easingMethod
			});
			
		} else if(moveTo > 0 && moveTo < 406) {
			//Before Middle box
			$('.youtube_block').eq(i).animate({
				left: moveTo
			}, {
				duration: moveSpeed , easing: easingMethod
			});
			
		} else if(moveTo > 406 && moveTo < 1332  && moveTo != 609) {
			//Before Middle box
			$('.youtube_block').eq(i).animate({
				left: moveTo
			}, {
				duration: moveSpeed , easing: easingMethod
			});
			
		} else if(moveTo >= 0 && moveTo == boxSize*(focusBoxIndex+1) ) {
			
			//Middle move
			$('.youtube_block').eq(i).animate({
				left: 926 ,
				top: youtubeBlockTop , 
				width: youtubeBlockWidth ,
				height : youtubeBlockHeight
			},
				moveSpeed , easingMethod ,
				function() {
					$(this).removeClass('focus');
					$(this).find('.play_img').remove();
					$(this).children('iframe').remove();
				}
			);
		} else if(moveTo == 406) {
			
			//Move to middle
			$('.youtube_block').eq(i).children('.thumnail_image').children('img').hide();
			$('.youtube_block').eq(i).children('.description').hide();
			
			$('.youtube_block').eq(i).animate({
				left: boxSize*(focusBoxIndex) ,
				top: youtubeFocusTop , 
				width: youtubeFocusWidth ,
				height : youtubeFocusHeight
			} ,
				moveSpeed , easingMethod ,
				function() {
					$(this).addClass('focus');
					$(this).children('.thumnail_image').children('img').fadeIn();
					$(this).children('.description').fadeIn();
					$(this).append('<div class="play_img"><img src="img/play-vdo.png" alt="" /></div>');
				} 
			);
		}
	}//End for
}//moveBoxToRight

setPosition();

function start() {
	callbacks.fire();
}

function loop(current,limit) {
	var current = current;
	moveBox(500);
	current++;
	if(current > limit) {
		return;
	}else {
		setTimeout( function() {
			loop(current,limit);
		} , 800);
	}
}

function loopToRigth(current,limit) {
	var current = current;
	moveBoxToRight(500);
	current++;
	if(current > limit) {
		return;
	}else {
		setTimeout( function() {
			loopToRigth(current,limit);
		} , 800);
	}
}

$('.youtube_block').on("click", function(){
	var position =  parseInt($(this).css('left'));
	var currentBoxIndex = $(this).index('.youtube_block');
	if(position == boxSize*(focusBoxIndex) && $('.youtube_block iframe').length == 0 ) {
		var youtubeLink = $(this).children('.youtube_link').html();
		youtubeLink = youtubeLink.replace('watch?v=','embed/');
		$(this).append(
			'<iframe width="'+youtubeFocusWidth+'" height="'+youtubeFocusHeight+'"'+
			'src="'+youtubeLink+'" frameborder="0" allowfullscreen></iframe>'
		);
		callbacks.remove(moveBox);
	} else if($('.youtube_block:animated').length == 0) {
		callbacks.remove(moveBox);
		var currentBoxPosition = parseInt($(this).css('left'));
		if( currentBoxPosition == 926){
			moveBox(500);
		}else if( currentBoxPosition == 1129){
			loop(0,1);
		}else if( currentBoxPosition == 0){
			loopToRigth(0,1);
		}else if( currentBoxPosition == 203){
			moveBoxToRight(500);
		}
	}
	
});

//setInterval(start,displayTime);

//If position in negative value move to max 
