// start slingin' some d3 here.

var height = 450;
var width = 700;
var r = 10;
var MAX_ENEMIES = 30;

var svg = d3.select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height)
  .attr('shape-rendering', 'geometricPrecision');

for ( var i = 0; i < MAX_ENEMIES; i++ ) {
  svg.append('circle')
    .attr('fill', 'black')
    .attr('r', r)
    .attr('cx', Math.random() * (width - 2 * r) + r)
    .attr('cy', Math.random() * (height - 2 * r) + r);
}

var update = function() {
  var circles = svg.selectAll('circle');

  circles.each(function() {
    var circle = d3.select(this);
    
    circle
      .transition()
      .duration(1000)
      .attr('cx', Math.random() * (width - 2 * r) + r)
      .attr('cy', Math.random() * (height - 2 * r) + r);
  });
  
  setTimeout(update, 1000);
};

update();

// make an array of objects
  // pass to the rendering function
