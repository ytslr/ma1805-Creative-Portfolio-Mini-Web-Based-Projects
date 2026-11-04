let img;
let sound;
let capture;
let started = false;

function preload() {
  img = loadImage('thx.png'); 
  sound = loadSound('thx.mp3'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();
}

function draw() {
  background(0);

  if (started == false) {
    // the drawing
    image(img, width / 2, height / 2);
  } else {
    // the webcam
    image(capture, width / 2, height / 2, width, height);
    filter(INVERT);
  }
}

function mouseClicked() {
 
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }

  if (started == false) {
    started = true;
    sound.play();
  }
}