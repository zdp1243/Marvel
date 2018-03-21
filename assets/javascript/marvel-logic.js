
  // Initialize Firebase
console.log("im a script");

  var config = {
    apiKey: "AIzaSyBdM92H4MBJ5N1SvTqMBbleOW46qLBPKcU",
    authDomain: "mp-rps-8fccc.firebaseapp.com",
    databaseURL: "https://mp-rps-8fccc.firebaseio.com",
    projectId: "mp-rps-8fccc",
    storageBucket: "mp-rps-8fccc.appspot.com",
    messagingSenderId: "680192097997"
  };
  firebase.initializeApp(config);

  $("#search-button").on("click", function(event) {
    
    console.log("im a string", event);
    event.preventDefault();
    var searchType = $("#search-by").val();
    console.log(searchType);

  });