
var elements = ["actinium", "aluminum", "americium", "antimony", "argon", "arsenic", "astatine", "barium", "berkelium", "beryllium", "bismuth", "bohrium", "boron", "bromine", "cadmium", "calcium", "californium", "carbon", "cerium", "cesium", "chlorine", "chromium", "cobalt", "copernicium", "copper", "curium", "darmstadtium", "dubnium", "dysprosium", "einsteinium", "nihonium ", "moscovium ", "tennessine ", "oganesson ", "erbium", "europium", "fermium", "flerovium", "fluorine", "francium", "gadolinium", "gallium", "germanium", "gold", "hafnium", "hassium", "helium", "holmium", "hydrogen", "indium", "iodine", "iridium", "iron", "krypton", "lanthanum", "lawrencium", "lead", "lithium", "livermorium", "lutetium", "magnesium", "manganese", "meitnerium", "mendelevium", "mercury", "molybdenum", "neodymium", "neon", "neptunium", "nickel", "niobium", "nitrogen", "nobelium", "osmium", "oxygen", "palladium", "phosphorus", "platinum", "plutonium", "polonium", "potassium", "praseodymium", "promethium", "protactinium", "radium", "radon", "rhenium", "rhodium", "roentgenium", "rubidium", "ruthenium", "rutherfordium", "samarium", "scandium", "seaborgium", "selenium", "silicon", "silver", "sodium", "strontium", "sulfur", "tantalum", "technetium", "tellurium", "terbium", "thallium", "thorium", "thulium", "tin", "titanium", "tungsten", "uranium", "vanadium", "xenon", "ytterbium", "yttrium", "zinc", "zirconium"]

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
	map["aluminum"] = 13;
	map["copper"] = 27;
	map["ytterbium"] = 70;
	map["ununoctium"] = 118;
}	

function getLayers(element){
	initElectronNbr();
	initMap();

	var electrons = map[element];
	var index = 0;
	var result = "";

	console.log(electrons);
	while (electrons > 0 && index <  layers.length){
		var whatLayer  = layers[index].split('')[1];
		var nbr = electronsNbr[whatLayer];

		console.log(nbr + " " + whatLayer);
		if (electrons >= nbr && nbr != 0)
			result += layers[index] + nbr.toString() + " ";
		else
			result += layers[index] + electrons.toString() + " ";
		electrons -= nbr;
		index++;
	}

	return result;
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

		console.log(getLayers("ununoctium"));

});