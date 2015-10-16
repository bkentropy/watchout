// start slingin' some d3 here.

var height = 450;
var width = 700;
var r = 10;

var svg = d3.select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height)
  .attr('shape-rendering', 'geometricPrecision');

svg.append('circle')
  .attr('fill', 'black')
  .attr('r', r)
  .attr('cx', width/2)
  .attr('cy', height/2);

// make an array of objects
  // pass to the rendering function
