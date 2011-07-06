/** Player 及 Zombie 的基类 */

var GlobalManager = Class.extend({
    init: function(id) {
		this.boxList = new Array(50);
		this.lineList = new Array(50);
		
		for (var i = 0; i < BOX_LIST_NUM; i++) {
			var box = new AppBox(i);
			this.boxList[i] = box;
			var line = new Line(i);
			this.lineList[i] = line;
		}
		
    },
	/** 开始游戏 */
    start: function() {
        
        /** 建立事件循环和绘图循环 */
        this.eventIntervalId = setInterval(this.eventLoop, CPS_TIME);
        this.drawIntervalId = setInterval(this.drawLoop, FPS_TIME);

		this.newGame();

    },
	newGame: function() {
		mm.boxList[0].born(480,320);        
	},
	addBoxes: function( parentBox, num ) { 
		for (var i=0; i< num; i ++ ) {
			var newBox = this.boxList[ getBoxPoolId() ];
			newBox.born(parentBox.x, parentBox.y - 10);
			this.lineList[ getLinePoolId() ].born(parentBox, newBox);
		}            

	},
	eventLoop: function() {
		
	},
	drawLoop: function() {
		cx.clearRect(0, 0, 1024, 1024);
        cx.save();
		
		cx.strokeStyle = HSLA_LINE;
        cx.beginPath();
		for (var i = 0; i < LINE_LIST_NUM; i++) {
			if ( mm.lineList[i].isLive == true ) {
				var lBox = mm.lineList[i].lBox;
				var rBox = mm.lineList[i].rBox;
	            cx.moveTo(lBox.x, lBox.y);
				cx.lineTo(rBox.x, rBox.y);
			}
			
		}
		cx.closePath();
        cx.stroke();
		
		cx.restore();
	}
});  

var mm = new GlobalManager();
var boxCount = 0;
var lineCount = 0;

