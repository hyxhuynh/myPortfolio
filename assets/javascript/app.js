  console.log("ready")
  // Added Firebase to contact form to store user's contact information
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC6y6Mf6fFRgl4SZVW6RsDR_xWtMANhY8Y",
    authDomain: "portfolio-a9ac8.firebaseapp.com",
    databaseURL: "https://portfolio-a9ac8.firebaseio.com",
    projectId: "portfolio-a9ac8",
    storageBucket: "portfolio-a9ac8.appspot.com",
    messagingSenderId: "103187826679"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  // Submit button
  $(".submit").on("click", function(event) {
    event.preventDefault();
  
    // Grabs user input
    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var message = $("#message").val().trim();
  
    // Uploads data to the database
    database.ref().push({
      name: name,
      email: email,
      message: message
    });
  
    // Clears all of the text-boxes
    $("#name").val("");
    $("#email").val("");
    $("#message").val("");
  });
  
  // Create Firebase event for adding employee to the database 
  database.ref(user).on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var name = childSnapshot.val().name;
    var email = childSnapshot.val().email;
    var message = childSnapshot.val().message;

  
    // User's Info
    console.log(name);
    console.log(email);
    console.log(message);
  });