import React, { Component } from 'react';
import './card.styles.scss';

class Card extends Component {



  render(){

    const {name,url,price,color,aritclId} =this.props.itemData;
    const {buttons,favComponent} = this.props

    return (
      <div className='card-container'>
      {favComponent}
      <img alt={name} src={url}/>
      <h2> {name} < /h2>
      <p>Price:{price}</p>
      <p>Color:{color}</p>
      <p>aritclId:{aritclId}</p>

      {buttons }

      </div>


    )
  }

}
export default Card;
