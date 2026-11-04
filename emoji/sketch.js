function setup() {
  createCanvas(500, 500);
}

function draw() {
    background(67);;

  //clock at 11.59
  stroke(0);
  strokeWeight(3);
  fill(120);
  ellipse(410, 80, 110, 110);
  fill(255);
  ellipse(410, 80, 85, 85);
  line(410, 80, 408, 55);
  line(410, 80, 406, 44);

  // the face
  stroke(0);
  strokeWeight(3);
  fill(150, 190, 215);
  ellipse(250, 248, 364, 364);

      // phone light
  noStroke();
  fill(220, 240, 255, 90);
  ellipse(250, 300, 500, 350);

  // eye circles
  fill(90, 120, 155);
  ellipse(180, 223, 98, 98);
  fill(90, 120, 155);
  ellipse(322, 223, 98, 98);

  // left eye
  stroke(0);
  strokeWeight(3);
  fill(255);
  ellipse(180, 206, 77, 77);

  // right eye
  stroke(0);
  strokeWeight(3);
  fill(255);
  ellipse(320, 206, 77, 77);

  // left pupil
  fill(0);
  ellipse(205, 209, 31, 31);

  // right pupil
  fill(0);
  ellipse(348, 209, 31, 31);

  // sad eyebrows
  stroke(0);
  strokeWeight(3);
  line(150, 150, 210, 136);
  line(300, 140, 360, 153);

  // mouth
  line(200, 330, 300, 335);
  line(200, 320, 200, 345);
  line(300, 320, 300, 345);

  // phone
  stroke(0);
  strokeWeight(3);
  fill(40);
  rect(215, 374, 70, 126);

    // fingers
  stroke(0);
  strokeWeight(3);
  fill(110, 150, 180);
  ellipse(220, 455, 24, 60);
  fill(110, 150, 180);
  ellipse(280, 450, 24, 60);


    // calendar
  stroke(0);
  strokeWeight(3);
  fill(255);
  rect(25, 35, 80, 80);
  fill(120);
  rect(25, 35, 80, 20);
  fill(255);
  rect(40, 25, 10, 20);
  fill(255);
  rect(80, 25, 10, 20);

}