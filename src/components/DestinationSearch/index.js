// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    let {searchInput} = this.state
    searchInput = searchInput.toLowerCase()
    const {destinationsList} = this.props
    const filteredList = destinationsList.filter(eachItem => {
      const name = eachItem.name.toLowerCase()
      if (name.includes(searchInput)) {
        return true
      }
      return false
    })

    return (
      <div className="bg-container">
        <div className="app-content-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-container">
            <input
              type="search"
              className="search"
              placeholder="search"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="destination-items-container">
            {filteredList.map(eachItem => (
              <DestinationItem
                key={eachItem.id}
                name={eachItem.name}
                imgUrl={eachItem.imgUrl}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
