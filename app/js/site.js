
//
// How to parse parameters from URL string
// Reference: http://stackoverflow.com/questions/11582512/how-to-get-url-parameters-with-javascript/11582513#11582513
// Usage:
//   var myvar = getURLParameter('myvar');
//

function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}


// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//
// This function is automatically generated by the Firebase web console
// Please change this function accordingly
// Reference: https://console.firebase.google.com
//

function initalizeFirebase() {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAquft9UUOycldBxHWyG2toWPEsUgbOW34",
    authDomain: "team-long-time-no-name.firebaseapp.com",
    databaseURL: "https://team-long-time-no-name.firebaseio.com",
    storageBucket: "team-long-time-no-name.appspot.com",
    messagingSenderId: "7595823211"
  };
  firebase.initializeApp(config);

}

//
// User-defined function - Useful for retrieving an object once, without 3-way sync
// For 3-way sync, use $firebaseObject or $firebaseArray provided by AngularFire
//

function retrieveOnceFirebase(firebase, refPath, callbackFunc) {
	firebase.database().ref(refPath).once("value").then(callbackFunc);
}
