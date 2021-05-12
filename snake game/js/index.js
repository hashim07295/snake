// game constant and variables
let direction = {x: 0, y: 0};
const foodsound = new Audio('food.mp3');
const gameoversound = new Audio('game over.mp3');
const musicsound = new Audio('background music.mp3');
const movesound = new Audio('move.mp3');
let speed = 2;
let lastpainTtime = 0;
let snakearr = [
    {x: 13, y: 15}
]

//game functions
function main(ctime) {
    window.requestAnimationFrame(main);
  console.log(ctime)
    if((ctime - lastpainTtime)/1000 < 1/speed);{
         return;
   }
    lastpainTtime = ctime;
    gameEngine();
}
function gameEngine(){
    //part 1: updating the snake array & food

    //part 2: display the snake and food
   board.innerHTML = "";
   snakearr.forEach((e, index)=>{
       snakeElement = document.createElement('div');
       snakeElement.style.gridrowstart = e.x;
       snakeElement.style.gridcolumntart = e.y;
       snakeElement.classlist.add("food")
       board.appendchild(snakeElement);
  }) 
}








//main logic strats here
window.requestAnimationFrame(main);