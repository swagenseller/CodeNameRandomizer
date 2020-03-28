// create a 5 by 5 board
var b = document.querySelector("#board")

var board = new Array(5);
for (var z = 0; z< 5; z++){
    board[z] = new Array(5);
}
//b.append("tr").attr("id", "test")
addCells();


function addCells(){

    for (let i =0; i< 5; i++){
        var newRow = document.createElement("tr");
        newRow.setAttribute("id", "row" + i)
        b.appendChild(newRow)
        for(let j =0; j<5; j++){
            let td = document.createElement("td");
            td.setAttribute("id", "" + i + j);
            newRow.append(td);
        }
        b.append(newRow)
    }
   


}
