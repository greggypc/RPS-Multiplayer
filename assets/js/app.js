// Mutliplayer RPS Game

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBVlXY_vqfCiLM9t3CMdShsluT2mF0CR_E",
    authDomain: "rps-multiplayer-b6623.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-b6623.firebaseio.com",
    projectId: "rps-multiplayer-b6623",
    storageBucket: "",
    messagingSenderId: "363934074271"
  };
  firebase.initializeApp(config);

   var database = firebase.database();

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

  var turn;
  var playa1 = "";
  var playa2 = "";

$("#playerNameInput").html('<div id="submitForm"><input id="pNameToSubmit" type="text" placeholder="Enter your name" /><input type="button" value="Submit" id="buttonSubmitName" /></div>');
$("#buttonSubmitName").click(function() {
$("#submitForm").hide();

var connectionsRef = database.ref("/connections");
var connectedRef = database.ref(".info/connected");

connectedRef.on("value", function(snap) {
  if (snap.val()) {
    var con = connectionsRef.push(true);
    con.onDisconnect().remove();
  }
});

connectionsRef.on("value", function(snap) {
    if (snap.numChildren() === 1) {
    console.log(p1.number + " is the player number - 0 from 1st if statement");
    playa1 = $("#pNameToSubmit").val().trim();
    console.log("player 1 is " + playa1);
    // Uploads player1 game play data to the database - set a new node p1
    database.ref("players/p1").set({
        name: playa1,
        number: 1,
        choice: '',
        wins: 0,
        losses: 0
        });

    // snap is the value of the ref that changed - here it is name and number
  database.ref("players/p1").on("value", function(snap) {
     
     var p1Name = snap.val().name;
     $("#playerNameInput").html("Welcome " + p1Name + ", you are Player 1");
    
     $("#playerOneName").html(p1Name);
    
  });
  
// The number of online users is the number of children in the connections list.
  console.log(snap.numChildren() + " connections currently in 1st if");
  } //end first if
  
else if (snap.numChildren() === 2) {
playa2 = $("#pNameToSubmit").val().trim();
    console.log("player 2 is " + playa2);
    // Uploads player2 game play data to the database
    database.ref("players/p2").set({
        name: playa2,
        number: 2,
        choice: '',
        wins: 0,
        losses: 0
        });

  database.ref("players/p2").on("value", function(snap) {
    
     var p2Name = snap.val().name;
     $("#playerNameInput").html("Welcome " + p2Name + ", you are Player 2");
     $("#playerTwoName").html(p2Name);
  });

  // The number of online users is the number of children in the connections list.
  console.log(snap.numChildren() + " connections currently in else if");
  } //end of else if
  else {
    alert("game is full!");
  };

});  //end connection value listener
	
});  //end click function on submit name


