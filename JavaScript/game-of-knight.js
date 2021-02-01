/**
 * Game of Knights
 * There is a board with 6 knights on it.
 * Each knight had initially 100 health points.
 * Each Knight moves one by one sequentially in a loop order.
 * K1 -> K2 -> K3 -> K4 -> K5 -> K6 -> K1 ...
 * By each move, a knight hits the very next knight by random hit points (1..6).
 * Game ends when only one peace is left. Show the winner.
 * 
 * $ node game-of-knight.js
 */
class Knight {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

let board = [];

const getRandomInt = (min = 1, max = 6) => Math.floor(Math.random() * (max - min) + min);

function initialization(number = 6) {
  for (let i = 1; i <= number; i++) {
    const knight = new Knight(`K${i}`);
    board.push(knight);
  }
  console.log('Init:', board);
}

function gameLoop() {
  while(board.length > 1) {
    board.forEach((item, i) => {
        const hitStrength = getRandomInt();
        const nextItem = i <= board.length ? i : 0;
        board[nextItem].health -= hitStrength;
    });
    board = board.filter(item => {
        item.health <= 0 && console.log(`Dies: ${item.name}`);
        return item.health > 0;
    });
    // console.log('Next turn:', board);
  }

  console.log('The winner:', board[0]);
}

initialization();
gameLoop();
