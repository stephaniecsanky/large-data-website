function Breeds(filepath){
	
	//config
	var tableName = "dogTable";
	
	//pagination variables
	var ELEMS_PER_PAGE = 10;
	
	var dogs = [];
	
	var addDog = function(name, country, job, classification, image){
		var dog = {};
		dog.name = name;
		dog.country = country;
		dog.job = job;
		dog.classification = classification;
		dog.image = image;
		dogs.push(dog);
	};
	
	var countProperties = function(obj){
		var count = 0;
		for(var k in obj){
			count++;
		}
		return count;
	};
	
	var addDogBreeds = function(){
		$.ajax(filepath, {
			async: false,
			type: "GET",
			success: function(data){
			//alert(data);
			var split = data.split("\n");
			$(split).each(function(i, e){
				//line = e
				var lineSplit = e.split("|");
				var name = "";
				var country = "";
				var job = "";
				var classification = "";
				var img = "";
				$(lineSplit).each(function(i, e){
					if(i===0) name = e;
					if(i==1) country = e;
					if(lineSplit.length == 3){
						if(i==2) img = e;
					}else if(lineSplit.length == 4){
						if(i==2) classification = e;
						if(i==3) img = e;
					}else if(lineSplit.length == 5){
						if(i==2) job = e;
						if(i==3) classification = e;
						if(i==4) img = e;
					}
				});
				addDog(name, country, job, classification, img);
			});
		}
		});
	};
	
	addDogBreeds();
	
	this.getPage = function(page){
		var start = ELEMS_PER_PAGE * (page - 1);
		var pages = dogs.length / ELEMS_PER_PAGE;
		if(dogs.length % ELEMS_PER_PAGE > 0) pages++;
		if(page < 0 || page > pages) return;
		var arr = [];
		$(dogs).each(function(i, e){
			if(i >= start && i < start + ELEMS_PER_PAGE){
				arr.push(e);
			}
		});
		return arr;
	};
	
	this.fillTable = function(page){
		var dogPage = this.getPage(page);
		
		//alert(sortorder + " " + ascending + " " + page);
		//alert(dogPage.length);
		
		if(typeof dogPage == "undefined" || dogPage == "null") return;
		this.fill(dogPage);
	};
	
	this.search = function(searchTerms){
		var results = [];
		$(dogs).each(function(i, e){
			if(e.name.indexOf(searchTerms) > -1 || e.country.indexOf(searchTerms) > -1 || e.classification.indexOf(searchTerms) > -1){
				results.push(e);
			}
		});
		return results;
	};
	
	this.fill = function(arr){
		$("#" + tableName + " tr").remove();
		$("#" + tableName).append("<thead></thead>");
		$("#" + tableName + " thead").append("<tr id='dogTableHeaders'></tr>");
		$("#dogTableHeaders").append("<th>Breed Name</th>");
		$("#dogTableHeaders").append("<th>Country of Origin</th>");
		if(arr[0].job.length > 0)
			$("#dogTableHeaders").append("<th>Job</th>");
		if(arr[0].classification.length > 0)
			$("#dogTableHeaders").append("<th>Classification</th>");
		$("#dogTableHeaders").append("<th>Image</th>");
		$(arr).each(function(i, e){
			var id = "dog" + i;
			$("#" + tableName).append("<tr id='" + id + "'></tr>");
			$("#" + id).append("<td>" + e.name + "</td>");
			$("#" + id).append("<td>" + e.country + "</td>");
			if(e.job.length > 0)
				$("#" + id).append("<td>" + e.job + "</td>");
			if(e.classification.length > 0)
				$("#" + id).append("<td>" + e.classification + "</td>");
			$("#" + id).append("<td><img src='" + e.image + "' alt='" + e.name + "'/></td>");
		});
	};
	
}