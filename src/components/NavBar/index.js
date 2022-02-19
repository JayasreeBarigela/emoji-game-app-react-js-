// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, result} = props
  return (
    <div className="nav-container">
      <div className="score-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1> Emoji Game</h1>
      </div>
      {!result && (
        <div className="score-container">
          <p>Score: {score}</p>
          <p>Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
