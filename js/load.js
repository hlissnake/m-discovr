
$(function() {
	//屏蔽 mobile 默认行为
	document.addEventListener("touchstart", shieldDefault, false );
	document.addEventListener("touchmove", shieldDefault, false );
	document.addEventListener("touchend", shieldDefault, false );
	document.addEventListener("touchcancel", shieldDefault, false );
	document.addEventListener("gesturestart", shieldDefault, false );
	document.addEventListener("gesturechange", shieldDefault, false );
	document.addEventListener("gestureend", shieldDefault, false );
        

	$(".app_box").live('touchstart', function() {
		$(this).addClass("bg_white");
	});
	$(".app_box").live('touchmove', function( e ) {
		var id = $(this).html();
		boxTouchmove(id);
	});
	$(".app_box").live('touchend', function() {
		$(this).removeClass("bg_white");
	});
});                                                                   

function boxTouchmove( id ) {
	$("#box_" + id).css("left",  event.targetTouches[0].clientX - BOX_SIZE/2);                
	$("#box_" + id).css("top",  event.targetTouches[0].clientY - BOX_SIZE/2);
}

function shieldDefault( e ) {
	e.preventDefault();
}           



var BOX_SIZE = 66;

