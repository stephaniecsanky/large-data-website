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
	
	addDog("American Cocker Spaniel", "United States", "Gun Dog", "//placehold.it/100x100");

	addDog("Australian Shepherd", "United States", "Herding Breed", "//placehold.it/100x100");
	
	addDog("Basset Hound", "France", "Scenthound", "//placehold.it/100x100");
	
	addDog("Beagle", "England", "Scenthound", "//placehold.it/100x100");

	addDog("Bichon Frise", "Spain, Belgium", "Toy/Companion Dog", "//placehold.it/100x100");
	
	addDog("Boxer", "Germany", "Utility/Guardian Dog", "//placehold.it/100x100");
	
	addDog("Brittany Spaniel", "France", "Gun Dog", "//placehold.it/100x100");

	addDog("Bulldog", "England", "Utility/Companion Dog", "//placehold.it/100x100");
	
	addDog("Cairn Terrier", "Scotland", "Terrier", "//placehold.it/100x100");
	
	addDog("Chesapeake Bay Retriever", "United States", "Gun Dog", "//placehold.it/100x100");
		
	addDog("Chihuahua", "Mexico", "Toy/Companion Dog", "//placehold.it/100x100");
	
	addDog("Shar-Pei", "China", "Northern Breed", "//placehold.it/100x100");
	
	addDog("Chow Chow", "China", "Northern Breed", "//placehold.it/100x100");
	
	addDog("Collie", "Scotland", "Herding Dog", "//placehold.it/100x100");
	
	addDog("Dachshund", "Germany", "Scenthound", "//placehold.it/100x100");
	
	addDog("Dalmatian", "Croatia", "Companion Dog", "//placehold.it/100x100");
	
	addDog("Doberman Pinscher", "Germany", "Utility/Guardian Dog", "//placehold.it/100x100");
	
	addDog("English Springer Spaniel", "England", "Gun Dog", "//placehold.it/100x100");
	
	addDog("German Shepherd", "Germany", "Herding Dog", "//placehold.it/100x100");
	
	addDog("German Shorthaired Pointer", "Germany", "Gun Dog", "//placehold.it/100x100");
	
	addDog("Golden Retriever", "Scotland", "Gun Dog", "//placehold.it/100x100");
	
	addDog("Great Dane", "Germany", "Guardian Dog", "//placehold.it/100x100");
	
	addDog("Great Pyrenees", "France, Spain", "Guardian Dog", "//placehold.it/100x100");
	
	addDog("Labrador Retriever", "Canada, England", "Gun Dog", "//placehold.it/100x100");
	
	addDog("Lhasa Apso", "Tibet", "Companion Dog", "//placehold.it/100x100");
	
	addDog("Maltese", "Italy", "Companion Dog", "//placehold.it/100x100");
	
	addDog("Mastiff", "England", "Guardian Dog", "//placehold.it/100x100");
	
	addDog("Miniature Pinscher", "Germany", "Companion Dog", "//placehold.it/100x100");
		
	addDog("Newfoundland", "Canada", "Utility/Guardian Dog", "//placehold.it/100x100");
	
	addDog("Pekingese", "China", "Toy/Companion", "//placehold.it/100x100");
	
	addDog("Pembroke Welsh Corgi", "Wales", "Herding Dog", "//placehold.it/100x100");
	
	addDog("Pomeranian", "Germany, Poland", "Toy/Companion Dog", "//placehold.it/100x100");

	addDog("Poodle", "Germany, France", "Utility/Companion/Gun Dog", "//placehold.it/100x100");

	addDog("Pug", "China", "Toy/Companion Dog", "//placehold.it/100x100");

	addDog("Rottweiler", "Germany", "Utility/Guardian Dog", "//placehold.it/100x100");
	
	addDog("Saint Bernard", "Italy, Switzerland", "Utility/Guardian Dog", "//placehold.it/100x100");
	
	addDog("Samoyed", "Russia", "Utility/Northern Breed", "//placehold.it/100x100");	
	
	addDog("Schipperke", "Belgium", "Companion Dog", "//placehold.it/100x100");
	
	addDog("Scottish Terrier", "Scotland", "Terrior", "//placehold.it/100x100");
	
	addDog("Shetland Sheepdog", "Scotland", "Herding Dog", "//placehold.it/100x100");
	
	addDog("Shih-Tzu", "China", "Utility/Companion Dog", "//placehold.it/100x100");
	
	addDog("Siberian Husky", "Russia", "Utility/Northern Breed", "//placehold.it/100x100");

	addDog("Weimaraner", "Germany", "Gun Dog", "//placehold.it/100x100");		

	addDog("West Highland White Terrier", "Scotland", "Terrior", "//placehold.it/100x100");
	
	addDog("Yorkshire Terrier", "England", "Toy/Companion Dog", "//placehold.it/100x100");
		
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