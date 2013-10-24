fillTable = function(){
	alert("rawr");
	var dogs = [];
	
	var airedele = {};
	airedele.name = "Airedele Terrior";
	airedele.country = "England";
	airedele.classification = "Terrior";
	airedele.image = "//placehold.it/100x100";
	
	dogs.push(airedele); //add airedele to array
	
	var akita = {};
	akita.name = "Akita";
	akita.country = "Japan";
	akita.classification = "Utility";
	akita.image = "http://placehold.it/100x100";
	
	dogs.push(akita); //add akita to array
	
	alert(dogs.length);
	
	$(dogs).each(function(i, e){
		var id = "dog" + i;
		alert(id);
		alert(typeof e);
		$("#dogTable").append("<tr id='" + id + "'></tr>");
		$("#" + id).append("<td>" + e.name + "</td>");
		$("#" + id).append("<td>" + e.country + "</td>");
		$("#" + id).append("<td>" + e.classification + "</td>");
		$("#" + id).append("<td><img src='" + e.image + "' alt='" + e.name + "'/></td>");
	});
};