let yellowLines1Start, yellowLines2Start, yellowPartStart, yellowPart1Start, redPartStart, bluePartStart, greyPartStart, greySquareStart, redSquareStart, blueSquareStart;

function Start(){
  // 初始化所有的起始位置
  yellowLines1Start = yellowLines1.map(point => ({ ...point, y: 0 }));
  yellowLines2Start = yellowLines2.map(point => ({ ...point, y: 0 }));
  yellowPartStart = yellowPart.map(point => ({ ...point, y: 0 }));
  yellowPart1Start = yellowPart1.map(point => ({ ...point, y: 0 }));
  redPartStart = redPart.map(point => ({ ...point, y: 0 }));
  bluePartStart = bluePart.map(point => ({ ...point, y: 0 }));
  greyPartStart = greyPart.map(point => ({ ...point, y: 0 }));
  greySquareStart = greySquare.map(point => ({ ...point, y: 0 }));
  redSquareStart = redSquare.map(point => ({ ...point, y: 0 }));
  blueSquareStart = blueSquare.map(point => ({ ...point, y: 0 }));
}

function falldown(){
  // 对 yellowLines1 进行下落处理
  for (let i = 0; i < yellowLines1.length; i++) {
    if (yellowLines1Start[i].y < yellowLines1[i].y) {
      yellowLines1Start[i].y += 11;
      if (yellowLines1Start[i].y > yellowLines1[i].y) {
        yellowLines1Start[i].y = yellowLines1[i].y; // 防止超过目标y值
      }
    }
    fill(234, 212, 51); // 黄色
    noStroke();
    rect(yellowLines1Start[i].x, yellowLines1Start[i].y, yellowLines1Start[i].w, yellowLines1Start[i].h);
  }

  // 对 yellowLines2 进行下落处理
  for (let i = 0; i < yellowLines2.length; i++) {
    if (yellowLines2Start[i].y < yellowLines2[i].y) {
      yellowLines2Start[i].y += 10;
      if (yellowLines2Start[i].y > yellowLines2[i].y) {
        yellowLines2Start[i].y = yellowLines2[i].y; // 防止超过目标y值
      }
    }
    fill(234, 212, 51); // 黄色
    noStroke();
    rect(yellowLines2Start[i].x, yellowLines2Start[i].y, yellowLines2Start[i].w, yellowLines2Start[i].h);
  }
  //greySquare
  for (let i = 0; i < greySquare.length; i++) {
    if (greySquareStart[i].y < greySquare[i].y) {
      greySquareStart[i].y += 7;
      if (greySquareStart[i].y > greySquare[i].y) {
        greySquareStart[i].y = greySquare[i].y; // 防止超过目标y值
      }
    }
    fill(217, 216, 212); // 灰色
    noStroke();
    rect(greySquareStart[i].x, greySquareStart[i].y,18 * width / 800, 18 * height / 800);
  }
  //redSquare
  for (let i = 0; i < redSquare.length; i++) {
    if (redSquareStart[i].y < redSquare[i].y) {
      redSquareStart[i].y += 3.5;
      if (redSquareStart[i].y > redSquare[i].y) {
        redSquareStart[i].y = redSquare[i].y; // 防止超过目标y值
      }
    }
    fill(174, 56, 42); // 红色
    noStroke();
    rect(redSquareStart[i].x, redSquareStart[i].y,18 * width / 800, 18 * height / 800);
  }
  //blueSquare  
  for (let i = 0; i < blueSquare.length; i++) {
    if (blueSquareStart[i].y < blueSquare[i].y) {
      blueSquareStart[i].y += 5;
      if (blueSquareStart[i].y > blueSquare[i].y) {
        blueSquareStart[i].y = blueSquare[i].y; // 防止超过目标y值
      }
    }
    fill(50, 105, 232); // 蓝色
    noStroke();
    rect(blueSquareStart[i].x, blueSquareStart[i].y,18 * width / 800, 18 * height / 800);
  }
}



function tetris(){
//先出现在画布中央，旋转n*90度，在下落中不断旋转，如果n=4的倍数则停止旋转//调用stop
// 那个part的数组
};

function stop(){
//用来检测是否到了位置
}


