// const grid = document.querySelector(".grid");
// const scoreDisplay = document.querySelector("#score");
// let score = 0;
// const blockWidth = 100;
// const boardWidth = 560;
// const boardHeight = 300;
// const blockHeight = 20;
// // User Pos
// const UserPos = [230, 10];
// let currentPos = UserPos;
// // Ball Pos
// const ballDiameter = 20;
// const ballStart = [230, 40];
// let ballCurrPos = ballStart;

// let timerId;
// let xDirection = 2;
// let yDirection = 2;

// // For bLocks
// class Block {
//   constructor(xAxis, yAxis) {
//     this.bottomLeft = [xAxis, yAxis];
//     this.bottomRight = [xAxis + blockWidth, yAxis];
//     this.topLeft = [xAxis, yAxis + blockHeight];
//     this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
//   }
// }

// // All Blocks
// const blocks = [
//   new Block(10, 270),
//   new Block(120, 270),
//   new Block(230, 270),
//   new Block(340, 270),
//   new Block(450, 270),
//   new Block(10, 240),
//   new Block(120, 240),
//   new Block(230, 240),
//   new Block(340, 240),
//   new Block(450, 240),
//   new Block(10, 210),
//   new Block(120, 210),
//   new Block(230, 210),
//   new Block(340, 210),
//   new Block(450, 210),
// ];
// console.log(blocks);
// // draw my block

// function addBlocks() {
//   for (let i = 0; i < blocks.length; i++) {
//     const block = document.createElement("div");
//     block.classList.add("block");
//     block.style.left = blocks[i].bottomLeft[0] + "px";
//     block.style.bottom = blocks[i].bottomLeft[1] + "px";
//     grid.appendChild(block);
//   }
// }

// addBlocks();

// // Add User
// const user = document.createElement("div");
// user.classList.add("user");
// drawUser();
// user.style.left = grid.appendChild(user);

// function drawUser() {
//   user.style.left = currentPos[0] + "px";
//   user.style.bottom = currentPos[1] + "px";
// }

// // Move The User
// function moveUser(e) {
//   switch (e.key) {
//     case "ArrowLeft":
//       if (currentPos[0] > 0) {
//         currentPos[0] -= 10;
//         drawUser();
//         break;
//       }
//     case "ArrowRight":
//       if (currentPos[0] < boardWidth - blockWidth) {
//         currentPos[0] += 10;
//         drawUser();
//         break;
//       }
//   }
// }
// document.addEventListener("keydown", moveUser);

// // Add Ball
// function drawBall() {
//   ball.style.left = ballCurrPos[0] + "px";
//   ball.style.bottom = ballCurrPos[1] + "px";
// }
// const ball = document.createElement("div");
// ball.classList.add("ball");
// drawBall();
// grid.appendChild(ball);

// // Move Ball
// function moveBall() {
//   ballCurrPos[0] += 2;
//   ballCurrPos[1] += 2;
//   drawBall();
// }
// setInterval(moveBall, 30);

// // Check for collisions
// function checkForCollisions() {
//   // check for block collisons
//   for (let i = 0; i < blocks.length; i++) {
//     if (
//       ballCurrPos[0] > blocks[i].bottomLeft[0] &&
//       ballCurrPos[0] < blocks[i].bottomRight[0] &&
//       ballCurrPos[i] + ballDiameter > blocks[i].bottomLeft[1] &&
//       ballCurrPos[1] < blocks[i].topLeft[1]
//     ) {
//       const allBlocks = Array.from(document.querySelectorAll(".block"));
//       //   console.log(allBlocks);
//       allBlocks[i].classList.remove("block");
//       blocks.splice(i, 1);
//       changeDirection();
//       score++;
//       scoreDisplay.innerHTML = score;

//       //   check for win
//       if (blocks.length === 0) {
//         scoreDisplay.innerHTML = "YOU WIN";
//         clearInterval(timerId);
//         document.removeEventListener("keydown", moveUser);
//       }
//     }
//   }
//   if (
//     ballCurrPos[0] >= boardWidth - ballDiameter ||
//     ballCurrPos[1] >= boardHeight - ballDiameter ||
//     ballCurrPos[0] <= 0
//   ) {
//     changeDirection();
//   }
//   //   check for user collisons
//   if (
//     ballCurrPos[0] >
//       currentPos[0].ballCurrPos[0] <
//       currentPos[0] + blockWidth &&
//     ballCurrPos[1] > currentPos[1] &&
//     ballCurrPos[1] < currentPos[1] + blockHeight
//   ) {
//     changeDirection();
//   }
//   //   Check For gameOver
//   if (ballCurrPos[1] <= 0) {
//     clearInterval(timerId);
//     scoreDisplay.innerHTML = "You Lose";
//     document.removeEventListener("keydown", moveUser);
//   }
// }
// // Change Direction
// function changeDirection() {
//   if (xDirection === 2 && yDirection === 2) {
//     yDirection = -2;
//     return;
//   }
//   if (xDirection === 2 && yDirection === -2) {
//     xDirection = -2;
//     return;
//   }
//   if (xDirection === -2 && yDirection === -2) {
//     yDirection = 2;
//     return;
//   }
//   if (xDirection === -2 && yDirection === 2) {
//     xDirection = 2;
//     return;
//   }
// }


// Code Here
const grid = document.querySelector('.grid')
const scoreDisplay = document.querySelector('#score')
const blockWidth = 100
const blockHeight = 20
const ballDiameter = 20
const boardWidth = 560
const boardHeight = 300
let xDirection = -2
let yDirection = 2

const userStart = [230, 10]
let currentPosition = userStart

const ballStart = [270, 40]
let ballCurrentPosition = ballStart

let timerId
let score = 0

//my block
class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis]
    this.bottomRight = [xAxis + blockWidth, yAxis]
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    this.topLeft = [xAxis, yAxis + blockHeight]
  }
}

//all my blocks
const blocks = [
  new Block(10, 270),
  new Block(120, 270),
  new Block(230, 270),
  new Block(340, 270),
  new Block(450, 270),
  new Block(10, 240),
  new Block(120, 240),
  new Block(230, 240),
  new Block(340, 240),
  new Block(450, 240),
  new Block(10, 210),
  new Block(120, 210),
  new Block(230, 210),
  new Block(340, 210),
  new Block(450, 210),
]

//draw my blocks
function addBlocks() {
  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement('div')
    block.classList.add('block')
    block.style.left = blocks[i].bottomLeft[0] + 'px'  
    block.style.bottom = blocks[i].bottomLeft[1] + 'px'  
    grid.appendChild(block)
    console.log(blocks[i].bottomLeft)
  }
}
addBlocks()

//add user
const user = document.createElement('div')
user.classList.add('user')
grid.appendChild(user)
drawUser()

//add ball
const ball = document.createElement('div')
ball.classList.add('ball')
grid.appendChild(ball)
drawBall()

//move user
function moveUser(e) {
  switch (e.key) {
    case 'ArrowLeft':
      if (currentPosition[0] > 0) {
        currentPosition[0] -= 10
        console.log(currentPosition[0] > 0)
        drawUser()   
      }
      break
    case 'ArrowRight':
      if (currentPosition[0] < (boardWidth - blockWidth)) {
        currentPosition[0] += 10
        console.log(currentPosition[0])
        drawUser()   
      }
      break
  }
}
document.addEventListener('keydown', moveUser)

//draw User
function drawUser() {
  user.style.left = currentPosition[0] + 'px'
  user.style.bottom = currentPosition[1] + 'px'
}

//draw Ball
function drawBall() {
  ball.style.left = ballCurrentPosition[0] + 'px'
  ball.style.bottom = ballCurrentPosition[1] + 'px'
}

//move ball
function moveBall() {
    ballCurrentPosition[0] += xDirection
    ballCurrentPosition[1] += yDirection
    drawBall()
    checkForCollisions()
}
timerId = setInterval(moveBall, 30)

//check for collisions
function checkForCollisions()
{
  //check for block collision
  for (let i = 0; i < blocks.length; i++){
    if
    (
      (ballCurrentPosition[0] > blocks[i].bottomLeft[0] && ballCurrentPosition[0] < blocks[i].bottomRight[0]) &&
      ((ballCurrentPosition[1] + ballDiameter) > blocks[i].bottomLeft[1] && ballCurrentPosition[1] < blocks[i].topLeft[1]) 
    )
      {
      const allBlocks = Array.from(document.querySelectorAll('.block'))
      allBlocks[i].classList.remove('block')
      blocks.splice(i,1)
      changeDirection()   
      score++
      scoreDisplay.innerHTML = score
      if (blocks.length == 0)
      {
        scoreDisplay.innerHTML = 'You Win!'
        clearInterval(timerId)
        document.removeEventListener('keydown', moveUser)
      }
      }
  }
  // check for wall hits
  if (ballCurrentPosition[0] >= (boardWidth - ballDiameter) || ballCurrentPosition[0] <= 0 || ballCurrentPosition[1] >= (boardHeight - ballDiameter))
  {
    changeDirection()
  }

  //check for user collision
  if
  (
    (ballCurrentPosition[0] > currentPosition[0] && ballCurrentPosition[0] < currentPosition[0] + blockWidth) &&
    (ballCurrentPosition[1] > currentPosition[1] && ballCurrentPosition[1] < currentPosition[1] + blockHeight ) 
  )
  {
    changeDirection()
  }

  //game over
  if (ballCurrentPosition[1] <= 0)
  {
    clearInterval(timerId)
    scoreDisplay.innerHTML = 'You lose!'
    document.removeEventListener('keydown', moveUser)
  }
}


function changeDirection() {

  if (xDirection === 2 && yDirection === 2)
  {
    yDirection = -2
    return
  }

  if (xDirection === 2 && yDirection === -2)
  {
    xDirection = -2
    return
  }

  if (xDirection === -2 && yDirection === -2)
  {
    yDirection = 2
    return
  }

  if (xDirection === -2 && yDirection === 2)
  {
    xDirection = 2
    return
  }
}