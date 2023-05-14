const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    'A': 2,
    'B': 4,
    'C': 6,
    'D': 8
}

const SYMBOL_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}

function deposit() {
    while(true) {
        const depositAmount = parseFloat(prompt("Enter a deposit amount: "))
        
        if (isNaN(depositAmount) || depositAmount <=0) {
            console.log("Invalid deposit amount, try again...");        
        } else {
            return depositAmount
        }
    }
}
const getNumberOfLines = () => {
    while(true) {
        const lines = parseFloat(prompt("Enter the number of lines to bet on (1-3): "))
        
        if (isNaN(lines) || lines <=0 || lines > 3) {
            console.log("Invalid number of lines, try again...");        
        } else {
            return lines
        }
    }    
}
const getBet = (balance, lines) => {
    while(true) {
        const bet = parseFloat(prompt("Enter the total bet per line: "))
        
        if (isNaN(bet) || bet <=0 || bet > balance / lines) {
            console.log("Invalid bet, try again...");        
        } else {
            return bet
        }
    }
}

const spin = () => {
    const symbols = []
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {        
        for (let i = 0; i < count; i++) {
            symbols.push(symbol)
        }
    }
    
    const reels = []
    for (let i = 0; i<COLS; i++)  {
        reels.push([])
        const reelSymbols = [...symbols]
        for (let j=0; j<ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length)
            const selectedSymbol = reelSymbols[randomIndex]
            reels[i].push(selectedSymbol)
            reelSymbols.splice(randomIndex, 1)
        }
    }
    return reels
}

const transpose = (reels) => {
    const rows = []

    for (let i=0; i<ROWS; i++) {
        rows.push([])
        for (let j = 0; j<COLS; j++) {
            rows[i].push(reels[j][i])
        }
    }
    return rows
}

const printRows = (rows) => {    
    for (const row of rows) {                
        let rowString = "";        
        for (const i in row) {
            rowString += row[i]
            if (i != row.lenght -1) {
                rowString += " | "
            }
        }        
      console.log(rowString);
    }
};

const getWinnings = (rows, bet, lines) => {
    let winnings = 0

    for (let row =0; row<lines; row++) {
        const symbols = rows[row]
        let allSame = true

        for (const symbol of symbols) {
            if (symbol != symbols[0]) {
                allSame = false
                break
            }
        }
        if (allSame) {
            winnings += bet * SYMBOL_VALUES[symbols[0]]
        }
    }
    return winnings
}

const game = () => {
    let balance = deposit()
        
    while (true) {        
        console.log("You have a balance of $" + balance);        
        const numberOfLines = getNumberOfLines()
        const bet = getBet(balance, numberOfLines)
        balance -= bet * numberOfLines
        const reels = spin()
        const rows = transpose(reels)
        printRows(rows)
        const winnings = getWinnings(rows, bet, numberOfLines)
        console.log("You won, $ " + winnings.toString())
        balance += winnings
        
        if (balance <= 0) {
            console.log("You ran out ot money!");
            break           
        }

        const playAgain = prompt("Do you want to play again (y/n)? ")

        if (playAgain !="y"3
        ) break;
    }
}

game()
export{}

