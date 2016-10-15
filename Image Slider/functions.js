
var sliderText = [];
var elements = ["actinium", "aluminum", "americium", "antimony", "argon", "arsenic", "astatine", "barium", "berkelium", "beryllium", "bismuth", "bohrium", "boron", "bromine", "cadmium", "calcium", "californium", "carbon", "cerium", "cesium", "chlorine", "chromium", "cobalt", "copernicium", "copper", "curium", "darmstadtium", "dubnium", "dysprosium", "einsteinium", "nihonium ", "moscovium ", "tennessine ", "oganesson ", "erbium", "europium", "fermium", "flerovium", "fluorine", "francium", "gadolinium", "gallium", "germanium", "gold", "hafnium", "hassium", "helium", "holmium", "hydrogen", "indium", "iodine", "iridium", "iron", "krypton", "lanthanum", "lawrencium", "lead", "lithium", "livermorium", "lutetium", "magnesium", "manganese", "meitnerium", "mendelevium", "mercury", "molybdenum", "neodymium", "neon", "neptunium", "nickel", "niobium", "nitrogen", "nobelium", "osmium", "oxygen", "palladium", "phosphorus", "platinum", "plutonium", "polonium", "potassium", "praseodymium", "promethium", "protactinium", "radium", "radon", "rhenium", "rhodium", "roentgenium", "rubidium", "ruthenium", "rutherfordium", "samarium", "scandium", "seaborgium", "selenium", "silicon", "silver", "sodium", "strontium", "sulfur", "tantalum", "technetium", "tellurium", "terbium", "thallium", "thorium", "thulium", "tin", "titanium", "tungsten", "uranium", "vanadium", "xenon", "ytterbium", "yttrium", "zinc", "zirconium"]


function textHover() {
    $('.header-class').mouseenter( function(){
        $('.header').fadeOut("show", function(){
            $(this).hide();
        });
    });

    $('.header-class').mouseleave( function(){
        $('.header').fadeIn("slow", function(){
            $(this).show();
        });
    });
}

function getText(){
    $('.para').each(function(index){
        sliderText.push($(this).eq(index).html());
        console.log($(this).eq(index).html()) ;
    });
}

$(document).ready(function(){

    $('.header').html("Ready");
    $('.header-class').css({marginBottom: "100px", marginTop: "25px"});
    $('.p-class').css({marginTop: "100px"});
    
    // textHover();
    getText();
   // for (item in sliderText)
  //       alert(item);
   
});