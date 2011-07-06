/** Player 及 Zombie 的基类 */

var AppBox = Class.extend({
    init: function(id) {
		this.id	= id;
        this.x	= 480;
		this.y	= 320;
		this.boxLines = new Array();
		
		this.dir = 10000;
		this.v	= 0.0;
		this.a	= 0;
		this.box = null;
		this.isLive = false;
		this.isClick = false;
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
		this.isClick = false;
	},
	show: function() {
		this.box.show();
	},
	hide: function() {
		this.box.hide();
	},
	touchStart: function() {
		this.isClick = true;
		
		this.box.addClass("bg_white");
	},
	touchEnd: function() {
		if ( this.isClick == true ) {
			this.click();
		}
		this.isClick = false;
		
		 this.box.removeClass("bg_white");
	},
	click: function() {
		mm.addBoxes(this, 1)
	}
});