// Write your code here
import {Component} from 'react'

import './index.css'

const registrationStatusConstants = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registrationClosed: 'REGISTRATIONS_CLOSED',
  registered: 'REGISTERED',
}

class ActiveEventRegistrationDetails extends Component {
  state = {
    registrationStatus: this.props.status,
  }

  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status) {
      this.setState({registrationStatus: this.props.status})
    }
  }

  renderInital = () => {
    return (
      <p className="registration-info">
        Click on an event, to view its registration details
      </p>
    )
  }

  renderYetToRegister = () => {
    return (
      <div className="yet-to-register-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
          alt="yet to register"
          className="yet-to-register-img"
        />
        <p className="yet-to-register-text">
          A live performance brings so much to your relationship with dance. seeing
          dance live can often make you fall totally love with this beautiful
          art form.
        </p>
        <button type="button" className="yet-to-register-btn">
          Register Here
        </button>
      </div>
    )
  }

  renderRegistered = () => {
    return (
      <div className="registered-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          alt="registered"
          className="registered-img"
        />
        <h1 className="registered-heading">
          You have already registered for the event
        </h1>
      </div>
    )
  }

  renderRegistrationsClosed = () => {
    return (
      <div className="registrations-closed-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
          alt="registrations closed"
          className="registrations-closed-img"
        />
        <h1 className="registrations-closed-heading">
          Registrations Are Closed Now!
        </h1>
        <p className="registrations-closed-text">
          Stay tuned. We will reopen the registrations soon!.
        </p>
      </div>
    )
  }

  renderCard = () => {
    const {registrationStatus} = this.state
    switch (registrationStatus) {
      case registrationStatusConstants.initial:
        return this.renderInital()
      case registrationStatusConstants.registered:
        return this.renderRegistered()
      case registrationStatusConstants.yetToRegister:
        return this.renderYetToRegister()
      case registrationStatusConstants.registrationClosed:
        return this.renderRegistrationsClosed()
      default:
        return null
    }
  }

  render() {
    return <div className="registration-card">{this.renderCard()}</div>
  }
}

export default ActiveEventRegistrationDetails
