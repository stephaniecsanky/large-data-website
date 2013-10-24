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
	
	addDog("American Cocker Spaniel", "United States", "Northern Breed", "//placehold.it/100x100");

	addDog("Australian Shepherd", "United States", "Northern Breed", "//placehold.it/100x100");
	
	addDog("Basset Hound", "United States", "Northern Breed", "//placehold.it/100x100");
	
	addDog("Beagle", "United States", "Northern Breed", "//placehold.it/100x100");

	addDog("Bichon Frise", "United States", "Northern Breed", "//placehold.it/100x100");
	
	addDog("Boxer", "United States", "Northern Breed", "//placehold.it/100x100");
	
	addDog("Brittany Spaniel", "United States", "Northern Breed", "//placehold.it/100x100");

	addDog("Bulldog", "United States", "Northern Breed", "//placehold.it/100x100");
	
	addDog("Cairn Terrier", "United States", "Northern Breed", "//placehold.it/100x100");
	
	addDog("Chesapeake Bay Retriever", "Japan", "Utility", "//placehold.it/100x100");
		
	addDog("Chihuahua", "Japan", "Utility", "//placehold.it/100x100");
	
	addDog("Chinese Shar-Pei", "Japan", "Utility", "//placehold.it/100x100");
	
	addDog("Chow Chow", "Japan", "Utility", "//placehold.it/100x100");
	
	addDog("Collie", "Japan", "Utility", "//placehold.it/100x100");
	
	addDog("Dachshund", "Japan", "Utility", "//placehold.it/100x100");
	
	addDog("Dalmatian", "Japan", "Utility", "//placehold.it/100x100");
	
	addDog("Doberman Pinscher", "England", "Terrior", "//placehold.it/100x100");
	
	addDog("English Springer Spaniel", "England", "Terrior", "//placehold.it/100x100");
	
	addDog("German Shepherd", "England", "Terrior", "//placehold.it/100x100");
	
	addDog("German Shorthaired Pointer", "England", "Terrior", "//placehold.it/100x100");
	
	addDog("Golden Retriever", "England", "Terrior", "//placehold.it/100x100");
	
	addDog("Great Dane", "England", "Terrior", "//placehold.it/100x100");
	
	addDog("Great Pyrenees", "England", "Terrior", "//placehold.it/100x100");
	
	addDog("Labrador Retriever", "England", "Terrior", "//placehold.it/100x100");
	
	addDog("Lhasa Apso", "England", "Terrior", "//placehold.it/100x100");
	
	addDog("Maltese", "England", "Terrior", "//placehold.it/100x100");
	
	addDog("Mastiff", "England", "Terrior", "//placehold.it/100x100");
	
	addDog("Miniature Pinscher", "England", "Terrior", "//placehold.it/100x100");
		
	addDog("Newfoundland", "England", "Terrior", "//placehold.it/100x100");
	
	addDog("Pekingese", "England", "Terrior", "//placehold.it/100x100");
	
	addDog("Pembroke Welsh Corgi", "England", "Terrior", "//placehold.it/100x100");
	
	addDog("Pomeranian", "England", "Terrior", "//placehold.it/100x100");

	addDog("Poodle", "England", "Terrior", "//placehold.it/100x100");

	addDog("Pug", "England", "Terrior", "//placehold.it/100x100");

	addDog("Rottweiler", "England", "Terrior", "//placehold.it/100x100");
	
	addDog("Saint Bernard", "England", "Terrior", "//placehold.it/100x100");
	
	addDog("Samoyed", "England", "Terrior", "//placehold.it/100x100");	
	
	addDog("Schipperke", "England", "Terrior", "//placehold.it/100x100");
	
	addDog("Scottish Terrier", "England", "Terrior", "//placehold.it/100x100");
	
	addDog("Shetland Sheepdog", "England", "Terrior", "//placehold.it/100x100");
	
	addDog("Shih-Tzu", "England", "Terrior", "//placehold.it/100x100");
	
	addDog("Siberian Husky", "England", "Terrior", "//placehold.it/100x100");

	addDog("Weimaraner", "England", "Terrior", "//placehold.it/100x100");		

	addDog("West Highland White Terrier", "England", "Terrior", "//placehold.it/100x100");
	
	addDog("Yorkshire Terrier", "England", "Terrior", "//placehold.it/100x100");
		
	var pages = dogs.length / ELEMS_PER_PAGE;
	if(dogs.length % ELEMS_PER_PAGE > 0) pages++;
	if(page < 0 || page > pages) return;
	
	$("#" + tableName + " tr").remove();
	$("#" + tableName).append("<tr id='dogTableHeaders'></tr>");
    $("#dogTableHeaders").append("<th>Breed Name</th>");
    $("#dogTableHeaders").append("<th>Country of Origin</th>");
    $("#dogTableHeaders").append("<th>Classification</th>");
    $("#dogTableHeaders").append("<th>Image</th>");
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