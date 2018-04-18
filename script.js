$(document).ready(function() {
    var danmu = ["测试弹幕111",
    "222测试弹幕",
    "33333333",
    "ABCDEFG",
    "HIJKLMN",
    "CESHIDANMU"];
	$("#bt1").click(function(){
        var text = $("#input").val();
		danmu.push(text);
        $("#input").val('');
        var textObj = $("<div>" + text + "</div>");
	    $(".show").append(textObj);
	    moveObj(textObj);
		getAndRun();
	});
	$("#bt2").click(function(){
        danmu = [];
        $(".show").empty();
	});
	
	var moveObj = function(obj){
		var left = $("#main").width() - obj.width();
		var top = ($("#main").height() - 20) * Math.random();
		obj.css({
	      left: left,
	      top: top,
	      color: getRandomColor()
        });
        var time = 10000 + 5000 * Math.random();
		obj.animate({
	      left: 0
	    }, time, function() {
	      obj.remove();
	    });
	}
	
	var getRandomColor = function(){
		var color = []
		for(var i=0;i<3;i++){
			color.push(parseInt(256*Math.random()));
		}
		var retColor = "rgb("+color[0]+","+color[1]+","+color[2]+")";
		return retColor;
	}
	
	var getAndRun = function() {
	  if (danmu.length > 0) {
	    var n = Math.floor(Math.random() * danmu.length + 1) - 1;
	    var textObj = $("<div>" + danmu[n] + "</div>");
	    $(".show").append(textObj);
	    moveObj(textObj);
	  }
		setTimeout(getAndRun, 3000);
	}
});