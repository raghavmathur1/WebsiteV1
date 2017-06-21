$(document).ready(function () {
	
	var left = (Math.floor(Math.random()*42) + 1)*30;
	var top = (Math.floor(Math.random()*20) + 1)*30;
	$(".food").css({"left": left +"px", "top": top+"px"})

	var points = 0;
	$(document).bind('keydown',function(e){
		x = $(".snake").attr("style")
		y = x.replace("left:", "") 
		z = y.replace("px;", "") 


		a = $(".snakecont").attr("style")
		b = a.replace("top:", "") 
		c = b.replace("px;", "") 

		if (e.keyCode == 37) {
			if ((z > 0)&&(z <= 1260)) {
				$(".snake").css({"left":"-=30"})
			}


		}

		if (e.keyCode == 39) {
			if ((z >= 0)&&(z<1260)) {
				$(".snake").css({"left":"+=30"})
			}
		}


		if (e.keyCode == 38) {
			if (c > 0) {
				$(".snakecont").css({"top":"-=30"})
			}
		}

		if (e.keyCode == 40) {
			if (c<570) {
				$(".snakecont").css({"top":"+=30"})
			}
		}
		

		var off1 = $(".snake").offset()
		var of1 = off1.left
		var o1 = off1.top
		var off2 = $(".food").offset()
		var of2 = off2.left
		var o2 = off2.top
		console.log(off1)
		console.log(off2)
		
		if ((of1 == of2)&&(o1==o2)) {
			var left = (Math.floor(Math.random()*42) + 1)*30;
			var top = (Math.floor(Math.random()*20) + 1)*30;
			$(".food").css({"left": left +"px", "top": top+"px"})
			points = points+1;
			$(".points").text(points)
			var le = (left - 30)+"px;"
			var to = top + "px;"
			$(".game").append('<div class="snakecont" style="top: '+ to +'> <div class="snake" id="snake" style="left:'+ le +'></div></div>')
		}
	})

})