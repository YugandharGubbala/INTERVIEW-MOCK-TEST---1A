import {MdDelete} from 'react-icons/md'

import './index.css'

const Item = props => {
  const {list, deleteIcon} = props
  const {id, imageUrl, name, genre, duration} = list

  const deletebtn = () => {
    deleteIcon(id)
  }
  return (
    <li className="itemmain">
      <div className="imagecontainer">
        <img className="itemimage" src={imageUrl} alt="track" />
        <div>
          <p className="para1">{name}</p>
          <p className="para2">{genre}</p>
        </div>
      </div>
      <div className="btncontainer">
        <p className="para1">{duration}</p>
        <button testid="delete" onClick={deletebtn} className="btn">
          <MdDelete />
        </button>
      </div>
    </li>
    
  )
}
export default Item
