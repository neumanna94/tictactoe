
function Player(playerNameIn, chararacter){
  this.name = playerNameIn;
  this.charForGame = character;
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
    console.log("First Element:" +  this.board[2][0] + "other:" + this.board[2-i][i]);
    console.log();
    //Check Diagonals
    if(this.board[0][0] != this.board[i][i] || this.board[0][0] != null){
      lDiagonal = false;
    }
    if(this.board[2][0] != this.board[2-i][i] || this.board[2][0] !=null){
      rDiagonal= false;
    }
    for(var j = 1; j < 3; j ++){
      //Check Rows
      if(this.board[i][0] != this.board[i][j]){
        rowState = false;
      //Check Columns
      }
      if(this.board[0][i] != this.board[j][i]){
        colState = false;
      }
    }
  }
  console.log(lDiagonal)
  console.log(rDiagonal);
  console.log(rowState);
  console.log(colState);
    if(lDiagonal || rDiagonal || rowState || colState){
      return true;
    } else {
      return false;
    }
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
