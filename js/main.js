// submit buttom
document.querySelector('.submit').addEventListener('click', checkWin);

//Cell Constructor Function
function TicTacToe(inputVal){
    this.inputVal = function(){
        if (inputVal === 'x' ) {
            return 'x';
        } else if (inputVal === 'o') {
            return 'o'
        } 
    }
}
    
// Query Selector Array
/*const inputValArr =
    [document.querySelector('#cellInputOne').value, document.querySelector('#cellInputTwo').value, document.querySelector('#cellInputThree').value, document.querySelector('#cellInputFour').value, document.querySelector('#cellInputFive').value, document.querySelector('#cellInputSix').value, document.querySelector('#cellInputSeven').value, document.querySelector('#cellInputEight').value, document.querySelector('#cellInputNine').value,]*/

// object that makes if else statements to check for winners 

// Function That Checks for Winners when Submit button is pressed
function checkWin(){
    const cellOne = new TicTacToe(document.querySelector('#cellInputOne').value)
    
    const cellTwo = new TicTacToe(document.querySelector('#cellInputTwo').value)

    const cellThree = new TicTacToe(document.querySelector('#cellInputThree').value)

    const cellFour = new TicTacToe(document.querySelector('#cellInputFour').value)

    const cellFive = new TicTacToe(document.querySelector('#cellInputFive').value)

    const cellSix = new TicTacToe(document.querySelector('#cellInputSix').value)

    const cellSeven = new TicTacToe(document.querySelector('#cellInputSeven').value)

    const cellEight = new TicTacToe(document.querySelector('#cellInputEight').value)

    const cellNine = new TicTacToe(document.querySelector('#cellInputNine').value)

    // win conditional 

    if(cellOne.inputVal() === cellTwo.inputVal() && cellTwo.inputVal() === cellThree.inputVal()){
        alert(`${cellOne.inputVal()} wins!`)

    } else if (cellFour.inputVal() === cellFive.inputVal() && cellSix.inputVal() === cellFive.inputVal()) {
        alert(`${cellFour.inputVal()} wins!`)

    } else if (cellSeven.inputVal() === cellEight.inputVal() && cellNine.inputVal() === cellEight.inputVal()) {
        alert(`${cellSeven.inputVal()} wins!`)

    } else if (cellOne.inputVal() === cellFour.inputVal() && cellSeven.inputVal() === cellFour.inputVal()) {
        alert(`${cellOne.inputVal()} wins!`)

    } else if (cellTwo.inputVal() === cellFive.inputVal() && cellEight.inputVal() === cellFive.inputVal()) {
        alert(`${cellTwo.inputVal()} wins!`)

    } else if (cellThree.inputVal() === cellSix.inputVal() && cellNine.inputVal() === cellSix.inputVal()) {
        alert(`${cellThree.inputVal()} wins!`)

    } else if (cellOne.inputVal() === cellFive.inputVal() && cellNine.inputVal() === cellFive.inputVal()) {
        alert(`${cellOne.inputVal()} wins!`)

    } else if (cellThree.inputVal() === cellFive.inputVal() && cellSeven.inputVal() === cellFive.inputVal()) {
        alert(`${cellThree.inputVal()} wins!`)
    }

}