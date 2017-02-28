var xmlns = "https://www.w3.org/2000/svg"
var svg = document.getElementById("vimage")

var drawCircle = function( event ){
    var c = document.createElementNS( xmlns, "circle" );
    c.setAttribute( "fill", "#cc99ff")
    c.setAttribute( "r", "10" )
    c.setAttribute( "cx", e.offsetX )
    c.setAttribute( "cy", e.offsetY )
    
}
