
$(function() {
	//屏蔽 mobile 默认行为
	document.addEventListener("touchstart", shieldDefault, false );
	document.addEventListener("touchmove", shieldDefault, false );
	document.addEventListener("touchend", shieldDefault, false );
	document.addEventListener("touchcancel", shieldDefault, false );
	// document.addEventListener("gesturestart", shieldDefault, false );
	// document.addEventListener("gesturechange", shieldDefault, false );
	// document.addEventListener("gestureend", shieldDefault, false );  
        

	$(".app_box").live('touchstart', function() {
		var id = $(this).html();
		mm.boxList[id].touchStart();
		
	});
	$(".app_box").live('touchmove', function( e ) {
		var id = $(this).html();
		boxTouchmove(id);
	});
	$(".app_box").live('touchend', function() {
		var id = $(this).html();
		mm.boxList[id].touchEnd();

	});
	
	$("#log_btn").click(function(){
		
	});
    
	$("#debug_btn").bind('touchstart', function() {
		mm.onDebug = mm.onDebug == true ? false:true;
	});
	$("#log_btn").bind('touchstart', function() {
		$("#log_list").toggle();
	});
	var fCanvas = document.getElementById("line_canvas");
	cx = fCanvas.getContext("2d");
	
	mm.start();
}); 

var cx = null;
                                                                  

function boxTouchmove( id ) {
	mm.boxList[id].moveTo(event.targetTouches[0].clientX,
		event.targetTouches[0].clientY);
}

function shieldDefault( e ) {
	e.preventDefault();
}           



