let yellowLines1Start, yellowLines2Start, yellowPartStart, yellowPart1Start, redPartStart, bluePartStart, greyPartStart, greySquareStart, redSquareStart, blueSquareStart;
let rotationAngles = [];
let isRotating = [];

function Start(){
  // Initialize all starting positions
  yellowLines1Start = yellowLines1.map(point => ({ ...point, y: 0 }));
  yellowLines2Start = yellowLines2.map(point => ({ ...point, y: 0 }));
  yellowPartStart = yellowPart.map(point => ({ ...point,y: 0 }));
  yellowPart1Start = yellowPart1.map(point => ({ ...point, y: 0 }));
  redPartStart = redPart.map(point => ({ ...point, y: 0 }));
  bluePartStart = bluePart.map(point => ({ ...point,y: 0 }));
  greyPartStart = greyPart.map(point => ({ ...point,y: 0 }));
  greySquareStart = greySquare.map(point => ({ ...point, y: 0 }));
  redSquareStart = redSquare.map(point => ({ ...point, y: 0 }));
  blueSquareStart = blueSquare.map(point => ({ ...point, y: 0 }));
  rotationAngles = yellowPart.map(() => 0);
  isRotating = yellowPart.map(() => true);
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
      yellowPartStart[i].y += 2;
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
      rotationAngles[i] += 0.6; // Adjust rotation speed
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
      redPartStart[i].y += 2;
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
      rotationAngles[i] += 0.6; // Adjust rotation speed
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
      bluePartStart[i].y += 2;
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
      rotationAngles[i] += 0.6; // Adjust rotation speed
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
      rotationAngles[i] += 0.6; // Adjust rotation speed
    } else {
      rotate(rotationAngles[i]);
    }
    fill(217, 216, 212);
    noStroke();
    rect(0, 0, greyPartStart[i].w, greyPartStart[i].h);
    pop();
  }

}


