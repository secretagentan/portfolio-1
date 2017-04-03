function setup() {
  var canvas = createCanvas(300, 300);
  strokeWeight(7);

  canvas.parent('doodle');

  background(235, 109, 109);
}

function draw() {
  if (mouseIsPressed == true){
    cursor(HAND);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

var createScreenshot = document.getElementById('screenshot');
createScreenshot.onclick = function screenshot() {
  console.log('clicked');
  save('myDoodle.png');
  return false;
}
