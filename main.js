function preload() {
     img = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaThwO6rycseJuICLQvDidX2TfbVf6dr25ZQ&usqp=CAU');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
 image(img, 106, 110, 150, 120);
  
  fill(96, 11, 153);
  stroke(96, 11, 153);
  circle(50, 50, 72);
  circle(350, 50, 72);
  circle(350, 350, 72);
  circle(50, 350, 72);
  rect(35, 75, 30, 250);
  rect(335, 75, 30, 250);
  rect(70, 40, 260, 30);
  rect(70, 340, 260, 30);
}