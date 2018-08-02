$(document).ready(function(){

  var name = document.getElementById('name');
  var profileDesc = document.getElementById('profileDesc');
  var dateofBirth = document.getElementById('dateofBirth');
  var email = document.getElementById('email');
  var password = document.getElementById('password');
  var qualification = document.getElementById('qualification');

  var rootRef = firebase.database().ref().child("User").child("User01");

  rootRef.on("child_added", snap => {
    name.innerHTML = snap.child("name").val();
    profileDesc.innerHTML = snap.child("profileDesc").val();
    dateofBirth.innerHTML = snap.child("dateofBirth").val();
    email.innerHTML = snap.child("dateofBirth").val();
    password.innerHTML = snap.child("password").val();
    qualification.innerHTML = snap.child("qualification").val();
  });

});