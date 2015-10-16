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

var Player = function() {
  this.path = 'm-7.5,1.62413c0,-5.04095 4.08318,-9.12413 9.12414,-9.12413c5.04096,0 9.70345,5.53145 11.87586,9.12413c-2.02759,2.72372 -6.8349,9.12415 -11.87586,9.12415c-5.04096,0 -9.12414,-4.08318 -9.12414,-9.12415z';
  this.fill =   '#ff6600';
  this.x = width / 2;
  this.y = height / 2;
  this.r = 5;
  this.angle = 270;
}

var transform = function(x, y, angle) {
  var playerTranslate = 'translate(' + x + ',' + y + ')';
  var playerRotate = 'rotate(' + angle + ')';
  var playerTransform = playerTranslate + ' ' + playerRotate;
  return playerTransform;
}

var player = new Player();

var dragBehavior = d3.behavior.drag().on('drag', function() {
  var draggedPiece = d3.select(this);
  var newAngle = Math.atan2(d3.event.dy, d3.event.dx) * 180 / Math.PI;
  draggedPiece.attr('transform', transform(d3.event.x, d3.event.y, newAngle));
})

svg.append('svg:path')
  .attr('class', 'player')
  .attr('d', player.path)
  .attr('fill', player.fill)
  .attr('transform', transform(player.x, player.y, player.angle))
  .call(dragBehavior);

var update = function() {
  var circles = svg.selectAll('circle');

  circles.each(function() {
    var circle = d3.select(this);
    
    circle
      .transition()
      .duration(2000)
      .attr('cx', Math.random() * (width - 2 * r) + r)
      .attr('cy', Math.random() * (height - 2 * r) + r);
  });
  
  setTimeout(update, 2000);
};

update();