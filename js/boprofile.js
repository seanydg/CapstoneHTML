$(document).ready(function(){

  var companyName = document.getElementById('companyName');
  var companyDesc = document.getElementById('companyDesc');
  var licenseNo = document.getElementById('licenseNo');
  var companyEmail = document.getElementById('companyEmail');
  var personinCharge = document.getElementById('personinCharge');
  var contactNo = document.getElementById('contactNo');

  var rootRef = firebase.database().ref("User/User01");

  rootRef.on("child_added", snap => {
    companyName.innerText = snap.child("companyName").val();
    companyDesc.innerText = snap.child("companyDesc").val();
    licenseNo.innerText = snap.child("licenseNo").val();
    companyEmail.innerText = snap.child("companyEmail").val();
    personinCharge.innerText = snap.child("personinCharge").val();
    contactNo.innerText = snap.child("contactNo").val();
  });

});