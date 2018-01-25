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
    if(selector == 0){
      this.board[row][column] = "O";
    } else if(selector == 1){
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
  var rowState = true;
  var colState = true;
  for(var i = 0; i < 3; i ++){
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
    if(colState || rowState) {
      return true;
    }
    }
    console.log(rowState);
    console.log(colState);
    console.log(lDiagonal);
    console.log(rDiagonal);
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
function checkRowForWin(inputArray){
  for(var i=1; i < input.length; i++){
    if(inputArray[i] !== inputArray[0] && inputArray[0] !== null){
      return false;
    }
  }
  return inputArray[0];
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
  $(this).find("p").append(currentValue);
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
var currentTurn = 0; //O is Even turns, X is Odd Turns
var difficulty = 0;
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
      var currTurn = updateTurn(currentTurn);
      var currHeader = updateTurn(currentTurn+1);
      $("h5").text("Current Turn: " + currHeader);
      $(this).find("p").text(currTurn);
      if(displayedBoard.checkForWin() == true){
        alert(currTurn + " Wins!");
      }
      currentTurn ++;
    }
    writeBoard();
  });
});
var one = new Board()
one.move(0,0,0);
one.move(0,1,0);
one.move(0,2,0);
var two = new Board()
two.move(0,0,1);
two.move(0,1,0);
two.move(0,2,1);
var three = new Board()
three.move(0,0,1);
three.move(1,1,0);
three.move(2,2,1);
var four = new Board()
four.move(0,0,1);
four.move(1,1,1);
four.move(2,2,1);
var five = new Board()
five.move(2,0,1);
five.move(1,1,0);
five.move(0,2,1);
var six = new Board()
six.move(2,0,1);
six.move(1,1,1);
six.move(0,2,1);
var seven = new Board()
seven.move(0,0,1);
seven.move(1,0,0);
seven.move(2,0,1);
var eight = new Board()
eight.move(0,0,1);
eight.move(1,1,1);
eight.move(2,2,1);
