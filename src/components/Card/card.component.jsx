import React from 'react';
import './card.styles.scss';
import { PropTypes } from 'prop-types';

const Card =(props)=>{
  const {name,url,price,color,aritclId} =props.itemData;
  const {buttons,favComponent,removeFromBucket} = props;
  return (
        <div className='card-container'>
        <div onClick={removeFromBucket}>X</div>
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
  buttons:PropTypes.node,
  favComponent:PropTypes.node.isRequired
};
export default Card;
