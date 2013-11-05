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
	
	
	
	addDog("Airedele Terrior", "England", "Terrior", "../img/all-breeds/airedale-terrier.jpg");
	//airedele.name = "Airedele Terrior";
	//airedele.country = "England";
	//airedele.classification = "Terrior";
	//airedele.image = "//placehold.it/100x100";
	
	//dogs.push(airedele); //add airedele to array
	
	addDog("Akita", "Japan", "Utility", "../img/all-breeds/akita.jpg");
	//var akita = {};
	//akita.name = "Akita";
	//akita.country = "Japan";
	//akita.classification = "Utility";
	//akita.image = "http://placehold.it/100x100";
	
	//dogs.push(akita); //add akita to array
	
	addDog("Alaskan Malamute", "United States", "Northern Breed", "../img/all-breeds/alaskan-malamute.jpg");
	
	addDog("American Cocker Spaniel", "United States", "Gun Dog", "../img/all-breeds/american-cocker-spaniel.jpg");

	addDog("Australian Shepherd", "United States", "Herding Breed", "../img/all-breeds/australian-shepherd.jpg");
	
	addDog("Basset Hound", "France", "Scenthound", "../img/all-breeds/basset-hound.jpg");
	
	addDog("Beagle", "England", "Scenthound", "../img/all-breeds/beagle.jpg");

	addDog("Bichon Frise", "Spain, Belgium", "Toy/Companion Dog", "../img/all-breeds/bichon-frise.jpg");
	
	addDog("Boxer", "Germany", "Utility/Guardian Dog", "../img/all-breeds/boxer.jpg");
	
	addDog("Brittany Spaniel", "France", "Gun Dog", "../img/all-breeds/brittany-spaniel.jpg");

	addDog("Bulldog", "England", "Utility/Companion Dog", "../img/all-breeds/bulldog.jpg");
	
	addDog("Cairn Terrier", "Scotland", "Terrier", "../img/all-breeds/cairn-terrier.jpg");
	
	addDog("Chesapeake Bay Retriever", "United States", "Gun Dog", "../img/all-breeds/chesapeake-bay-retriever.jpg");
		
	addDog("Chihuahua", "Mexico", "Toy/Companion Dog", "../img/all-breeds/chihuahua.jpg");
	
	addDog("Chinese Shar-Pei", "China", "Northern Breed", "../img/all-breeds/chinese-shar-pei.jpg");
	
	addDog("Chow Chow", "China", "Northern Breed", "../img/all-breeds/chow-chow.jpg");
	
	addDog("Collie", "Scotland", "Herding Dog", "../img/all-breeds/collie.jpg");
	
	addDog("Dachshund", "Germany", "Scenthound", "../img/all-breeds/dachshund.jpg");
	
	addDog("Dalmatian", "Croatia", "Companion Dog", "../img/all-breeds/dalmation.jpg");
	
	addDog("Doberman Pinscher", "Germany", "Utility/Guardian Dog", "../img/all-breeds/doberman-pinscher.jpg");
	
	addDog("English Springer Spaniel", "England", "Gun Dog", "../img/all-breeds/english-springer-spaniel.jpg");
	
	addDog("German Shepherd", "Germany", "Herding Dog", "../img/all-breeds/german-shepherd.jpg");
	
	addDog("German Shorthaired Pointer", "Germany", "Gun Dog", "../img/all-breeds/german-shorthaired-pointer.jpg");
	
	addDog("Golden Retriever", "Scotland", "Gun Dog", "../img/all-breeds/golden-retriever.jpg");
	
	addDog("Great Dane", "Germany", "Guardian Dog", "../img/all-breeds/great-dane.jpg");
	
	addDog("Great Pyrenees", "France, Spain", "Guardian Dog", "../img/all-breeds/great-pyrenees.jpg");
	
	addDog("Labrador Retriever", "Canada, England", "Gun Dog", "../img/all-breeds/labrador-retriever.jpg");
	
	addDog("Lhasa Apso", "Tibet", "Companion Dog", "../img/all-breeds/lhasa-apso.jpg");
	
	addDog("Maltese", "Italy", "Companion Dog", "../img/all-breeds/maltese.jpg");
	
	addDog("Mastiff", "England", "Guardian Dog", "../img/all-breeds/mastiff.jpg");
	
	addDog("Miniature Pinscher", "Germany", "Companion Dog", "../img/all-breeds/miniature-pinscher.jpg");
		
	addDog("Newfoundland", "Canada", "Utility/Guardian Dog", "../img/all-breeds/newfoundland.jpg");
	
	addDog("Pekingese", "China", "Toy/Companion", "../img/all-breeds/pekingese.jpg");
	
	addDog("Pembroke Welsh Corgi", "Wales", "Herding Dog", "../img/all-breeds/pembroke-welsh-corgi.jpg");
	
	addDog("Pomeranian", "Germany, Poland", "Toy/Companion Dog", "../img/all-breeds/pomeranian.jpg");

	addDog("Poodle", "Germany, France", "Utility/Companion/Gun Dog", "../img/all-breeds/poodle.jpg");

	addDog("Pug", "China", "Toy/Companion Dog", "../img/all-breeds/pug.jpg");

	addDog("Rottweiler", "Germany", "Utility/Guardian Dog", "../img/all-breeds/rottweiler.jpg");
	
	addDog("Saint Bernard", "Italy, Switzerland", "Utility/Guardian Dog", "../img/all-breeds/saint-bernard.jpg");
	
	addDog("Samoyed", "Russia", "Utility/Northern Breed", "../img/all-breeds/samoyed.jpg");	
	
	addDog("Schipperke", "Belgium", "Companion Dog", "../img/all-breeds/schipperke.jpg");
	
	addDog("Scottish Terrier", "Scotland", "Terrior", "../img/all-breeds/scottish-terrier.jpg");
	
	addDog("Shetland Sheepdog", "Scotland", "Herding Dog", "../img/all-breeds/shetland-sheepdog.jpg");
	
	addDog("Shih-Tzu", "China", "Utility/Companion Dog", "../img/all-breeds/shih-tzu.jpg");
	
	addDog("Siberian Husky", "Russia", "Utility/Northern Breed", "../img/all-breeds/siberian-husky.jpg");

	addDog("Weimaraner", "Germany", "Gun Dog", "../img/all-breeds/weimaraner.jpg");		

	addDog("West Highland White Terrier", "Scotland", "Terrior", "../img/all-breeds/west-highland-white-terrier.jpg");
	
	addDog("Yorkshire Terrier", "England", "Toy/Companion Dog", "../img/all-breeds/yorkshire-terrier.jpg");
		
	var pages = dogs.length / ELEMS_PER_PAGE;
	if(dogs.length % ELEMS_PER_PAGE > 0) pages++;
	if(page < 0 || page > pages) return;
	
	$("#" + tableName + " tr").remove();
	$("#" + tableName).append("<thead></thead>");
	$("#" + tableName + " thead").append("<tr id='dogTableHeaders'></tr>");
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