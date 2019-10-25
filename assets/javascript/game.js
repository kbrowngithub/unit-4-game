$(document).ready(function() {

	var rn = Math.floor(Math.random() * 102) + 19;
	console.log("rn: " + rn);
	$(".randomNumber").text("Number to hit: " + rn);

	var crystal1 = Math.floor(Math.random() * 12) + 1;
	console.log("Crystal 1: " + crystal1);
	$("#img1").attr("value", crystal1);
	console.log("$(#img1).attr(value) " + $("#img1").attr("value"));

	var crystal2 = Math.floor(Math.random() * 12) + 1;
	console.log("Crystal  2: " + crystal2);
	$("#img2").attr("value", crystal2);
	console.log("$(#img2).attr(value) " + $("#img2").attr("value"));

	var crystal3 = Math.floor(Math.random() * 12) + 1;
	console.log("Crystal  3: " + crystal3);
	$("#img3").attr("value", crystal3);
	console.log("$(#img3).attr(value) " + $("#img3").attr("value"));
	
	var crystal4 = Math.floor(Math.random() * 12) + 1;
	console.log("Crystal  4: " + crystal4);
	$("#img4").attr("value", crystal4);
	console.log("$(#img4).attr(value) " + $("#img4").attr("value"));
		
	var wins = 0;
	console.log("wins: " + wins);

	var losses = 0;
	console.log("losses: " + losses);

	var score = 0;
	console.log("score: " + score);

	function reset () {
		rn = Math.floor(Math.random() * 102) + 19;
		console.log("rn: " + rn);
		$(".randomNumber").text("Number to hit: " + rn);

		score = 0;
		$(".scoreCounter").text(score);

	crystal1 = Math.floor(Math.random() * 12) + 1;
	console.log("Crystal 1: " + crystal1);
	$("#img1").attr("value", crystal1);
	console.log("$(#img1).attr(value) " + $("#img1").attr("value"));

	crystal2 = Math.floor(Math.random() * 12) + 1;
	console.log("Crystal  2: " + crystal2);
	$("#img2").attr("value", crystal2);
	console.log("$(#img2).attr(value) " + $("#img2").attr("value"));

	crystal3 = Math.floor(Math.random() * 12) + 1;
	console.log("Crystal  3: " + crystal3);
	$("#img3").attr("value", crystal3);
	console.log("$(#img3).attr(value) " + $("#img3").attr("value"));
	
	crystal4 = Math.floor(Math.random() * 12) + 1;
	console.log("Crystal  4: " + crystal4);
	$("#img4").attr("value", crystal4);
	console.log("$(#img4).attr(value) " + $("#img4").attr("value"));

		$("img").on("click", function () {
			var newScore = score += parseInt($(this).attr("value"));
			console.log("New Score: " + newScore);
			$(".scoreCounter").text("Score Counter: " + newScore);

			if(newScore === rn) { 
				wins++ ; 
				$(".wins").text("Wins: " + wins);
				console.log("Wins: " + wins);
				reset();
			
			} 
			else if(newScore > rn) {
				losses++ ;
				$(".losses").text("Losses: " + losses);
				console.log("Losses: " + losses);
				reset();
				
			}
		});
	}

	$(".img").on("click", function () {
		var newScore = score += parseInt($(this).attr("value"));
		console.log("New Score: " + newScore);
		$(".scoreCounter").text("Score Counter: " + newScore);

		if(newScore === rn) { 
			wins++ ; 
			$(".wins").text("Wins: " + wins);
			console.log("Wins: " + wins);
			reset(); 
		} 

		else if(newScore > rn) {
			losses++ ;
			$(".losses").text("Losses: " + losses);
			console.log("Losses: " + losses);
			reset();
		}

	});

});