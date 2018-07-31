$(document).ready(function(){
	var rootRef = firebase.database().ref().child("Jobs");

	rootRef.on("child_added", snap => {
		var title = snap.child("jobTItle").val();
		var companyName = snap.child("companyName").val();
		var educationRequirement = snap.child("educationRequirement").val();
		var category = snap.child("jobCategory").val();
		var description = snap.child("jobDescription").val();
		var poster = snap.child("jobPosterID").val();
		var salary = snap.child("salary").val();
		var userEmail = snap.child("userEmail").val();
		
		//alert(snap.val()); /*Check to see if the site is getting anything*/

		$("#job-table").append("<tr><td>" + title + "</td><td>" + companyName + "</td><td>" + educationRequirement + "</td><td>" + category + "</td><td>" + description + "</td><td>" + poster + "</td><td>" + salary + "</td><td>" + userEmail + "</td>/tr>");
		//$("#job-table").append("<tr><td>" + title + "</td><td>" + companyName +"</td><td> "+ educationRequirement"</td><td>" + category + "</td><td>" + description +"</td><td>"+ poster +"</td><td>" + salary + "</td><td>" + userEmail + "</td></tr>");
	});

});