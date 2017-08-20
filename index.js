$("button").click(function () {
	$(".projects").css({"height":"100%"})
	setInterval(function () {
	$(".projcontain").css({"width":"100%"})
		
	}, 1000)
})

for (var i = 1; i < 10; i++) {
	$(".projcontain").append("<div class='imag' style='background-image: url(s"+ i +".png) ;'></div>")
	
}


