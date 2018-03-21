
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

$(document).ready(function () {

    $("#search-button").on("click", function (event) {

        event.preventDefault();
        var searchType = $("#search-by").val();
        var searchParameter = $("#search-text").val()
        console.log(searchType);
        console.log(searchParameter);

        if (searchType == "Choose...") {
            $("#search-modal").modal();
        } else if (searchType == 1) {
            characterSearch(searchParameter);
        } else if (searchType == 2) {

        } else if (searchType == 3) {

        } else if (searchType == 4) {

        }

    });

});

function characterSearch(name) {
    var characterName = name;
    searchURL = "https://gateway.marvel.com:443/v1/public/characters?name=" + characterName + "&apikey=c6ddf149200862b50983d1633446c0f7&ts=1&hash=ddc450734c99a083d33d41a3baea4e59"
    console.log(searchURL);

    $.ajax({
        url : searchURL,
        method : "GET",
        error : function(thing, secondThing, thirdThing) {
            console.log(thing);
            console.log(secondThing);
            console.log(thirdThing);
        }
    }).then(function(response) {
        console.log(response);
        $("#thumbnail-image").attr("src", response.data.results[0].thumbnail.path + ".jpg");
    });
};