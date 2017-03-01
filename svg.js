var xmlns = "http://www.w3.org/2000/svg"
var svg = document.getElementById("vimage")

var prevX;
var prevY;


var drawCircle = function( event ){
    var c = document.createElementNS( xmlns, "circle" );    
    c.setAttribute( "cx", event.offsetX);
    c.setAttribute( "cy", event.offsetY);
    c.setAttribute( "fill", "cyan" );
    c.setAttribute( "r", 10 );
    svg.appendChild( c );
    
    if( prevX != undefined && prevY != undefined ){
        var l = document.createElementNS( xmlns, "line" );
        l.setAttribute( "style", "stroke:rgb(0,0,0); stroke-width:2");
        l.setAttribute( "x1", prevX );
        l.setAttribute( "y1", prevY );
        l.setAttribute( "x2", event.offsetX );
        l.setAttribute( "y2", event.offsetY );
        svg.appendChild( l );
    }

    prevX = event.offsetX;
    prevY = event.offsetY;
    
}


var clearSVG = function(){
    var ch = svg.children;
    var l = ch.length;
    var i;
    for( i = 0; i < l; i++ ){
        svg.removeChild( ch[0] );
    }
    prevX = undefined;
    prevY = undefined;
}

var btn = document.getElementById( "clear" );
btn.addEventListener( "click", clearSVG );


svg.addEventListener( "click", drawCircle );
