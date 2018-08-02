$(document).ready(function(){

  var name = document.getElementById('name');
  var profileDesc = document.getElementById('profileDesc');
  var dateofBirth = document.getElementById('dateofBirth');
  var email = document.getElementById('email');
  var password = document.getElementById('password');
  var qualification = document.getElementById('qualification');

  var rootRef = firebase.database().ref().child("User").child("User01");

  rootRef.on("child_added", snap => {
    name.innerText = snap.child("name").val();
    profileDesc.innerText = snap.child("profileDesc").val();
    dateofBirth.innerText = snap.child("dateofBirth").val();
    email.innerText = snap.child("dateofBirth").val();
    password.innerText = snap.child("password").val();
    qualification.innerText = snap.child("qualification").val();
  });

});