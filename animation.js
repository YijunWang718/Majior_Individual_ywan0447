//Set a new sequence to store the squares coordinates, rotation angle, and Boolean judgment of whether to rotate
let yellowLines1Start, yellowLines2Start, yellowPartStart, yellowPart1Start, redPartStart, bluePartStart, greyPartStart, greySquareStart, redSquareStart, blueSquareStart;
let rotationAngles = [];
let isRotating = [];
//set time of animation
let startTime;
const interval = 4000;


function Start(){
  // Initialize all starting positions
  yellowLines1Start = yellowLines1.map(point => ({ ...point, y: 0}));
  yellowLines2Start = yellowLines2.map(point => ({ ...point, y: 0 }));
  yellowPartStart = yellowPart.map(point => ({ ...point,y:-height/2}));
  yellowPart1Start = yellowPart1.map(point => ({ ...point, y:-height/2}));
  redPartStart = redPart.map(point => ({ ...point, y:-height/2}));
  bluePartStart = bluePart.map(point => ({ ...point,y:-height/2}));
  greyPartStart = greyPart.map(point => ({ ...point,y:-height/2}));
  greySquareStart = greySquare.map(point => ({ ...point, y: 0 }));
  redSquareStart = redSquare.map(point => ({ ...point, y: 0 }));
  blueSquareStart = blueSquare.map(point => ({ ...point, y: 0 }));
//Set the content for the rotation angle array
  rotationAngles = greyPart.map(() => 0);
  isRotating = greyPart.map(() => true);

}



function falldown(){
  //falling of yellowLines1
  for (let i = 0; i < yellowLines1.length; i++) {
    if (yellowLines1Start[i].y < yellowLines1[i].y) {
      yellowLines1Start[i].y += 11;
      if (yellowLines1Start[i].y > yellowLines1[i].y) {
        yellowLines1Start[i].y = yellowLines1[i].y;// Prevent exceeding target y value
      }
    }
    fill(234, 212, 51); // Yellow
    noStroke();
    rect(yellowLines1Start[i].x, yellowLines1Start[i].y, yellowLines1Start[i].w, yellowLines1Start[i].h);
  }

  //  falling of yellowLines2
  for (let i = 0; i < yellowLines2.length; i++) {
    if (yellowLines2Start[i].y < yellowLines2[i].y) {
      yellowLines2Start[i].y += 10;
      if (yellowLines2Start[i].y > yellowLines2[i].y) {
        yellowLines2Start[i].y = yellowLines2[i].y; // Prevent exceeding target y value
      }
    }
    fill(234, 212, 51); // Yellow
    noStroke();
    rect(yellowLines2Start[i].x, yellowLines2Start[i].y, yellowLines2Start[i].w, yellowLines2Start[i].h);
  }

  //greySquare
  for (let i = 0; i < greySquare.length; i++) {
    if (greySquareStart[i].y < greySquare[i].y) {
      greySquareStart[i].y += 7;
      if (greySquareStart[i].y > greySquare[i].y) {
        greySquareStart[i].y = greySquare[i].y; // Prevent exceeding target y value
    }
  }
    fill(217, 216, 212); // grey
    noStroke();
    rect(greySquareStart[i].x, greySquareStart[i].y,18 * width / 800, 18 * height / 800);
  }

  //redSquare
  for (let i = 0; i < redSquare.length; i++) {
    if (redSquareStart[i].y < redSquare[i].y) {
      redSquareStart[i].y += 3.5;
      if (redSquareStart[i].y > redSquare[i].y) {
        redSquareStart[i].y = redSquare[i].y; // Prevent exceeding target y value
      }
    }
    fill(174, 56, 42); // red
    noStroke();
    rect(redSquareStart[i].x, redSquareStart[i].y,18 * width / 800, 18 * height / 800);
  }

  //blueSquare  
  for (let i = 0; i < blueSquare.length; i++) {
    if (blueSquareStart[i].y < blueSquare[i].y) {
      blueSquareStart[i].y += 5;
      if (blueSquareStart[i].y > blueSquare[i].y) {
        blueSquareStart[i].y = blueSquare[i].y; // Prevent exceeding target y value
      }
    }
    fill(50, 105, 232); // blue
    noStroke();
    rect(blueSquareStart[i].x, blueSquareStart[i].y,18 * width / 800, 18 * height / 800);
  }
}



function tetris() {
  // yellow part rotate
  for (let i = 0; i < yellowPart.length; i++) {
    if (yellowPartStart[i].y < yellowPart[i].y) {
      yellowPartStart[i].y += 3;//speed
      if (yellowPartStart[i].y >= yellowPart[i].y) {
        yellowPartStart[i].y = yellowPart[i].y; // Prevent exceeding target y value
        isRotating[i] = false; // Stop current block rotation
        rotationAngles[i] = Math.round(rotationAngles[i] / 360) * 360; // Ensure rotation angle is a multiple of 360 degrees
      }
    }
    
    push();
    rectMode(CENTER);
    translate(yellowPartStart[i].x + yellowPartStart[i].w / 2, yellowPartStart[i].y + yellowPartStart[i].h / 2); // Adjust position for each block due to modified rectMode
    if (isRotating[i]) {
      rotate(rotationAngles[i]); // Ensure center rotation
      rotationAngles[i] += 1; // Adjust rotation speed
    } else {
      rotate(rotationAngles[i]);
    }
    fill(234, 212, 51);
    noStroke();
    rect(0, 0, yellowPartStart[i].w, yellowPartStart[i].h);
    pop();
  }

  // redPart rotate
  for (let i = 0; i < redPart.length; i++) {
    if (redPartStart[i].y < redPart[i].y) {
      redPartStart[i].y += 2.5;
      if (redPartStart[i].y >= redPart[i].y) {
        redPartStart[i].y = redPart[i].y; // Prevent exceeding target y value
        isRotating[i] = false; // Stop current block rotation
        rotationAngles[i] = Math.round(rotationAngles[i] / 360) * 360; // Ensure rotation angle is a multiple of 360 degrees
      }
    }
    
    push();
    rectMode(CENTER);
    translate(redPartStart[i].x + redPartStart[i].w / 2, redPartStart[i].y + redPartStart[i].h / 2);
    if (isRotating[i]) {
      rotate(rotationAngles[i]);
      rotationAngles[i] += 1; // Adjust rotation speed
    } else {
      rotate(rotationAngles[i]);
    }
    fill(174, 56, 42);
    noStroke();
    rect(0, 0, redPartStart[i].w, redPartStart[i].h);
    pop();
  }

  // bluePart rotate
  for (let i = 0; i < bluePart.length; i++) {
    if (bluePartStart[i].y < bluePart[i].y) {
      bluePartStart[i].y += 1.9;
      if (bluePartStart[i].y >= bluePart[i].y) {
        bluePartStart[i].y = bluePart[i].y; // Prevent exceeding target y value
        isRotating[i] = false; // Stop current block rotation
        rotationAngles[i] = Math.round(rotationAngles[i] / 360) * 360; // Ensure rotation angle is a multiple of 360 degrees
      }
    }
       
    push();
    rectMode(CENTER);
    translate(bluePartStart[i].x + bluePartStart[i].w / 2, bluePartStart[i].y + bluePartStart[i].h / 2);
    if (isRotating[i]) {
      rotate(rotationAngles[i]);
      rotationAngles[i] += 1; // Adjust rotation speed
    } else {
      rotate(rotationAngles[i]);
    }
    fill(72, 106, 188);
    noStroke();
    rect(0, 0, bluePartStart[i].w, bluePartStart[i].h);
    pop();
  }

   //greyPart rotate
    for (let i = 0; i < greyPart.length; i++) {
      if (greyPartStart[i].y< greyPart[i].y) {
        greyPartStart[i].y += 2;
        if (greyPartStart[i].y >= greyPart[i].y) {
          greyPartStart[i].y =greyPart[i].y; // Prevent exceeding target y value
          isRotating[i] = false; // Stop current block rotation
          rotationAngles[i] = Math.round(rotationAngles[i] / 360) * 360; // Ensure rotation angle is a multiple of 360 degrees
        }
        }
      
       
    push();
    rectMode(CENTER);
    translate(greyPartStart[i].x+greyPartStart[i].w/2,greyPartStart[i].y+greyPartStart[i].h/2);
    if (isRotating[i]) {
      rotate(rotationAngles[i]);
      rotationAngles[i] += 1; // Adjust rotation speed
    } else {
      rotate(rotationAngles[i]);
    }
    fill(217, 216, 212);
    noStroke();
    rect(0, 0, greyPartStart[i].w, greyPartStart[i].h);
    pop();
  }

}

//if all animations are already, keep falling down to clean the canvas
function clean(){
//check the position of squares
let allSquaresBelowCanvas = true;

//squares fall down
for (let i = 0; i < yellowLines1.length; i++) {
  yellowLines1Start[i].y += 11;
  fill(234, 212, 51);
  noStroke();
  rect(yellowLines1Start[i].x, yellowLines1Start[i].y, yellowLines1Start[i].w, yellowLines1Start[i].h);
  if (yellowLines1Start[i].y < height) {
    allSquaresBelowCanvas = false;
  }
}

for (let i = 0; i < yellowLines2.length; i++) {
  yellowLines2Start[i].y += 10;
  fill(234, 212, 51);
  noStroke();
  rect(yellowLines2Start[i].x, yellowLines2Start[i].y, yellowLines2Start[i].w, yellowLines2Start[i].h);
  if (yellowLines2Start[i].y < height) {
    allSquaresBelowCanvas = false;
  }
}

for (let i = 0; i < greySquare.length; i++) {
  greySquareStart[i].y += 7;
  fill(217, 216, 212);
  noStroke();
  rect(greySquareStart[i].x, greySquareStart[i].y, 18 * width / 800, 18 * height / 800);
  if (greySquareStart[i].y < height) {
    allSquaresBelowCanvas = false;
  }
}

for (let i = 0; i < redSquare.length; i++) {
  redSquareStart[i].y += 8;
  fill(174, 56, 42);
  noStroke();
  rect(redSquareStart[i].x, redSquareStart[i].y, 18 * width / 800, 18 * height / 800);
  if (redSquareStart[i].y < height) {
    allSquaresBelowCanvas = false;
  }
}

for (let i = 0; i < blueSquare.length; i++) {
  blueSquareStart[i].y += 9;
  fill(50, 105, 232);
  noStroke();
  rect(blueSquareStart[i].x, blueSquareStart[i].y, 18 * width / 800, 18 * height / 800);
  if (blueSquareStart[i].y < height) {
    allSquaresBelowCanvas = false;
  }
}

for (let i = 0; i < yellowPart.length; i++) {
  yellowPartStart[i].y += 6;
  translate(yellowPartStart[i].x + yellowPartStart[i].w / 2, yellowPartStart[i].y + yellowPartStart[i].h / 2);
  fill(234, 212, 51);
  noStroke();
  rect(0, 0, yellowPartStart[i].w, yellowPartStart[i].h);
  if (yellowPartStart[i].y < height) {
    allSquaresBelowCanvas = false;
  }
}

for (let i = 0; i < redPart.length; i++) {
  redPartStart[i].y += 8;
  translate(redPartStart[i].x + redPartStart[i].w / 2, redPartStart[i].y + redPartStart[i].h / 2);
  fill(174, 56, 42);
  noStroke();
  rect(0, 0, redPartStart[i].w, redPartStart[i].h);
  if (redPartStart[i].y < height) {
    allSquaresBelowCanvas = false;
  }
}

for (let i = 0; i < bluePart.length; i++) {
  bluePartStart[i].y += 6;
  translate(bluePartStart[i].x + bluePartStart[i].w / 2, bluePartStart[i].y + bluePartStart[i].h / 2);
  fill(72, 106, 188);
  noStroke();
  rect(0, 0, bluePartStart[i].w, bluePartStart[i].h);
  if (bluePartStart[i].y < height) {
    allSquaresBelowCanvas = false;
  }
}

for (let i = 0; i < greyPart.length; i++) {
  greyPartStart[i].y += 8;
  translate(greyPartStart[i].x + greyPartStart[i].w / 2, greyPartStart[i].y + greyPartStart[i].h / 2);
  fill(217, 216, 212);
  noStroke();
  rect(0, 0, greyPartStart[i].w, greyPartStart[i].h);
  if (greyPartStart[i].y < height) {
    allSquaresBelowCanvas = false;
  }
}

if (allSquaresBelowCanvas) {
  // All suqares are below the canvas, reset the animation
  noLoop(); // Stop the fall loop
}
}
