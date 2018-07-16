firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User Sign Up

    window.location = 'index.html'

    

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("signup_div").style.display = "block";

  }
});

function register(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  var userName = document.getElementById("contact_name").value;
  var userNo = document.getElementById("contact_no").value;
  var businessName = document.getElementById("business_name").value;
  var licenseNo = document.getElementById("license_No").value

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

  /*firebase.database().ref('businessoperators/' + userId).set({
    email: email_field,
    userPass = password_field,
    userName = contact_name,
    userNo = contact_no,
    businessName = business_name,
    licenseNo = license_No
  }); */
    window.alert("Error : " + errorMessage);

    // ...
  });

}

/*function writeUserData(userEmail, userPass, userName, userNo, businessName, licenseNo) {
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  var userName = document.getElementById("contact_name").value;
  var userNo = document.getElementById("contact_no").value;
  var businessName = document.getElementById("business_name").value;
  var licenseNo = document.getElementById("license_No").value

  firebase.database().ref('businessoperators/' + userId).set({
    email: email_field,
    userPass = password_field,
    userName = contact_name,
    userNo = contact_no,
    businessName = business_name,
    licenseNo = license_No
  });
}*/

function logout(){
  firebase.auth().signOut();
}