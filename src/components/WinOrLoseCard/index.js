// Write your code here.
const WinOrLoseCard = props => {
  const {wonGame, score, totalScore, playAgain} = props

  let imgUrl
  let heading
  let description

  if (wonGame) {
    imgUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    heading = 'You WON'
    description = 'Best Score'
  } else {
    imgUrl = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
    heading = 'You Lose'
    description = 'Score'
  }

  const onPlayAgain = () => {
    playAgain()
  }

  return (
    <div>
      <div>
        <h1>{heading}</h1>
        <p>{description}</p>
        <p>
          {score}/{totalScore}
        </p>
        <button type="button" onClick={onPlayAgain}>
          Play Again
        </button>
      </div>
      <img src={imgUrl} alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
