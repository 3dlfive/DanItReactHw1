import React, { Component } from 'react';
import Button from './components/Button/button.component'
import Modal from './components/Modal/modal.component'

class App extends Component {
  state = {isModal:false}
  handleClick = () =>{
    console.log("Hi there, user!");
  }
  render(){
    const {isModal}= this.state



    return (
      <div>
        <p>Test Test</p>
        <Button text="Open first modal" onClick={this.handleClick} BGcolor={{ backgroundColor: '#01FF70' }} />
        <Button text="Open second modal" onClick={this.handleClick} BGcolor={{ backgroundColor: '#F012BE' }} />
        {isModal && <Modal />}
      </div>
    );
  }
}

export default App;
