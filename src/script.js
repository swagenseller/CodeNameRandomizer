// create a 5 by 5 board
var b = document.querySelector("#board")


var board = new Array(5);
for (let z = 0; z< 5; z++){
    board[z] = new Array(5);
}
//b.append("tr").attr("id", "test")
addCells();
randBoard();

function addCells(){

    for (let i =0; i< 5; i++){
        var newRow = document.createElement("tr");
        newRow.setAttribute("id", "row" + i)
        b.appendChild(newRow)
        for(let j =0; j<5; j++){
            let td = document.createElement("td");
            td.setAttribute("id", "" + i + j);
            newRow.append(td);
            board[i][j] = td;
        }
        b.append(newRow)
    }
   
}

// randomize the board 
// colors: 17 red & blue squares, 7 tan & 1 black square
function randBoard(){
    //create an array with 0-24 in a random order
    let colorBoard = [];
    let first;
    let second;
    while(colorBoard.length < 25){
        let r = Math.floor(Math.random() * 25);
        if(colorBoard.indexOf(r) === -1) {
            colorBoard.push(r);
        }
    }

    let turn = document.querySelector(".first");
    turn.classList.remove("blue");
    turn.classList.remove("red");
    // first determine blue or red goes first
    let sign = Math.floor(Math.random() * 2); // 0 blue, 1 red
    if (sign < 1){
        turn.classList.add("blue");
        first = "blue";
        second = "red";
    } else {
        turn.classList.add("red");
        first = "red";
        second = "blue";
    }

    // assign colors to each one based values in colorBoard
    let k = 0;
    for (let i =0; i< board.length; i++ ){
        for(let j =0; j<board[0].length; j++){
            board[i][j].removeAttribute("class");
            if (colorBoard[k] >= 16 ){
                board[i][j].classList.add( first);
            } else if (colorBoard[k] < 16 && colorBoard[k] >= 8){
                board[i][j].classList.add(second);
            } else if(colorBoard[k] === 0){
                board[i][j].classList.add("death");
            }
            k++;
        }
    }
    console.log(colorBoard);
} 

/*function randNums(){
    let board = []
    let countF = 0;
    let countS = 0;
    let count  = 

}*/
    
// adding interativity 
var ranBtn = document.querySelector("#newBoard");
ranBtn.addEventListener("click", randBoard);

