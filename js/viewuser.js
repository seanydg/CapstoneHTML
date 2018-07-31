//Fetches data from specified database
$(document).ready(function(){
var rootRef = firebase.database().ref().child("User");

rootRef.on("child_added", snap => {
		var companyName = snap.child("companyName").val(); 
		var companyDescription = snap.child("companyDesc").val();
		var licenseNumber = snap.child("licenseNo").val();
		var companyEmail = snap.child("companyEmail").val();
		var personInCharge = snap.child("personInCharge").val();
		var contactNumber = snap.child("contactNo").val(); 

	//alert(snap.val()); /*Check to see if the site is getting anything*/

		$("#user-table").append("<tr><td>" + companyName
		+ "</td><td>" + companyDescription + "</td><td>" + 
		licenseNumber + "</td><td>" + companyEmail + "</td><td>" + personInCharge 
		+ "</td><td>" + contactNumber + "</td>/tr>"); 
		
});


});
 