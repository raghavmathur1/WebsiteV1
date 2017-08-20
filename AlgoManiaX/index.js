


$("#About").click(function(){
	var y = $(".about").offset().top-50;
	$('body').animate({scrollTop:y},1000);
});

$("#Home").click(function(){
	var y = $(".home").offset().top;
	$('body').animate({scrollTop:y},1000);
});

$("#Members").click(function(){
	var y = $(".members").offset().top-100;
	$('body').animate({scrollTop:y},1000);
});

$("#Achievements").click(function(){
	var y = $(".achievements").offset().top-100;
	$('body').animate({scrollTop:y},1000);
});

$("#Events").click(function(){
	var y = $(".events").offset().top-100;
	$('body').animate({scrollTop:y},1000);
});


var scroll = 0;
$(document).scroll(function() { 
	scroll = $(this).scrollTop();
	if(scroll > 500) {
		$(".topbar").css({"background-color":"#0f0f0f"})
	} else {
		$(".topbar").css({"background-color":"transparent"})

	}


	if(scroll > 1000) {
			$(".block").css({"transform":"scale(1)"})
	}


	if(scroll > 1300) {
			$(".achs").addClass("animated")
			$(".achs").addClass("fadeInUp")
	}

	if(scroll > 2000) {
			$(".eve").addClass("animated")
			$(".eve").addClass("fadeInUp")
	}
	
});

var men = 0

$("#Menu").click(function () {
	if (men == 0) {
		$(".topbar").css({"height":"450px"})
		$(".rightlist").css({"margin-top":"0px"})
		men = 1;
	}else{
		$(".topbar").css({"height":"80px"})
		$(".rightlist").css({"margin-top":"-400px"})
		men = 0;
	}
})

toplist = ["Home", "About" ,"Members", "Achievements","Events" ,"Contact Us", "Menu"]
$(".container").append('<div class="topbar"><div class="rightlist"></div></div>')
for (var i = 0; i < toplist.length; i++) {
	$(".rightlist").append('<div class="list" id="'+ toplist[i] +'">'+ toplist[i] +'</div>')
	
}

members = ["lorem", "ipsum" ,"dolor", "lorema", "ipsum", "lorema", "ipsum" ,"dolor", ]
for (var x = 0; x < members.length; x++) {
	$(".memlist").append('<div class="block mem'+ x +'"><div class="photo" style="background:url(&#39'+members[x]+'.png&#39);"></div><div class="memtext">'+ members[x] +'</div>')
}	