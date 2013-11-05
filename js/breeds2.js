fillTable = function(page){
	
	//config
	var tableName = "dogTable";
	
	//pagination variables
	var ELEMS_PER_PAGE = 9;
	var start = ELEMS_PER_PAGE * (page - 1);
	
	var dogs = [];
	
	addDog = function(name, country, job, classification, image){
		var dog = {};
		dog.name = name;
		dog.country = country;
		dog.job = job;
		dog.classification = classification;
		dog.image = image;
		dogs.push(dog);
	};


	addDog("Australian Shepherd", "United States", "Illicit Substance Detection, Tracking", "Herding Breed", "../img/all-breeds/australian-shepherd.jpg");
	
	addDog("Basset Hound", "France", "Illicit Substance Detection", "Scenthound", "../img/all-breeds/basset-hound.jpg");
	
	addDog("Beagle", "England", "Illicit Substance Detection, Cadaver-sniffing", "Scenthound", "../img/all-breeds/beagle.jpg");

	addDog("Belgian Malinois", "Belgium", "Public Order Enforcement, Illicit Substance Detection", "Herding Dog", "../img/police-dogs/belgian-malinois.jpg");
	
	addDog("Bloodhound", "Belgium/France or England/Scotland", "Public Order Enforcement, Tracking, Cadaver-sniffing", "Hound", "../img/police-dogs/bloodhound.jpg"); 
	
	addDog("Coonhound", "United States", "Tracking", "Hound", "../img/police-dogs/coonhound.jpg");
	
	addDog("Doberman Pinscher", "Germany", "Public Order Enforcement", "Utility/Guardian Dog", "../img/all-breeds/doberman-pinscher.jpg");
	
	addDog("Dutch Shepherd", "Netherlands", "Public Order Enforcement", "Herding", "../img/police-dogs/dutch-shepherd.jpg"); 
	
	addDog("English Cocker Spaniel", "England", "Illicit Substance Detection", "Gun Dog", "../img/police-dogs/english-cocker-spaniel.jpg"); 

	addDog("English Springer Spaniel", "England", "Illicit Substance Detection", "Gun Dog", "../img/all-breeds/english-springer-spaniel.jpg");
	
	addDog("Foxhound", "United States, Britain", "Illicit Substance Detection", "Hound", "../img/police-dogs/foxhound.jpg"); 
	
	addDog("German Shepherd", "Germany", "Public Order Enforcement, Illicit Substance Detection, Tracking, Cadaver-sniffing", "Herding Dog", "../img/all-breeds/german-shepherd.jpg");
	
	addDog("Golden Retriever", "Scotland", "Illicit Substance Detection, Tracking, Cadaver-sniffing", "Gun Dog", "../img/all-breeds/golden-retriever.jpg");
	
	addDog("Labrador Retriever", "Canada, England", "Illicit Substance Detection, Tracking, Cadaver-sniffing", "Gun Dog", "../img/all-breeds/labrador-retriever.jpg");

	addDog("Schnauzer", "Germany", "Illicit Substance Detection", "Herding Dog, Terrier", "../img/police-dogs/schnauzer.jpg");

	addDog("Sulimov Dog", "Russian", "Illicit Substance Detection", "Herding/Working Dog", "../img/police-dogs/sulimov.jpg");


	addDog("Weimaraner", "Germany", "Illicit Substance Detection", "Gun Dog", "../img/all-breeds/weimaraner.jpg");		

		
	var pages = dogs.length / ELEMS_PER_PAGE;
	if(dogs.length % ELEMS_PER_PAGE > 0) pages++;
	if(page < 0 || page > pages) return;
	
	$("#" + tableName + " tr").remove();
	$("#" + tableName).append("<thead></thead>");
	$("#" + tableName + " thead").append("<tr id='dogTableHeaders'></tr>");
	$("#dogTableHeaders").append("<th>Breed Name</th>");
	$("#dogTableHeaders").append("<th>Country of Origin</th>");
	$("#dogTableHeaders").append("<th>Job</th>");		
	$("#dogTableHeaders").append("<th>Classification</th>");
	$("#dogTableHeaders").append("<th>Image</th>");
	$(dogs).each(function(i, e){
		if(i >= start && i < start + ELEMS_PER_PAGE){
			var id = "dog" + i;
			$("#" + tableName).append("<tr id='" + id + "'></tr>");
			$("#" + id).append("<td>" + e.name + "</td>");
			$("#" + id).append("<td>" + e.country + "</td>");
			$("#" + id).append("<td>" + e.job + "</td>");
			$("#" + id).append("<td>" + e.classification + "</td>");
			$("#" + id).append("<td><img src='" + e.image + "' alt='" + e.name + "'/></td>");
		}
	});
};
	
	
	
