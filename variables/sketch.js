// the files.


let x = 40;   
let y = 50;  

let sentenceLength;     
let piecesInSentence = 0; 
let wordsInSentence = 0; 
let lastWasWord = false;  

// the words
const allowedWords = ["is", "has", "has been", "are", "including", "of", "at", "in", "the", "and", "was", "by", "to", "on", "with", "for", "were", "not", "a", "an", "had", "have", "will", "would", "should", "could", "may", "from", "into", "as", "that", "which", "who", "their", "its", "after", "before", "during", "without", "under", "against", "between", "regarding", "following", "pending", "allegedly", "no", "any", "all", "been"];

function setup() {
  createCanvas(500, 700);
  background(245, 242, 235); //white paper
  textFont("Courier New");
  textSize(16);
  noStroke();

  //
  sentenceLength = floor(random(3, 8));
}

function draw() {

}

function mouseWheel(event) {
  
//decides what to place
  if (random() < 0.65 || wordsInSentence >= 2 || lastWasWord) {
    let hidden = random(30, 100);
    fill(0);
    rect(x, y - 14, hidden, 18); //rectangle horizontal length
    x = x + hidden + 10;
    lastWasWord = false;
  } else {
    let word = random(allowedWords);
    fill(30);
    text(word, x, y);
    x = x + textWidth(word) + 10;
    wordsInSentence++;
    lastWasWord = true;
  }

  piecesInSentence++;


  if (piecesInSentence >= sentenceLength) {
    fill(30);
    text(".", x - 9, y);
    x = x + 5;


    piecesInSentence = 0;
    wordsInSentence = 0;
    sentenceLength = floor(random(3, 8));
  }


  if (x > width - 140) {
    x = 40;
    y = y + 30;


    if (random() < 0.15) {
      y = y + 30;
    }
  }


  if (y > height - 30) {
    y = 50;
    background(245, 242, 235);
  }


  return false;
}