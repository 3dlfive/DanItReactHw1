import React, {Component} from 'react'
import './button.styles.scss'
import { PropTypes } from 'prop-types';

class Button extends Component {

  render(){
    const {text,onClick} = this.props;
    return (<button type="button"  onClick={onClick}  className="button-15" >{text}</button>)

  }
}

Button.defaultProps = {
  text: "Додати",
}
Button.propTypes = {
  text:PropTypes.string,
  onClick:PropTypes.func.isRequired,
};

export default Button;
