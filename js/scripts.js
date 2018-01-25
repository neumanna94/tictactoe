function Player(playerNameIn){
  this.name = playerNameIn;
  this.wins = 0;
  this.losses = 0;
  this.draws = 0;
}
function Board(){
  this.board = createMatrix(3,3);
}
Board.prototype.move=function(row, column, selector){
  if(this.board[row][column] == null){
    if(selector == 0 || selector == "O"){
      this.board[row][column] = "O";
    } else if(selector == 1 || selector == "X"){
      this.board[row][column] = "X";
    } else if(selector == 2){
      this.board[row][column] = null;
    } else {
      return "position already taken.";
    }
  }
}

Board.prototype.checkForWin=function(){
  var lDiagonal = true;
  var rDiagonal = true;
  for(var i = 0; i < 3; i ++){
    var rowState = true;
    var colState = true;
    //Check Diagonals
    if(this.board[0][0] != this.board[i][i] || this.board[0][0] == null){
      lDiagonal = false;
    }
    if(this.board[2][0] != this.board[2-i][i] || this.board[2][0] == null){
      rDiagonal= false;
    }
    for(var j = 0; j < 3; j ++){
      //Check Rows
      if(this.board[i][0] != this.board[i][j] || this.board[i][0] == null){
        rowState = false;
        //Check Columns
      }
      if(this.board[0][i] != this.board[j][i] || this.board[0][i] == null){
        colState = false;
      }
    }
    if(colState == true || rowState == true) {
      return true;
    }
  }

  return (lDiagonal || rDiagonal);
}
function createMatrix(rows,columns){
  var outputMatrix = [];
  for(var i = 0; i < rows; i ++){
    outputMatrix.push([]);
    for(var j = 0; j < columns; j ++){
      outputMatrix[i][j] = null;
    }
  }
  return outputMatrix;
}
function updateTurn(counter){
  if(counter%2 === 0){
    return "X";
  } else if(counter%2 !== 0){
    return "O";
  }
}
function writeBoard(){
  $( ".col-md-4" ).find("p").each(function( index ) {
    var selector = $(this).text();
    if(selector == "O"){
      selector = 0;
    } else if(selector == "X"){
      selector = 1;
    } else {
      selector = 2;
    }
    displayedBoard.move(Math.floor(index/3),index%3,selector);
  });
}
function displayBoard(){
  $( ".col-md-4" ).find("p").each(function( index ) {
    var currentValue = displayedBoard.board[Math.floor(index/3)][index%3];
    $(this).text("");
    $(this).append(currentValue);
  });
}
function settings(){
  var sDifficulty = $("#difficulty").val();
  var start = $("#start").val();
  if(start=="1"){
    currentTurn = 0;
  } else if(start =="2"){
    currentTurn = 1;
  }
  if(sDifficulty =="1"){
    difficulty = 1; //Easy
  } else if(sDifficulty =="2"){
    difficulty = 2; //Hard
  }
  displayedBoard = new Board();
  $("h5").text("Current Turn: " + updateTurn(currentTurn));
  displayBoard();

}

var displayedBoard = new Board();
var difficulty = 0;

function determineTurn(){
  var turnNumber = 0;
  for(var i = 0;i < 3; i++){
    for(var j = 0; j < 3; j++){
      if(displayedBoard.board[i][j] != null){
        turnNumber ++;
      }
    }
  }
  return turnNumber;
}

function easyAI(characterToPlace){
  var currI = Math.floor(Math.random() * Math.floor(3));
  var currJ = Math.floor(Math.random() * Math.floor(3));
  while(displayedBoard.board[currI][currJ] != null){
    currI = Math.floor(Math.random() * Math.floor(3));
    currJ = Math.floor(Math.random() * Math.floor(3));
  }
  displayedBoard.move(currI, currJ, characterToPlace);
}

$(document).ready(function(){
  $("form#settings").change(function() {
    settings();
  });
  $(".restart").click(function(){
    settings();
  });

  $(".col-md-4").click(function(){
    if($(this).find("p").text() == "X" ||$(this).find("p").text() == "O"){
    } else {
      var currTurn = updateTurn(determineTurn());
      var currHeader = updateTurn(determineTurn());
      $("h5").text("Current Turn: " + currHeader);
      $(this).find("p").text(currTurn);
      if(determineTurn()%2 == 0){
        easyAI("O");
      } else if(determineTurn()%2 != 0){
        easyAI("X");
      } else if(determineTurn() == 9){
        alert("Draw!");
      }
    }
    writeBoard();
    displayBoard();
    if(displayedBoard.checkForWin()){
      alert(updateTurn(determineTurn()) + " Wins!");
    }
  });
});


//Debuggings
// Board.prototype.Highlight = function(row, col) {
//   console.log("XY coord are: " +row+ ", "+col)
//   console.log("THE VALUE IS: "+ this.board[row][col]);
// }
//
// var oneBoard = new Board();
//
// oneBoard.move(1,0,0);
// oneBoard.move(1,1,0);
// oneBoard.move(1,2,0);
//
// var twoBoard = new Board();
//
// twoBoard.move(0,1,0);
// twoBoard.move(1,1,0);
// twoBoard.move(2,1,0);
//
// var threeBoard = new Board();
//
// threeBoard.move(0,2,0);
// threeBoard.move(1,2,0);
// threeBoard.move(2,2,0);
//
// var fourBoard = new Board();
//
// fourBoard.move(0,0,0);
// fourBoard.move(0,1,0);
// fourBoard.move(0,2,1);
//
// oneBoard.checkForWin();
// twoBoard.checkForWin();
// threeBoard.checkForWin();
// fourBoard.checkForWin();
