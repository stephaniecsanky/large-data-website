fillTable = function(page){
	
	//config
	var tableName = "dogTable";
	
	//pagination variables
	var ELEMS_PER_PAGE = 10;
	var start = ELEMS_PER_PAGE * (page - 1);
	
	var dogs = [];
	
	addDog = function(name, country, image){
		var dog = {};
		dog.name = name;
		dog.country = country;
		dog.image = image;
		dogs.push(dog);
	};
	
	
	addDog("Australian Cattle Dog/Blue Heeler", "Australia", "../img/herding-dogs/australian-cattle-dog-blue-heeler.jpg");
	
	addDog("Australian Shepherd", "United States", "../img/all-breeds/australian-shepherd.jpg");
	
	addDog("Bearded Collie", "Scotland", "../img/herding-dogs/bearded-collie.jpg");
	
	addDog("Beauceron", "France", "../img/herding-dogs/beauceron.jpg");
	
	addDog("Belgian Malinois", "Belgium", "../img/police-dogs/belgian-malinois.jpg");	
	
	addDog("Belgian Sheepdog", "Belgium", "../img/herding-dogs/belgian-sheepdog.jpg");

	addDog("Bouvier Des Flandres", "Belgium", "../img/herding-dogs/bouvier-des-flandres.jpg");
	
	addDog("Briard", "France", "../img/herding-dogs/briard.jpg");
	
	addDog("Canaan", "Middle East", "../img/herding-dogs/canaan.jpg");
	
	addDog("Collie", "Scotland", "../img/all-breeds/collie.jpg");
	
	addDog("Corgi", "Britain", "../img/herding-dogs/corgi.jpg");
	
	addDog("German Shepherd", "Germany", "../img/all-breeds/german-shepherd.jpg");
	
	addDog("Icelandic Sheepdog", "Iceland", "../img/herding-dogs/icelandic-sheepdog.jpg");
	
	addDog("Norwegian Buhund", "Norway", "../img/herding-dogs/norwegian-buhund.jpg");

	addDog("Olde English Sheepdog", "England", "../img/herding-dogs/olde-english-sheepdog.jpg");
	
	addDog("Polish Lowland Sheepdog", "Poland", "../img/herding-dogs/polish-sheepdog.jpg");
	
	addDog("Polish Owczarek Nizinny", "Polandno", "../img/herding-dogs/polish-owczarek-nizinny.jpg");
	
	addDog("Puli", "Hungary", "../img/herding-dogs/puli.jpg");
	
	addDog("Pyrenean Shepherd", "France", "../img/herding-dogs/pyrenean-shepherd.jpg");
	
	addDog("Queensland Heeler", "Australia", "../img/herding-dogs/queensland-heeler.jpg");

	addDog("Shetland Sheepdog", "Scotland", "../img/all-breeds/shetland-sheepdog.jpg");
	
	addDog("Swedish Valhund", "Sweden", "../img/herding-dogs/swedish-valhund.jpg");
	
	addDog("Welsh Corgi", "Wales", "../img/all-breeds/pembroke-welsh-corgi.jpg");
	
	
	var pages = dogs.length / ELEMS_PER_PAGE;
	if(dogs.length % ELEMS_PER_PAGE > 0) pages++;
	if(page < 0 || page > pages) return;
	
	$("#" + tableName + " tr").remove();
	$("#" + tableName).append("<tr id='dogTableHeaders'></tr>");
    $("#dogTableHeaders").append("<th>Breed Name</th>");
    $("#dogTableHeaders").append("<th>Country of Origin</th>");
    $("#dogTableHeaders").append("<th>Image</th>");
		$(dogs).each(function(i, e){
		if(i >= start && i < start + ELEMS_PER_PAGE){
			var id = "dog" + i;
			$("#" + tableName).append("<tr id='" + id + "'></tr>");
			$("#" + id).append("<td>" + e.name + "</td>");
			$("#" + id).append("<td>" + e.country + "</td>");
			$("#" + id).append("<td><img src='" + e.image + "' alt='" + e.name + "'/></td>");
		}
	});
};// JavaScript Document