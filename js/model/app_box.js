/** Player 及 Zombie 的基类 */

var AppBox = Class.extend({
    init: function(id) {
		this.id	= id;
        this.x	= 480;
		this.y	= 320;
		this.dir = 10000;
		this.dirState = DIR_STATE_NONE;
		this.dirStateK	= DIR_STATE_ZOMBIE_K;
		this.v	= 0.0;
		this.a	= 0;
		this.box = null;
		this.isLive = false;
    },
	show: function() {
		this.box.show();
	},
	hide: function() {
		this.box.hide();
	}
});