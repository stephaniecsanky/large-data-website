fillTable = function(page){
	
	//config
	var tableName = "dogTable";
	
	//pagination variables
	var ELEMS_PER_PAGE = 10;
	var start = ELEMS_PER_PAGE * (page - 1);
	
	var dogs = [];
	
	addDog = function(name, country, classification, image){
		var dog = {};
		dog.name = name;
		dog.country = country;
		dog.classification = classification;
		dog.image = image;
		dogs.push(dog);
	};
	
	
	
	addDog("Airedele Terrior", "England", "Terrior", "//placehold.it/100x100");
	//airedele.name = "Airedele Terrior";
	//airedele.country = "England";
	//airedele.classification = "Terrior";
	//airedele.image = "//placehold.it/100x100";
	
	//dogs.push(airedele); //add airedele to array
	
	addDog("Akita", "Japan", "Utility", "//placehold.it/100x100");
	//var akita = {};
	//akita.name = "Akita";
	//akita.country = "Japan";
	//akita.classification = "Utility";
	//akita.image = "http://placehold.it/100x100";
	
	//dogs.push(akita); //add akita to array
	
	addDog("Alaskan Malamute", "United States", "Northern Breed", "//placehold.it/100x100");
	
	addDog("Alaskan Malamute", "United States", "Northern Breed", "//placehold.it/100x100");

	addDog("Alaskan Malamute", "United States", "Northern Breed", "//placehold.it/100x100");
	
	addDog("Alaskan Malamute", "United States", "Northern Breed", "//placehold.it/100x100");
	
	addDog("Alaskan Malamute", "United States", "Northern Breed", "//placehold.it/100x100");

	addDog("Alaskan Malamute", "United States", "Northern Breed", "//placehold.it/100x100");
	
	addDog("Alaskan Malamute", "United States", "Northern Breed", "//placehold.it/100x100");
	
	addDog("Alaskan Malamute", "United States", "Northern Breed", "//placehold.it/100x100");

	addDog("Alaskan Malamute", "United States", "Northern Breed", "//placehold.it/100x100");
	
	addDog("Alaskan Malamute", "United States", "Northern Breed", "//placehold.it/100x100");
	
	addDog("Akita", "Japan", "Utility", "//placehold.it/100x100");
		
	addDog("Akita", "Japan", "Utility", "//placehold.it/100x100");
	
	addDog("Akita", "Japan", "Utility", "//placehold.it/100x100");
	
	addDog("Akita", "Japan", "Utility", "//placehold.it/100x100");
	
	addDog("Akita", "Japan", "Utility", "//placehold.it/100x100");
	
	addDog("Akita", "Japan", "Utility", "//placehold.it/100x100");
	
	addDog("Akita", "Japan", "Utility", "//placehold.it/100x100");
	
	var pages = dogs.length / ELEMS_PER_PAGE;
	if(dogs.length % ELEMS_PER_PAGE > 0) pages++;
	if(page < 0 || page > pages) return;
	
	$("#" + tableName).remove("tr");
	$(dogs).each(function(i, e){
		if(i >= start && i < start + ELEMS_PER_PAGE){
			var id = "dog" + i;
			$("#" + tableName).append("<tr id='" + id + "'></tr>");
			$("#" + id).append("<td>" + e.name + "</td>");
			$("#" + id).append("<td>" + e.country + "</td>");
			$("#" + id).append("<td>" + e.classification + "</td>");
			$("#" + id).append("<td><img src='" + e.image + "' alt='" + e.name + "'/></td>");
		}
	});
};