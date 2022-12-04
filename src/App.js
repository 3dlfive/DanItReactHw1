import React, { Component } from 'react';
import Button from './components/Button/button.component'
import Modal from './components/Modal/modal.component'

class App extends Component {
  state = {
    isModal:false,
    isModal2:false,
    modalHeader:"Do you want deleate these text?",
    modalCloseButton:true,
    modalText:"Modal text one",
    actionsButtons:'{<><button className="btn" type="button">OK</button><button className="btn" type="button" onClick={closeButton}>Cancel</button></>}'
  }

  handleClickM1 = () =>{
    
    this.setState((prevstate)=>
     {return {
      ...prevstate,
      isModal: !prevstate.isModal,
      modalText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid.",

    }})}


  handleClickM2 = () =>{
      this.setState((prevstate)=>
      {return {
      ...prevstate,
      isModal2: !prevstate.isModal2,
      modalText: "Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore suscipit quas? Nulla, placeat.",

      }})
      }

    handleClickWindow = () =>{
      this.setState((prevstate)=>
      {return {
        ...prevstate,
        isModal: !prevstate.isModal,
      }})}
    handleClickWindow2 = () =>{
      this.setState((prevstate)=>
      {return {
        ...prevstate,
        isModal2: !prevstate.isModal2,
      }})}

  render(){
    const {isModal2,isModal,modalHeader,modalText}= this.state

    return (
      <div className="main-page">

        <Button text="Open first modal" onClick={this.handleClickM1} BGcolor={{ backgroundColor: '#01FF70' }} />

        <Button text="Open second modal" onClick={this.handleClickM2} BGcolor={{ backgroundColor: '#F012BE' }} />

        {isModal && <Modal header={modalHeader}
        action={<><button className="btn" type="button">OK</button>
        <button className="btn" type="button" onClick={this.handleClickWindow}>Cancel</button></>}
        text={modalText}
        closeButton={this.handleClickWindow}/>}

        {isModal2 && <Modal header={modalHeader}
        action={<><button className="btn2" type="button">OK</button>
        <button className="btn2" type="button" onClick={this.handleClickWindow2}>Cancel</button></>}
        text={modalText}
        closeButton={this.handleClickWindow2}/>}
      </div>
    );
  }
}

export default App;
