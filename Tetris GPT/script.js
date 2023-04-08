const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const ROWS = 20;
const COLS = 10;
const BLOCK_SIZE = 30;

const shapes = [
    [[0,0,0,0],
        [1,1,1,1],
        [0,0,0,0],
        [0,0,0,0]],

    [[0,0,0],
        [2,2,2],
        [0,2,0]],

    [[0,0,0],
        [3,3,3],
        [3,0,0]],

    [[0,0,0],
        [4,4,0],
        [0,4,4]],

    [[0,0,0],
        [0,5,5],
        [5,5,0]],

    [[0,0,0],
        [6,6,0],
        [0,6,6]],

    [[0,0,0],
        [0,7,0],
        [7,7,7]]
];

let board = [];

function createBoard() {
    for (let r = 0; r < ROWS; r++) {
        board[r] = [];
        for (let c = 0; c < COLS; c++) {
            board[r][c] = 0;
        }
    }
}

function drawSquare(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
}

function drawBoard() {
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (board[r][c]) {
                drawSquare(c, r, shapes[board[r][c] - 1][0][0]);
            } else {
                drawSquare(c, r, 'white');
            }
        }
    }
}

let currentShape;
let currentPosition;

function newShape() {
    const shapeIndex = Math.floor(Math.random() * shapes.length);
    currentShape = shapes[shapeIndex];
    currentPosition = { x: 3, y: 0 };
}

function drawShape(shape, offset) {
    shape.forEach((row, dy) => {
        row.forEach((value, dx) => {
            if (value) {
                drawSquare(currentPosition.x + dx + offset.x,
                    currentPosition.y + dy + offset.y,
                    shapes[value - 1][0][0]);
            }
        });
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBoard();
    drawShape(currentShape, currentPosition);
}

function moveDown() {
    currentPosition.y++;
    if (collides(board, currentShape, currentPosition)) {
        currentPosition.y--;
        merge(board, currentShape, currentPosition);
        newShape();
    }
}

function moveRight() {
    currentPosition.x++;
    if (collides(board, currentShape, currentPosition)) {
        currentPosition.x--;
    }
}

function moveLeft() {
    currentPosition.x--;
    if (collides(board, currentShape, currentPosition)) {
        currentPosition.x++;
    }
}

function rotate() {
    const rotatedShape = [];
    for (let y = 0; y < currentShape.length; ++y) {
        rotatedShape[y] = [];
        for (let x = 0; x < currentShape.length; ++x) {
            rotatedShape[y][x] = currentShape[currentShape.length - 1 - x][y];
        }
    }
    if (!collides(board, rotatedShape, currentPosition)) {
        currentShape = rotatedShape;
    }
}

function collides(board, shape, position) {
    for (let y = 0; y <shape.length; ++y) {
        for (let x = 0; x < shape.length; ++x) {
            if (shape[y][x]) {
                const boardX = position.x + x;
                const boardY = position.y + y;
                if (boardY < 0 || boardY >= ROWS ||
                    boardX < 0 || boardX >= COLS ||
                    board[boardY][boardX]) {
                    return true;
                }
            }
        }
    }
    return false;
}

function merge(board, shape, position) {
    shape.forEach((row, dy) => {
        row.forEach((value, dx) => {
            if (value) {
                board[position.y + dy][position.x + dx] = value;
            }
        });
    });
}

createBoard();
newShape();

function update() {
    moveDown();
    draw();
    requestAnimationFrame(update);
}

document.addEventListener('keydown', event => {
    switch (event.keyCode) {
        case 37: // left arrow
            moveLeft();
            break;
        case 38: // up arrow
            rotate();
            break;
        case 39: // right arrow
            moveRight();
            break;
        case 40: // down arrow
            moveDown();
            break;
    }
});

update();