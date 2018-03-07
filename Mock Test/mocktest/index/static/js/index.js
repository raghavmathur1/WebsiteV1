x = 0;
y = 0;	
$(".next").click(function () {
	if (x<2) {
		y-=90;
		z=y+'vw'
		$(".qus").css({"left":z})
		x++

	}

})
$(".pre").click(function () {
	if (x>0) {
		y+=90;
		z=y+'vw'
		$(".qus").css({"left":z})
		x--
	}

})

var b = new Array(3)
$(".option1").click(function () {
	b[x]='A';
	console.log(b)
})

$(".option2").click(function () {
	b[x]='B';
	console.log(b)
})

$(".option3").click(function () {
	b[x]='C';
	console.log(b)
})

$(".option4").click(function () {
	b[x]='D';
	console.log(b)
})


ans = new Array(3)

ans = ["A", "B", "C"]
	console.log(count)


$(".submit").click(function () {
	check = 0	
	for (var i = 0 ; i < 3; i++) {
		if (b[i]==ans[i]) {
			++check
		}
	}
})