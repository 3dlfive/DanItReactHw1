import React, { Component } from 'react';
import Button from './components/Button/button.component'
import Modal from './components/Modal/modal.component'

class App extends Component {
  state = {isModal:false,modalHeader:"Modal window one",modalCloseButton:true,modalText:"Modal text one"}
  handleClick = (e) =>{
    console.log(this.text);

    this.setState((prevstate)=>
     {return {
      ...prevstate,
      isModal: !prevstate.isModal}})
    }

  render(){
    const {isModal,modalHeader,modalCloseButton,modalText}= this.state



    return (
      <div>
        <p>Test Test</p>
        <Button text="Open first modal" onClick={this.handleClick} BGcolor={{ backgroundColor: '#01FF70' }} isModal={isModal} />
        <Button text="Open second modal" onClick={this.handleClick} BGcolor={{ backgroundColor: '#F012BE' }} isModal={isModal}/>
        {isModal && <Modal header={modalHeader} closeButton={this.handleClick}/>}
      </div>
    );
  }
}

export default App;
