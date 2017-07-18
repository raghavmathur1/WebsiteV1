toplist = ["Home", "About" ,"Members", "Achievements","Events" ,"Contact Us"]
$(".container").append('<div class="topbar"><div class="rightlist"></div></div>')
for (var i = 0; i < toplist.length; i++) {
	$(".rightlist").append('<div class="list" id="'+ toplist[i] +'">'+ toplist[i] +'</div>')
	
}

members = ["lorem", "ipsum" ,"dolor", "lorem", "ipsum", "lorem", "ipsum" ,"dolor", ]
for (var x = 0; x < members.length; x++) {
	$(".memlist").append('<div class="block mem'+ x +'"><div class="photo"></div><div class="memtext">'+ members[x] +'</div>')
}


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
	var y = $(".events").offset().top;
	$('body').animate({scrollTop:y},1000);
});


var scroll = 0;
$(document).scroll(function() { 
	scroll = $(this).scrollTop();
	if(scroll > 500) {
		$(".topbar").css({"background-color":"#0f0f0f", "height":"60px"})
	} else {
		$(".topbar").css({"background-color":"transparent", "height":"80px"})

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


