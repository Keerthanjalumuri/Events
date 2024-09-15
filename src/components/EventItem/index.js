import {Component} from 'react'

import './index.css'

class EventItem extends Component {
  render() {
    const {eventDetails, checkRegistrationStatus} = this.props
    const {imageUrl, name, location, registrationStatus} = eventDetails
    const onClickRegister = () => {
      checkRegistrationStatus(registrationStatus)
    }
    return (
      <li className="event-item-list">
        <button type="button" className="event-btn" onClick={onClickRegister}>
          <img src={imageUrl} alt="event" className="event-img" />
        </button>
        <p className="event-heading">{name}</p>
        <p className="event-location">{location}</p>
      </li>
    )
  }
}

export default EventItem
