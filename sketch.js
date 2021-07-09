function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  let seconds = second();
  let hours = hour();
  let minutes = minute();
  // The same as doing: background(220); or --> background(220,220,220);
  background("white");
  translate(width / 2, height / 2);
  rotate(-90);
  noFill();

  strokeWeight(1);

  stroke("red");
  let secondsArc = map(seconds, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondsArc);

  stroke(0, 0, 255);
  let minutesArc = map(minutes, 0, 60, 0, 360);
  arc(0, 0, 250, 250, 0, minutesArc);

  stroke("green");
  let hoursArc = map(hours % 12, 0, 12, 0, 360);
  arc(0, 0, 200, 200, 0, hoursArc);

  push();
  stroke("black");
  rotate(secondsArc);
  line(0, 0, 150, 0);
  pop();

  push();
  stroke("black");
  rotate(minutesArc);
  line(0, 0, 120, 0);
  pop();

  push();
  stroke("red");
  rotate(hoursArc);
  line(0, 0, 97, 0);
  pop();

  rotate(90);
  strokeWeight(1);
  text("3", 160, 0);

  text("6", 0, 160);

  text("9", -160, 0);

  text("12", 0, -160);
  strokeWeight(5);
  stroke("gold");
  point(0, 0);
}
