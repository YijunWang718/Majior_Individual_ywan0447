# Majior_Individual_ywan0447

#### Yijun Wang ywan0447

## Instructions on How to Interact with the Work
- **Loading Animation:** The animation evolves over time and ultimately clears the screen.

- **Resize the Window:**  The display can be adjusted according to the window size.

## Individual Approach to Animating the Group Code
- **Animation Driver:**Time-Based
Figuring out how to batch process an array of squares so that each individual block has its own animation is challenging.

## Animated Properties

- **Falldown:** The small squares and the yellow lines fall at inconsistent speeds and stop falling when they reach the target position.

- **Tetris:** The larger squares fall while rotating and moving, and stop moving and rotating when they reach the target position.

- **Clean:**When all squares reach their positions, they remain stationary for a period before falling again, clearing the screen.

## Inspiration
![an image of ](readmeImages/R.png)

[link of technical inspiration](https://github.com/pedromocco/tetris)
Since the graphics are made up of blocks, and they are divided into large blocks and small blocks, I thought of making animations that imitate the effect of Tetris.

## Technical Explanation
- **Falldown:**
    1. In `sketch.js`, I removed the original drawing functionality and changed the arrays to global variables. 
    2. In `animation.js`, I used the `map` function to create new arrays to store the values of the images at `y=0`, achieving a partial functionality of falling for the small squares.
        - The use of the map function here comes from [link of map vedio](https://www.youtube.com/watch?v=nicMAoW6u1g&pp=ygUJcDUuanMgbWFw), and with the help of chatGPT, to further understand how to use map to process objects in multiple arrays
    
- **Tetris:**
    1. I set up the animation for the large squares in tetris: they should rotate while descending and stop rotating when they reach the target coordinates, ensuring the rotation is a multiple of 360 degrees. Each square has a unique rotation magnitude. 
    2. Therefore, I created a new array called `rotationAngles` and used the `map` function to define their rotation degree. `isRotating` is used to check whether a block should stop rotating. 
    3. To ensure the rotation is centered, I added rectMode within `push()` and `pop()` to control the rotation of each square individually.
    4. To ensure that the squares are 360 degrees at the end of the rotation, I chose `rotationAngles[i] = Math.round(rotationAngles[i] / 360) * 360`to ensure that the rotation angle is an integer multiple of 360.

- **Clean**
    Utilized the boolean value allSquaresBelowCanvas to end the animation.
- **Time**
    1. To ensure the time order, I used `millis()` to calculate how much time has passed since the animation started, so that the big squares starts moving after the small squares falls. [link of millis() reference](https://p5js.org/zh-Hans/reference/#/p5/millis)
    2. I compared startTime with millis() and interval to control the sequence of animations.