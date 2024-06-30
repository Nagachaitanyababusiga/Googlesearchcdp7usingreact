import './index.css'

const SuggestionItem = props => {
  const {key, id, suggestion, ChangeInput} = props
  console.log(key)
  console.log(id)
  const tothat = () => {
    ChangeInput(suggestion)
  }
  return (
    <li className="arrow-cont">
      <p>{suggestion}</p>
      <img
        className="arrower"
        onClick={tothat}
        alt="arrow"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
      />
    </li>
  )
}

export default SuggestionItem
