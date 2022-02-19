// Write your code here.
const EmojiCard = props => {
  const {emojiDetails, shuffledEmojisList} = props
  const {emojiName, emojiUrl, id} = emojiDetails
  const onShuffleEmojis = () => {
    shuffledEmojisList(id)
  }

  return (
    <li>
      <button type="button" onClick={onShuffleEmojis}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
