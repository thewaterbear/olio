$(document).ready(function() {
 
 	//these images are not optimized, mad slow
	var imageArray = [
		{img: 'blocking.jpg', type:"wide", y:'100%'},
		{img: 'lotus.gif', type:"long"},
		{img: 'advent.png'},
		{img: 'glitch.png'},
		{img: 'plus2.png'},
		{img: 'epor4k.jpg', type:"wide",y:'50%'},
		{img: 'waterbeaconfull.jpg', type:"long"},
		{img: 'storm_hd.jpg'},
		{img: 'starfallloop.gif'},
		{img: 'cloudrise5.png'},
		{img: 'hardreset.png'},
		{img: 'fallen.png'},
		{img: 'week2.jpg', type:"wide",y:'100%'},
		{img: 'escape_velocity.gif'},
		{img: 'up_sm.gif', type:"long"},
		{img: 'coolColorMix.png', type:"long"},
		{img: 'humanbotreflection.jpg'},
		{img: 'mt.jpg', type:"wide",y:'90%'},
		{img: 'sunsetWhales.png', type:"long"},
		{img: 'island.gif'},
		{img: 'bots.png'},
		{img: 'gc2.jpg', type:"wide",y:'100%'},
		{img: 'phase.gif'},
	];

	var blocksPerRow = 3;
	var $blockBase = $("<div class='block'></div>");
	var allBlocks = "";
	var idx = 0; //index for images array, not blocks
	var fullCount = 0;
	var baseURL = "http://dl.dropboxusercontent.com/u/255297/portfolio/";
	for(var i = 0; i < imageArray.length; i++) {
		fullCount++;
		if(imageArray[i].type == "long" || imageArray[i].type == "wide") {
			fullCount++;
		} 
	}
	var gridCheck = new Array(fullCount);
	gridCheck.fill(true);


	//builds the grid
	for(var i = 0; i < fullCount; i++) {
	   if(gridCheck[i]==true) {
		   $block = $blockBase.clone(true);
		   $($block).css('background-image', 'url( '+baseURL+imageArray[idx].img+')');
		   if(imageArray[idx].type) {
		   	$($block).html('<div class="'+imageArray[idx].type+'"></div>');
		   	$($block).children().css('background-image', 'url( '+baseURL+imageArray[idx].img+')');
		   	$($block).children().css('background-position-y', imageArray[idx].y);
		   	if(imageArray[idx].type == "wide") {
				gridCheck[i+1] = false;
		   	}
		   	if(imageArray[idx].type == "long") {
		   		gridCheck[i+blocksPerRow] = false;
		   	}
		   }
		   $(".grid").append($block);
		   idx++;
		} else {
		   $block = $blockBase.clone(true);
		   $block.addClass('spacer');
		   $(".grid").append($block);
		   // allBlocks += $block.html();
		}
	}

	//Do this all in 1 HTML() call for performance

	//row wrap for future responsiveness? Is this needed?	
	// var divs = $(".block");
	// for(var i = 0; i < imageArray.length; i+=blocksPerRow) {
	//    divs.slice(i, i+blocksPerRow).wrapAll("<div class='row'></div>");
	// }


});




function chng() {
	$(".wide").toggleClass("blockcut_w");
	$(".long").toggleClass("blockcut_l");
}

