import React from 'react'

import './button.styles.scss'
import { PropTypes } from 'prop-types';


const Button = ({text,onClick}) =>{
    return (<button type="button"  onClick={onClick}  className="button-15" >{text}</button>)

}

Button.defaultProps = {
  text: "Додати",
}
Button.propTypes = {
  text:PropTypes.string,
  onClick:PropTypes.func.isRequired,
};

export default Button;
