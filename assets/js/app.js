// Mutliplayer RPS Game

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBP-rFcXQ1n50pK97s4SL85tSSMmncAy8Q",
    authDomain: "fir-testproject-61539.firebaseapp.com",
    databaseURL: "https://fir-testproject-61539.firebaseio.com",
    projectId: "fir-testproject-61539",
    storageBucket: "fir-testproject-61539.appspot.com",
    messagingSenderId: "169699289852"
  };
  firebase.initializeApp(config);

   var database = firebase.database();

  var playerOneChoice = ["r", "p", "s"];
  var playerTwoChoice = ["r", "p", "s"];

  var imgRock = "assets/images/rock.png";
  var imgPaper = "assets/images/paper.png";
  var imgScissors = "assets/images/scissors.png";

   var p1 = {
    name: '',
    number: 0,
    choice: '',
    wins: 0,
    losses: 0
  };

  var p2 = {
    name: '',
    number: 0,
    choice: '',
    wins: 0,
    losses: 0
  };

  // Uploads game play data to the database
  // database.ref("/p1").set(p1);
  // database.ref("/p2").set(p2);

   var p1 = 0;
  // var p1wins = 0;
  // var p1losses = 0;
  // var p1choice;
   var p2;
  // var p2wins = 0;
  // var p2losses =0;
  // var p2choice;
 // var oneOrTwo;

function layoutGame() {
 $("#playerNameInput").html('<input id="pNameToSubmit" type="text" placeholder="Enter your name" /><input type="button" value="Submit" id="buttonSubmitName" />');

$("#buttonSubmitName").click(function(event) {
	$("#playerNameInput").hide();
	if (p1 === 0) {
		console.log(p1.number);
		p1 = $("#pNameToSubmit").val().trim();
		console.log("player 1 is " + p1);
		$("#welcomePlayerMessage").html("Welcome " + p1 + " You are Player 1");
		// Uploads player1 game play data to the database
		database.ref("/p1").set({
        name: p1
        });
		p1 = 1;
	}else if (p1 === 1) {
		p2 = $("#pNameToSubmit").val().trim();
		console.log("player 2 is " + p2);
		$("#welcomePlayerMessage").html("Welcome " + p2 + " You are Player 2");
		// Uploads player2 game play data to the database
		database.ref("/p2").set({
        name: p2
        });
        p2 = 2;
	}
});

// Uploads player1 game play data to the database
//database.ref("/p1").set({
     //   name: p1
        //choice: p1choice,
        //wins: p1wins,
        //losses: p1losses
    //  });

// Uploads player2 game play data to the database
//database.ref("/p2").set({
       // name: p2
        //choice: p2choice,
        //wins: p2wins,
       // losses: p2losses
    //  });




console.log("are we connected?");
 //$("#welcomePlayerMessage").html("Welcome " + playerOneName + " You are Player 1");


};

$("#p1rock").click(function() {
	$("#playerOneSelected").html('<img id="p1choice" src=' + imgRock + ' />');
    		$("#p1rock").fadeTo(150,0.15);
    		console.log("player 1 clicked rock");
});

$("#p1paper").click(function() {
	$("#playerOneSelected").html('<img id="p1choice" src=' + imgPaper + ' />');
    		$("#p1paper").fadeTo(150,0.15);
    		console.log("player 1 clicked paper");
});

$("#p1scissors").click(function() {
	$("#playerOneSelected").html('<img id="p1choice" src=' + imgScissors + ' />');
    		$("#p1scissors").fadeTo(150,0.15);
    		console.log("player 1 clicked scissors");
});

$("#p2rock").click(function() {
	$("#playerTwoSelected").html('<img id="p2choice" src=' + imgRock + ' />');
    		$("#p2rock").fadeTo(150,0.15);
    		console.log("player 2 clicked rock");
});

$("#p2paper").click(function() {
	$("#playerTwoSelected").html('<img id="p2choice" src=' + imgPaper + ' />');
    		$("#p2paper").fadeTo(150,0.15);
    		console.log("player 2 clicked paper");
});

$("#p2scissors").click(function() {
	$("#playerTwoSelected").html('<img id="p2choice" src=' + imgScissors + ' />');
    		$("#p2scissors").fadeTo(150,0.15);
    		console.log("player 2 clicked scissors");
});
  

  layoutGame();