var canvas;
var points_list;
var triangles;

var point = {
    x: 0,
    y: 0,
    z: 0
};

var draw = function(){
    var body = document.body,
    html = document.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight,html.clientHeight, html.scrollHeight, html.offsetHeight );
    
    var width = document.body.offsetWidth;
        
    var pattern = Trianglify({width: width, height: height});
    pattern.canvas(canvas);
};

var generate_points = function(){
    
};

document.addEventListener("DOMContentLoaded", function (event) { 
    canvas = document.getElementById("draw");
    
    draw();
});