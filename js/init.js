var lineGroup = new Group();
var lineCount = 300;
for (var i = 0; i < lineCount; i++) {
  var linePath = new Path.Line([0, 0], [0, 0]);
  lineGroup.addChild(linePath);
}
lineGroup.strokeColor = 'black';
// var path1 = project.importJSON('["Path",{"pathData":"-423,-62.663 -212.667,-185.477 -167.083,-185.31 -306.001,-67.31 -249.001,-19.31 -311.668,33.334 	44.995,232.357 397.999,34.69 162.995,238.023 518,38.69 256,-185.31 300,-185.477 513,-61.31 397.999,34.69 136,-190.643 181.5,-190.477 390.999,-67.31 44.995,232.357 -249.001,-19.31 -48.917,-190.894 -93.339,-190.976 -306.001,-67.31 -367.501,-13.81 -430.334,39.336 -74.334,238.668 "}]');
var path1 = new Path.Rectangle([200, 200], [100, 100]);
var path2 = new Path.RegularPolygon(new Point(80, 70), 3, 50);
path1.position = view.center;
path2.position = view.center;
path2.position.y += 50;
// var path2 = path1.clone();
path1.scale(20); //default 5
path2.scale(4); //default 2
// path1.strokeColor = 'rgba(255,25,25)';
// path2.strokeColor = 'rgba(255,25,25)';
var length1 = path1.length;
var length2 = path2.length;
canvas.addEventListener('mousemove', MouseMove, false);
mouse = {
  x: 2,
  y: 0
}

function MouseMove(event) {
  mouse.x = event.pageX - canvas.offsetLeft;
  mouse.y = event.pageY - canvas.offsetLeft;
}

function onFrame(event) {
  var vector = new Point({
    angle: -event.count % 360,
    length: 10 * Math.tan(-event.count / 30) + 800
  });
  // path1.rotate(-0.05);
  path1.rotate(0.05 * Math.sin(event.count / 10));
  // path1.position = view.center - vector;
  path2.rotate(0.05);
  path1.position = view.center + vector.normalize(50 * Math.cos(event.count / 50) + 10);
  for (var i = 0; i < lineCount; i++) {
    var path = lineGroup.children[i];
    var l1 = (mouse.x * length1 / lineCount * (i + event.count / 50000)) % length1;
    var l2 = (length2 / lineCount * (i + event.count / 50)) % length2;
    path.firstSegment.point = path1.getPointAt(l1),
      path.lastSegment.point = path2.getPointAt(l2);
  }
}

function MouseMove(event) {
  mouse.x = event.pageX - canvas.offsetLeft;
  mouse.y = event.pageY - canvas.offsetLeft;
}