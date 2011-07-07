/** Player 及 Zombie 的基类 */

var AppBox = Class.extend({
    init: function(id) {
		this.id	= id;
        this.x	= 480;
		this.y	= 320;
		this.boxLines = new Array();
		
		this.dir = 10000;
		this.v	= 0.0;

		this.box = null;
		this.isLive = false;
		this.isClick = false;
		this.onPress = false;
		
		this.antialienBox = null;
    },
	born: function(x, y) {
		this.isLive = true;
		boxCount ++;
		$("#app_box_div").prepend('<div class="app_box" id="box_' + this.id 
			+ '" style="top:250px; left:480px;">' + this.id 
			+ '</div>');
		this.box = $('#box_' + this.id);
		this.moveTo(x, y);
	},
	moveTo: function(x, y) {
		this.x = x;
		this.y = y;
		this.box.css("left",  x - BOX_SIZE/2);                
		this.box.css("top",  y - BOX_SIZE/2);

	},
	eventLoop: function() {
		var dTime = 10;
		this.vx0 = this.vx;
		this.vy0 = this.vy;
		
		this.vx = this.vx + this.ax * dTime;
		this.vy = this.vy + this.ay * dTime;
		
		this.sx = (this.vx0 + this.vx) / 2 * dTime;
		this.sy = (this.vy0 + this.vy) / 2 * dTime;
		
		this.moveTo(this.x + this.sx, this.y + this.sy);
		
	},
	show: function() {
		this.box.show();
	},
	hide: function() {
		this.box.hide();
	},
	touchStart: function() {
		this.isClick = true;
		this.onPress = true;
		
		this.box.addClass("bg_white");
	},
	touchEnd: function() {
		if ( this.isClick == true ) {
			this.click();
		}
		this.isClick = false;
		this.onPress = false;
		
		this.box.removeClass("bg_white");
	},
	click: function() {
		mm.addBoxes(this, 1);
	}
});         




function doAntialienBoxes( box1, box2 ) {
	if ( box1.x == box2.x) {
		box1.vx = 0;
	}
	else {
		var dx = 1 / (box1.x - box2.x);
		box1.vx = dx>0 ? K_A_ANTIALIEN : - K_A_ANTIALIEN ;
		box2.vx = dx<0 ? K_A_ANTIALIEN : - K_A_ANTIALIEN ;
	}
	if ( box1.y == box2.y) {
		box1.vy = 0;
	}
	else {
		var dy = 1 / (box1.y - box2.y);
		box1.vy = dy>0 ? K_A_ANTIALIEN : - K_A_ANTIALIEN ;
		box2.vy = dy<0 ? K_A_ANTIALIEN : - K_A_ANTIALIEN ;
	}
	

	
	
	box1.antialienBox = null;
	box2.antialienBox = null;
}