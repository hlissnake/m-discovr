/** Player 及 Zombie 的基类 */

var AppBox = Class.extend({
    init: function(id) {
		this.id	= id;
        this.x	= 480;
		this.y	= 320;
		this.boxLines = new Array();
		
		this.dir = 10000 * 0;
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
		tmp_role_v = this.v * dTime;
		this.sx = tmp_role_v * Math.cos( this.dir/10000 );
		this.sy = tmp_role_v * Math.sin( this.dir/10000 );
		
		this.moveTo(this.x + this.sx, this.y + this.sy);
		this.v = 0;
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
		mm.addBoxes(this, 3);
	},
	setV: function( v ) {
		if ( this.onPress == false ) {
			this.v = v;
		}
	}
});         




function doAntialienBoxes( box1, box2 ) {

	var k = slopeRoles(box1, box2);
	
	box1.setV( K_V_ANTIALIEN );
	box2.setV( K_V_ANTIALIEN );
    box1.dir = k;
	box2.dir = ( k + 31416 ) % 62832;
	
	
	box1.antialienBox = null;
	box2.antialienBox = null;
}

function doHukeBoxes( box1, box2, dL ) {
	var k = slopeRoles(box1, box2);
	
	box1.setV( K_V_HUKE );
	box2.setV( K_V_HUKE );
	
	if ( dL > 0 ) {
		box1.dir = ( k + 31416 ) % 62832;
		box2.dir = k;
	}
	else {
		box1.dir = k;
		box2.dir = ( k + 31416 ) % 62832;
	}
    

	
	
}