/** Player 及 Zombie 的基类 */

var GlobalManager = Class.extend({
    init: function(id) {
		this.boxList = new Array(50);
		this.lineList = new Array(50);
		
		for (i = 0; i < this.zombieList.length; i++) {
			var z = new Zombie(i);
			this.zombieList[i] = z;
		}
		
		this.boxList[0].box = $("#box_0");
    },
	addBox: function( parentBox, num ) {
		
	}
});  

var mm = new GlobalManager();

