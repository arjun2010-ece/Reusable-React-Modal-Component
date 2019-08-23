import React, { Component,Fragment } from 'react'
import './App.css';
import Backdrop from './components/Backdrop';
import Modal from './components/Modal';

class App extends Component {
  state = {
    creating: false
  };
 
  startCreateEventHandler = () => {
   this.setState({ creating: true });
  }
 
  modalConfirmHandler = () => {
   this.setState({ creating: false });
  }
 
  modalCancelHandler = () => {
   this.setState({ creating: false });
  }
  render() {
    return (
      <Fragment>
        {this.state.creating && <Backdrop onCancel={this.modalCancelHandler} />}
        {this.state.creating && <Modal title="Add Event" canCancel canConfirm
              onCancel={this.modalCancelHandler} onConfirm={this.modalConfirmHandler}>
        <p>Modal content</p>
        </Modal>}
        <div className="events-control">
            <p>Share your own Events</p>
            <button className="btn" onClick={this.startCreateEventHandler}>Create Event</button>
        </div>
      </Fragment>
    )
  }
}


export default App;