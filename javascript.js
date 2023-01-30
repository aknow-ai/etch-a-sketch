
function boardSize () {

const value = document.getElementById('input').value;

const board = document.getElementById('board');

let squares = board.querySelectorAll('.square');

squares.forEach((div) => div.remove());



    board.style.cssText = `display: grid; grid-template-columns: repeat(${value}, 1fr);
     grid-template-rows: repeat(${value}, 1fr)`;

    if (value > 2 && value <= 100) {
    for (let i = 0; i < (value*value); i++) {
        const div = document.createElement('div');
        div.classList.add('white','square');

        div.addEventListener('mouseover',changeColor)

        board.appendChild(div);
        
    }} else {
        alert('too many squares')
    }


    
}


let color = 'black'
function changeColor () {
    
    if (color == 'black')  {
    this.style.backgroundColor = 'black'
} else if (color == 'random') {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
}
}

function changeToBlack () {
    color = 'black'
}

function changeToRandom () {
    color = 'random'
}

   

