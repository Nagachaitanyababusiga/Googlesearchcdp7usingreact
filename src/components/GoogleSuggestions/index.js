import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {SearchInput: ''}

  dothis = event => {
    this.setState(() => ({
      SearchInput: event.target.value.toLowerCase(),
    }))
  }

  ChangeInput = val => {
    this.setState(() => ({
      SearchInput: val,
    }))
  }

  render() {
    const {suggestionsList} = this.props
    const {SearchInput} = this.state
    const newList = suggestionsList.filter(x =>
      x.suggestion.toLowerCase().includes(SearchInput.toLocaleLowerCase()),
    )
    return (
      <div className="cont-1">
        <div className="cont-2">
          <img
            className="imager"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="search-cont">
            <div className="searchBar">
              <img
                className="search-logo"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                className="input-bar"
                placeholder="Search Google"
                onChange={this.dothis}
                value={SearchInput}
                type="search"
              />
            </div>
            <ul className="suggestions">
              {newList.map(x => (
                <SuggestionItem
                  key={x.id}
                  id={x.id}
                  suggestion={x.suggestion}
                  ChangeInput={this.ChangeInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
