let numbers = [0, 0, 0];
let timeLeft = 300;      // width of the bar
let wrongTimer = 0;
let failedAttempts = 0;

function setup() {
  createCanvas(400, 600);
  textFont("Arial");
  textAlign(CENTER, CENTER);

  for (let i = 0; i < 3; i++) {
    numbers[i] = floor(random(10, 100));
  }
}

function draw() {
  background(245);

  noStroke();
  fill(30);
  textSize(20);
  text("Tap the number shown", 200, 150);
  text("on your other device", 200, 180);

  stroke(0, 120, 255);
  strokeWeight(3);
  fill(255);
  ellipse(100, 300, 80, 80);
  noStroke();
  fill(30);
  textSize(28);
  text(numbers[0], 100, 300);

  stroke(0, 120, 255);
  strokeWeight(3);
  fill(255);
  ellipse(200, 300, 80, 80);
  noStroke();
  fill(30);
  textSize(28);
  text(numbers[1], 200, 300);

  stroke(0, 120, 255);
  strokeWeight(3);
  fill(255);
  ellipse(300, 300, 80, 80);
  noStroke();
  fill(30);
  textSize(28);
  text(numbers[2], 300, 300);

  // countdown bar
  noStroke();
  fill(210);
  rect(50, 420, 300, 10);
  fill(0, 120, 255);
  rect(50, 420, timeLeft, 10);

  timeLeft--;

  if (timeLeft <= 0) {
    for (let i = 0; i < 3; i++) {
      numbers[i] = floor(random(10, 100));
    }
    timeLeft = 300;
  }

  //
  if (wrongTimer > 0) {
    fill(220, 0, 0);
    textSize(22);
    text("Wrong number. Try again.", 200, 490);
    wrongTimer--;
  }

  // attempts
  fill(120);
  textSize(14);
  text("failed attempts: " + failedAttempts, 200, 560);
}

function mouseClicked() {
  let clicked = false;

  if (dist(mouseX, mouseY, 100, 300) < 40)
  { clicked = true; }
  if (dist(mouseX, mouseY, 200, 300) < 40)
  { clicked = true;}
  if (dist(mouseX, mouseY, 300, 300) < 40)
 { clicked = true;}

  //
  if (clicked == true) {
    wrongTimer = 90;
    failedAttempts++;

    for (let i = 0; i < 3; i++) {
      numbers[i] = floor(random(10, 100));
    }
    timeLeft = 300;
  }

  return false;
}