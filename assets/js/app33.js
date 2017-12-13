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
  //var ppp = 0;
  var playa1;
  var playa2;

 $("#playerNameInput").html('<input id="pNameToSubmit" type="text" placeholder="Enter your name" /><input type="button" value="Submit" id="buttonSubmitName" />');
  $("#buttonSubmitName").click(function() {
  $("#playerNameInput").hide();

// --------------------------------------------------------------

// Add ourselves to presence list when online.
// connectionsRef references a specific location in our database.
// All of our connections will be stored in this directory.
var connectionsRef = database.ref("/connections");

// '.info/connected' is a special location provided by Firebase that is updated every time
// the client's connection state changes.
// '.info/connected' is a boolean value, true if the client is connected and false if they are not.
var connectedRef = database.ref(".info/connected");

// When the client's connection state changes...
connectedRef.on("value", function(snap) {

  // If they are connected..
  if (snap.val()) {

    // Add user to the connections list.
    var con = connectionsRef.push(true);

    // Remove user from the connection list when they disconnect.
    con.onDisconnect().remove();
  }
});

// When first loaded or when the connections list changes...
connectionsRef.on("value", function(snap) {
 

  if (snap.numChildren() === 1) {
    console.log(p1.number + " is the player number - 0 from 1st if statement");
    playa1 = $("#pNameToSubmit").val().trim();
    console.log("player 1 is " + playa1);
    // Uploads player1 game play data to the database - set a new node p1
    database.ref("/p1").set({
        name: playa1,
        number: 1,
        choice: '',
        wins: 0,
        losses: 0
        });


  database.ref("/p1").on("child_changed", function(childSnapshot, prevChildKey) {
    // if (snapshot.child("p1").exists() && snapshot.child("p2").exists()) {
//console.log(p1.number + " is the player number - 1 from the db");
    // }
     var p1Name = childSnapshot.val().name;
     var p1Number = childSnapshot.val().number;
    $("#welcomePlayerMessage").html("Welcome " + p1Name + " You are Player " + p1Number);
  });

// The number of online users is the number of children in the connections list.
  console.log(snap.numChildren() + " connections currently in 1st if");
  } //end first if
  

  else if (snap.numChildren() === 2) {
playa2 = $("#pNameToSubmit").val().trim();
    console.log("player 2 is " + playa2);
    // Uploads player2 game play data to the database
    database.ref("/p2").set({
        name: playa2,
        number: 2,
        choice: '',
        wins: 0,
        losses: 0
        });


  database.ref("/p2").on("child_changed", function(childSnapshot, prevChildKey) {
    //if (snapshot.child("p1").exists()) {

    // Set the local variables for highBidder equal to the stored values in firebase.
    var p2Name = childSnapshot.val().name;
    var p2Number = childSnapshot.val().number;
    $("#welcomePlayerMessage").html("Welcome " + p2Name + " You are Player " + p2Number);
});

  // The number of online users is the number of children in the connections list.
  console.log(snap.numChildren() + " connections currently in else if");
  } //end of else if
  else {
    alert("game is full!");
  };




});  //end connection value listener

	
});  //end click function on submit name


