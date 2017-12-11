// Mutliplayer RPS Game

  var playerOneChoice = ["r", "p", "s"];
  var playerTwoChoice = ["r", "p", "s"];

  var imgRock = "assets/images/rock.png";
  var imgPaper = "assets/images/paper.png";
  var imgScissors = "assets/images/scissors.png";



$("#p1rock").click(function() {
	$("#playerOneSelected").html('<img id="p1choice" src=' + imgRock + ' />');
    		$("#p1rock").fadeTo(500,0.15);
    		console.log("player 1 clicked rock");
    				
});

$("#p1paper").click(function() {
	$("#playerOneSelected").html('<img id="p1choice" src=' + imgPaper + ' />');
    		$("#p1paper").fadeTo(500,0.15);
    		console.log("player 1 clicked paper");
    				
});

$("#p1scissors").click(function() {
	$("#playerOneSelected").html('<img id="p1choice" src=' + imgScissors + ' />');
    		$("#p1scissors").fadeTo(500,0.15);
    		console.log("player 1 clicked rock");
    				
});

$("#playerTwoChoices").click(function() {
    	if (role === null) {
    		$("#playerChosen").html('<img id="fighterImg" src=' + fighterImg1 + ' />');
    		$(".playerName").html('<p>Beatrix Kiddo</p>');
    		$("#fighterImg1").fadeTo(500,0.4);
    		role = "enemy";
    		$("#choosePlayerThenOpponent").html('<h2>SELECT YOUR OPPONENT!</h2>');
    		console.log("just picked our player");
    		console.log(characters.fighter[0].name);
    		//playersToBattle.push() ;
		
    	} else {
    		$("#enemyChosen").html('<img id="fighterImg" src=' + fighterImg1 + ' />');
    		$(".enemyName").html('<p>Beatrix Kiddo</p>');
    		$("#fighterImg1").fadeTo(500,0.4);
    		$("#choosePlayerThenOpponent").html('<h2>SELECT YOUR OPPONENT!</h2>');
    		console.log("just picked our enemy");
    		attack();
    		
    	}
    });




    