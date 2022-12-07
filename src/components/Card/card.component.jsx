import React, { Component } from 'react';
import './card.styles.scss';
import { PropTypes } from 'prop-types';

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
Card.defaultProps = {
  name:"PropTypes.string.isRequired",
  url:"PropTypes.string.isRequired",
  price:"PropTypes.string.isRequired",
  color:"PropTypes.string.isRequired",

}
Card.propTypes = {
  name:PropTypes.string,
  url:PropTypes.string,
  price:PropTypes.string,
  color:PropTypes.string,
  buttons:PropTypes.node.isRequired,
  favComponent:PropTypes.node.isRequired
};
export default Card;
