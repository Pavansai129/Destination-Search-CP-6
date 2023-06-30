// Write your code here
import './index.css'

const DestinationItem = props => {
  const {name, imgUrl} = props

  return (
    <li className="destination-item">
      <img src={imgUrl} alt={name} className="image" />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
