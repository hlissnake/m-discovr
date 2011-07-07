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
		this.onDebug = true;
		
    },
	/** 开始游戏 */
    start: function() {
        
        /** 建立事件循环和绘图循环 */
        this.eventIntervalId = setInterval(this.eventLoop, CPS_TIME);
        this.drawIntervalId = setInterval(this.drawLoop, FPS_TIME);

		this.newGame();
        
		log.log("start...");
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
		for(var i=0; i < BOX_LIST_NUM - 1; i++) {
			if ( mm.boxList[i].isLive == false 
				|| mm.boxList[i].antialienBox != null) {
				continue;
			}            
			for (var j = i+1; j < BOX_LIST_NUM; j++) {
				if ( mm.boxList[j].isLive == false ) {
					continue;
				}
				if ( isAntialienBoxes( mm.boxList[i], mm.boxList[j] ) ) {
					mm.boxList[i].antialienBox = mm.boxList[j];
					mm.boxList[j].antialienBox = mm.boxList[i];
				}
			}
		}
		
		for(var i=0; i < BOX_LIST_NUM - 1; i++) {
			if ( mm.boxList[i].isLive == false ) {
				continue;
			}            
			if ( mm.boxList[i].antialienBox != null ) {
				doAntialienBoxes(mm.boxList[i], mm.boxList[i].antialienBox);
			}
			mm.boxList[i].eventLoop();
		}
		//处理排斥
		
		
		
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

		if( mm.onDebug == true ) {
			cx.strokeStyle = HSLA_ANTIALIEN;
	        cx.beginPath();
			for (var i = 0; i < BOX_LIST_NUM; i++) {
				if ( mm.boxList[i].isLive == true ) {
					cx.moveTo(mm.boxList[i].x + RADIUS_ANTIALIEN, mm.boxList[i].y);
					cx.arc(mm.boxList[i].x, mm.boxList[i].y, RADIUS_ANTIALIEN, 0, Math.PI*2, true );
				}

			}
			cx.closePath();
	        cx.stroke();
		}
		
		cx.restore();
	}
});  

var mm = new GlobalManager();
var boxCount = 0;
var lineCount = 0;

