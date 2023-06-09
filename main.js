
const computerChoseDisplay = document.getElementById('computer-chose')
const yourChoiceDisplay = document.getElementById('your-choice')
const gameResultDisplay = document.getElementById('game-result')
const potentialOptions = document.querySelectorAll('button')
let yourChoice
let computerChose
let gameResult

potentialOptions.forEach(potentialOption => potentialOption.addEventListener('click', (e) => {
    yourChoice = e.target.id
    yourChoiceDisplay.innerHTML = yourChoice
    generateComputerChose()
    getResult()
}))

function generateComputerChose() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 
    
    if (randomNumber === 1){
        computerChose = 'Rock'
    }
    if (randomNumber === 2){
        computerChose = 'Paper'
    }
    if (randomNumber === 3){
        computerChose = 'Scissors'
    }
   computerChoseDisplay.innerHTML = computerChose
}

function getResult() {
    if (computerChose === yourChoice) {
        gameResult = 'Draw!'
    }
    if (computerChose === 'Rock' && yourChoice === 'Paper') {
        gameResult = 'You Win!'
    }
    if (computerChose === 'Rock' && yourChoice === 'Scissors') {
        gameResult = 'You Lost!'
    }
    if (computerChose === 'Paper' && yourChoice === 'Scissors') {
        gameResult = 'You Win!'
    }
    if (computerChose === 'Paper' && yourChoice === 'Rock') {
        gameResult = 'You Lost!'
    }
    if (computerChose === 'Scissors' && yourChoice === 'Rock') {
        gameResult = 'You Win!'
    }
    if (computerChose === 'Scissors' && yourChoice === 'Paper') {
        gameResult = 'You Lost!'
    }
    gameResultDisplay.innerHTML = gameResult
}