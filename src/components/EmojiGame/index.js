/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.
  const totalScore = emojisList.length
  return emojisList.sort(() => Math.random() - 0.5)
}

*/
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

// Write your code here.

class EmojiGame extends Component {
  state = {
    clickedEmojiList: [],
    score: 0,
    topScore: 0,
    wonGame: false,
    result: false,
  }

  shuffledEmojisList = id => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    if (clickedEmojiList.includes(id)) {
      emojisList.sort(() => Math.random() - 0.5)
      this.setState(prevState => ({
        clickedEmojiList: [],
        score: prevState.score + 1,
        result: true,
      }))
    } else if (clickedEmojiList.length === emojisList.length - 1) {
      this.setState(prevState => ({
        clickedEmojiList: [...prevState.clickedEmojiList, id],
        score: prevState.score + 1,
        wonGame: !prevState.wonGame,
        result: true,
      }))
    } else {
      this.setState(prevState => ({
        clickedEmojiList: [...prevState.clickedEmojiList, id],
        score: prevState.score + 1,
      }))
    }
  }

  playAgain = () => {
    const {topScore, score} = this.state
    if (score > topScore) {
      this.setState(prevState => ({
        clickedEmojiList: [],
        score: 0,
        topScore: prevState.score,
        wonGame: false,
        result: false,
      }))
    } else {
      this.setState({
        clickedEmojiList: [],
        score: 0,
        wonGame: false,
        result: false,
      })
    }
  }

  render() {
    const {emojisList} = this.props
    const totalScore = emojisList.length
    const {score, topScore, wonGame, result} = this.state
    return (
      <div className="container">
        <NavBar score={score} topScore={topScore} result={result} />
        <ul className="emoji-card-container">
          {!result &&
            emojisList.map(eachEmoji => (
              <EmojiCard
                key={eachEmoji.id}
                emojiDetails={eachEmoji}
                shuffledEmojisList={this.shuffledEmojisList}
              />
            ))}
          {result && (
            <WinOrLoseCard
              wonGame={wonGame}
              score={score}
              totalScore={totalScore}
              playAgain={this.playAgain}
            />
          )}
        </ul>
      </div>
    )
  }
}
export default EmojiGame
