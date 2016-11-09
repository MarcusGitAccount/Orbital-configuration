
var elements = ["actinium", "aluminum", "americium", "antimony", "argon", "arsenic", "astatine", "barium", "berkelium", "beryllium", "bismuth", "bohrium", "boron", "bromine", "cadmium", "calcium", "californium", "carbon", "cerium", "cesium", "chlorine", "chromium", "cobalt", "copernicium", "copper", "curium", "darmstadtium", "dubnium", "dysprosium", "einsteinium", "nihonium", "moscovium", "tennessine ", "oganesson ", "erbium", "europium", "fermiun", "flerovium", "fluorine", "francium", "gadolinium", "gallium", "germanium", "gold", "hafnium", "hassium", "helium", "holmium", "hydrogen", "indium", "iodine", "iridium", "iron", "krypton", "lanthanum", "lawrencium", "lead", "lithium", "livermorium", "lutetium", "magnesium", "manganese", "meitnerium", "mendelevium", "mercury", "molybdenum", "neodymium", "neon", "neptunium", "nickel", "niobium", "nitrogen", "nobelium", "osmium", "oxygen", "palladium", "phosphorus", "platinum", "plutonium", "polonium", "potassium", "praseodymium", "promethium", "protactinium", "radium", "radon", "rhenium", "rhodium", "roentgenium", "rubidium", "ruthenium", "rutherfordium", "samarium", "scandium", "seaborgium", "selenium", "silicon", "silver", "sodium", "strontium", "sulfur", "tantalum", "technetium", "tellurium", "terbium", "thallium", "thorium", "thulium", "tin", "titanium", "tungsten", "uranium", "vanadium", "xenon", "ytterbium", "yttrium", "zinc", "zirconium"
]

var map = new Object();
var electronsNbr = new Object();

var layers = [
	"1s",  "2s", "2p", "3s",  "3p", "4s" , "3d",  "4p", "5s", "4d", "5p", "6s", "4f", "5d", "6p", "7s", "5f", "6d", "7p"
]

function initElectronNbr(){
	electronsNbr["s"] = 2;
	electronsNbr["p"] = 6;
	electronsNbr["d"] = 10;
	electronsNbr["f"] = 14;
}

function initMap(){
	map["actinium"] = 89; map["aluminum"] = 13; map["americium"] = 95; map["antimony"] = 51; map["argon"] = 18; map["arsenic"] = 33; map["astatium"] = 85; map["barium"] = 56; map["berkelium"] = 97; map["beryllium"] = 4; map["bismuth"] = 83; map["bohrium"] = 107; map["boron"] = 5; map["bromine"] = 35; map["cadmium"] = 48; map["calcium"] = 20; map["californium"] = 98; map["carbon"] = 6; map["cerium"] = 58; map["caesium"] = 55; map["chlorine"] = 17; map["chromium"] = 24; map["cobalt"] = 27; map["copernicium"] = 112; map["copper"] = 29; map["curium"] = 96; map["darmstadtium"] = 110; map["dubnium"] = 105; map["dysprosium"] = 66; map["einsteinium"] = 99; map["nihonium"] = 113; map["moscovium"] = 115; map["tennessine"] = 117; map["oganesson"] = 118; map["erbium"] = 68; map["europium"] = 63; map["fermiun"] = 100; map["flerovium"] = 114; map["fluorine"] = 9; map["francium"] = 87; map["gadolinium"] = 64; map["gallium"] = 31; map["germanium"] = 32; map["gold"] = 79; map["hafnium"] = 72; map["hassnium"] = 108; map["helium"] = 2; map["holmium"] = 67; map["hydrogen"] = 1; map["indium"] = 49; map["iodine"] = 53; map["iridium"] = 77; map["iron"] = 26; map["krypton"] = 36; map["lanthanum"] = 57; map["lawrencium"] = 103; map["lead"] = 82; map["lithium"] = 3; map["livermorium"] = 116; map["lutetium"] = 71; map["magnesium"] = 12; map["manganese"] = 25; map["meitnerium"] = 109; map["mendelevium"] = 101; map["mercury"] = 80; map["molybdenum"] = 42; map["neodymium"] = 60; map["neon"] = 10; map["neptunium"] = 93; map["nickel"] = 28; map["niobium"] = 41; map["nitrogen"] = 7; map["nobelium"] = 102; map["osmium"] = 76; map["oxygen"] = 8; map["palladium"] = 46; map["phosphorous"] = 15; map["platinum"] = 78; map["plutonium"] = 94; map["polonium"] = 84; map["potassium"] = 19; map["praseodymium"] = 59; map["promethium"] = 61; map["protactinium"] = 91; map["radium"] = 88; map["radon"] = 86; map["rhenium"] = 75; map["rhodium"] = 45; map["roentgenium"] = 111; map["rubidium"] = 37; map["ruthenium"] = 44; map["rutherfordium"] = 104; map["samarium"] = 62; map["scandium"] = 21; map["seaborgium"] = 106; map["selenium"] = 34; map["silicon"] = 14; map["silver"] = 47; map["sodium"] = 11; map["strontium"] = 38; map["sulfur"] = 16; map["tantalum"] = 73; map["technetium"] = 43; map["tellurium"] = 52; map["terbium"] = 65; map["thallium"] = 81; map["thorium"] = 90; map["thulium"] = 69; map["tin"] = 50; map["titanium"] = 22; map["tungsten"] = 74; map["uranium"] = 92; map["vanadium"] = 23; map["xenon"] = 54; map["ytterbium"] = 70; map["yttrium"] = 39; map["zinc"] = 30; map["zirconium"] = 40;
}	

function getLayers(element){
	initElectronNbr();
	initMap();

	var electrons = map[element];
	var index = 0;
	var result = [];

	console.log(electrons);
	while (electrons > 0 && index <  layers.length){
		var whatLayer  = layers[index].split('')[1];
		var nbr = electronsNbr[whatLayer];
		var partialResult = "";
		// console.log(nbr + " " + whatLayer);
		if (electrons >= nbr && nbr != 0)
			result.push(layers[index] + nbr.toString());
		else
			result.push(layers[index] + electrons.toString())
		electrons -= nbr;
		index++;
	}

	if (index > 4)
		result = dealWithLastTwoLayers(result);
	return result;
}

function dealWithLastTwoLayers(array){
	console.log(array.length);
	var lastLayer = array[array.length - 1].split('');
	var penLastLayer = array[array.length - 2].split('');
	
	if (lastLayer[1] == 'd' && penLastLayer[1] == 's') {
		var lastNbr = parseInt(lastLayer[2]);
		var penLastNbr = parseInt(penLastLayer[2]);

		if ((lastNbr == 9 || lastNbr == 4) && penLastNbr == 2) {
			lastLayer[2] = (lastNbr + 1).toString();
			penLastLayer[2] = (penLastNbr - 1).toString();

			array[array.length-1] = lastLayer.join('');
			array[array.length-2] = penLastLayer.join('');
		}
	}

	return array;
}

function getResultAsString(element){
	var result = getLayers(element);
	var resultString = "";

	for (var j = 0; j < result.length; j++){
		result[j] = result[j].substr(0, 2) + "<sup>" + result[j].substr(2, result[[j]].length - 2) + "</sup>";
		if (j % 2 == 0)
			resultString += "<b>" + result[j] + "</b>";
		else				
			resultString += result[j];
		resultString += " "; 
	}

	return resultString;
}

function alterWikiImageLink(link, size){
	var newLink = link.substr(0, 8);
	var array;
	var sizeArray;

	link = link.substr(8, link.length);
	array = link.split('/');
	sizeArray = array[array.length - 1].split("px");
	sizeArray[0] = size.toString();
	array[array.length - 1] = sizeArray.join("px");
	link = array.join('/');
	newLink += link;

	return newLink;
}

function printOutput(element){
	var url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch='+ element +'&callback=?'
	var HTML = "<div class=\"col s12 m7\">";

	$("#result-content").html(getResultAsString(element));
	$("#result-href").attr("href", "https://www.britannica.com/science/" + element);
	$("#result-href").css("visibility", "visible");
	$("#result-href").text("More info about " + element);

	$.getJSON(url, function(data){
		var pages = data.query.pages;
		Object.keys(data.query.pages).forEach(function(index){
			var link = "https://en.wikipedia.org/?curid=" + pages[index].pageid;
			var title = "<h5>" + pages[index].title + "</h5>";
			var extract = "<p>" + pages[index].extract + "</p>"
			var imageSrc = pages[index].hasOwnProperty("thumbnail") ? pages[index].thumbnail.source : "";
			var img = "<img alt='Wiki image' src='" + alterWikiImageLink(imageSrc, 150) + "'/>";
			var listItem = "<div class=\"card horizontal\"><div class=\"card-image\">" + img + "</div><div class=\"card-stacked\"><div class=\"card-content\"><span class=\"card-title\">" + title + "</span>" + extract + "</div>" + "<div class=\"card-action\"><a class=\"blue-text\" href=\"" + link + "\">More info</a></div></div></div>";

			console.log(imageSrc);
			HTML += listItem;
		});
		HTML += "</div>"
		$("#wikipedia-results").html(HTML);
	});
}

function dealWithInput(){
	$(document).ready(function(){
		var element = document.getElementById("elements-box").value.trim();
		var contentSize = (getResultAsString(element).length * 4.54).toString();

		console.log(element);
		printOutput(element);
	});
}

function textboxIsEmpty(){
	var textbox = document.getElementById("elements-box").value;

	if (value == "" || value == null)
		return true;
	return false;
}

function failedAttemptToAddAnchors(){
	$("path").each(function(){
		console.log(this.id);
		var anchor = $("<a></a>");
		var title = $("<title>" + this.id + "</title>");

		anchor.on("click", function(){
			alert("Clicking stuff");
		});/*
		anchor.append(title);
		anchor.append(this);*/
		$("#layer1").append(anchor);
		anchor.append(title);
		anchor.append(this);
	});
}

$(document).ready(function() {
	$('#elements-box').autocomplete({
		source: elements,
		minlength: 2
	})

	$.ui.autocomplete.filter = function (array, term) {
		var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(term), "i");
		
		return $.grep(array, function (value) {
			return matcher.test(value.label || value.value || value);
		});
	};

	$(document).keyup(function(e){
		if (e.keyCode == 13)
			$("#btnInput").delay(1000).trigger('click');       
	});
	// console.log(getLayers("scandium"));

	var result = "{"
	$("path").each(function(index){
	//	console.log((index + 1).toString() + " " + this.id);
		result += '"' + this.id + '"' + ", ";
	})
	result += "}";
	// console.log(result);


});
