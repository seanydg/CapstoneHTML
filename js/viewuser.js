//Fetches data from specified database
$(document).ready(function(){
var rootRef = firebase.database().ref().child("User");

rootRef.on("child_added", snap => {
		var name = snap.child("userName").val(); 
		var profileDesc = snap.child("profileDescription").val();
		var dateofBirth = snap.child("dateofBirth").val();
		var email = snap.child("emailAddress").val();
		var password = snap.child("password").val();
		var qualification = snap.child("userQualification").val(); 

	//alert(snap.val()); /*Check to see if the site is getting anything*/

		$("#user-table").append("<tr><td>" + name
		+ "</td><td>" + profileDesc + "</td><td>" + 
		dateofBirth+ "</td><td>" + email + "</td><td>" + password 
		+ "</td><td>" + qualification + "</td>/tr>"); 
		
});


});
 