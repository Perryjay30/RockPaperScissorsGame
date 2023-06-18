// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
    randomArray = ['Rock', 'Paper', 'Scissor']  
    const randomNumber = Math.floor(Math.random() * randomArray.length)
    return randomArray[randomNumber]
  }
  
  // ** getResult compares playerChoice & computerChoice and returns the score accordingly **
  // human wins - getResult('Rock', 'Scissors') 👉 1
  // human loses - getResult('Scissors', 'Rock') 👉 -1
  // human draws - getResult('Rock', 'Rock') 👉 0
  function getResult(playerChoice, computerChoice) {
      let score
      if(playerChoice == computerChoice) {
          score = 0
      }
  
      else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
          score = 1
      }
      else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
          score = 1
      }
      else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
          score = 1
      }
  
      else score = -1
      return score
  }
  
  // ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
  function showResult(score, playerChoice, computerChoice) {
      let result = document.getElementById('result')
      switch (score) {
          case -1:
              result.innerText = `You lose!`
              break;
          case 0:
              result.innerText = `It's a tie`
              break; 
          case 1:
              result.innerText = `You Win!`
              break;       
      }
  
      let playerScore = document.getElementById('player-score')
      let hands = document.getElementById('hands')
      playerScore.innerText = `${Number(playerScore.innerText) + score}`
      hands.innerText = `${playerChoice} vs ${computerChoice}`
    // Hint: on a score of -1
    // You should do result.innerText = 'You Lose!'
    // Don't forget to grab the div with the 'result' id!
  }
  
  // ** Calculate who won and show it on the screen **
  function onClickRPS(playerChoice) {
      const computerChoice = getComputerChoice()
      const score = getResult(playerChoice.value, computerChoice)
      showResult(score, playerChoice.value, computerChoice)
  }
  
  function playGame() {
      let rpsButtons = document.querySelectorAll('.rpsButton')
      rpsButtons.forEach(rpsButton => {
          rpsButton.addEventListener('click', () => onClickRPS(rpsButton))
      })
  
      const endGameBtn = document.getElementById('endGameButton')
      endGameBtn.onclick = () => endGame()
  }
  
  playGame()
  
  function endGame() {
      let playerScore = document.getElementById('player-score')
      let hands = document.getElementById('hands')
      let result = document.getElementById('result')
      playerScore.innerText = ''
      hands.innerText = ''
      result.innerText = ''
  }