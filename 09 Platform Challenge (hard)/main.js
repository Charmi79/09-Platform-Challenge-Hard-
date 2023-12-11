// Platform Challenge (harder)

// Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

// Global Vairables
let player = {
  x: 400,
  y: 365,
  w: 35,
  h: 35,
  dx: 5,
  dy: 0,
  a: 0.2,
  jumpSpeed: -11,
  color: "blue",
};

let rightArrow = false;
let leftArrow = false;
let wallX = 200;
let wallY = 210;

// Draw Function
window.addEventListener("load", draw);

function draw() {
  // LOGIC

  // Horizontal Movement
  if (rightArrow) {
    player.x += player.dx;
  } else if (leftArrow) {
    player.x += -player.dx;
  }

  // Vertical Movement
  player.dy += player.a;
  player.y += player.dy;

  // Land on Ground
  if (player.y + player.h > cnv.height) {
    player.y = cnv.height - player.h;
    player.dy = 0;
  }

  // Stop at Wall
  if (
    player.x < wallX + 200 &&
    player.x + 35 > wallX &&
    player.y < wallY + 40 &&
    player.y + 35 > wallY
  ) {
    if (player.y + 35 < wallY) {
      blueY = wallY;
    } else if (downKey) {
      blueY = wallY - 35;
    } else if (leftKey) {
      blueX = wallX + 200;
    } else if (rightKey) {
      blueX = wallX - 35;
    }
  }

  // Draw Background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Draw Blue Square
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.w, player.h);

  // Draw Grey Wall
  ctx.fillStyle = "grey";
  ctx.fillRect(wallX, wallY, 200, 40);

  // Animation Loop
  requestAnimationFrame(draw);
}

// Document Event Stuff
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(event) {
  console.log(event.code);
  if (event.code === "ArrowRight") {
    rightArrow = true;
  } else if (event.code == "ArrowLeft") {
    leftArrow = true;
  } else if (event.code === "ArrowUp") {
    player.dy = player.jumpSpeed;
  }
}

function keyUpHandler(event) {
  if (event.code === "ArrowRight") {
    rightArrow = false;
  } else if (event.code == "ArrowLeft") {
    leftArrow = false;
  }
}
