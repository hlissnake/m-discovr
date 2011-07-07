/** 日志类， 为log添加时间戳
 */

var Log = Class.extend({
    // init是构造函数
    init: function() {

    },
    log: function( str ) {
		str = this.addTime(str);
		this.showLog(str);
    },

	warn: function ( str ) {
		str = this.addTime(str);
		this.showLog(str);
	},

	err: function( str ) {
		str = this.addTime(str);
		this.showLog(str);
	},
	
	addTime: function ( str ) {
		var date = new Date();
		return "[" + date.getMinutes() + ":" 
			+ date.getSeconds() + ":" 
			+ date.getMilliseconds() + "]" + str +"|";
	},
	
	showLog:function( str ) {
		$("#log_list").prepend("<li>" + str + "</li>");
	}
	
	
});

$

var log = new Log();