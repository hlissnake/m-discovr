/** Player 及 Zombie 的基类 */

var Line = Class.extend({
    init: function(id) {
		this.id	= id;
		this.lBox = null;
		this.rBox = null;
		
		this.wantL = LINE_WANT_L;
		
		this.isLive = false;
    },
	born: function( l, r) {
		this.isLive = true;
		this.lBox = l;
		this.rBox = r;
	},
	eventLoop: function() {
		var dL = distance(this.lBox, this.rBox) - this.wantL;
		
		if ( dL*dL > 16 ) {
			doHukeBoxes(this.lBox, this.rBox, dL);
		}
	},
	show: function() {
		this.box.show();
	},
	hide: function() {
		this.box.hide();
	}
});

function getLinePoolId() {
	for (var i=0; i < LINE_LIST_NUM; i++) {
		if (mm.lineList[i].isLive == false) {
			return i;
		}
	}                
	alert("line list none!");
	return LINE_LIST_NUM - 1;
}

function getBoxPoolId() {
	for (var i=0; i < BOX_LIST_NUM; i++) {
		if (mm.boxList[i].isLive == false) {
			return i;
		}
	}                
	alert("box list none!");
	return BOX_LIST_NUM - 1;
}