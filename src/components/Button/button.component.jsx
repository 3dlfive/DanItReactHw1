import React, {Component} from 'react'
import './button.styles.scss'
import Modal from '../Modal/modal.component'

class Button extends Component {

  render(){
    const {text,BGcolor,onClick,isModal,modalHeader} = this.props;
    return (<button type="button"  onClick={onClick} style={BGcolor} className="button-15" >{text}</button>)

  }
}

Button.defaultProps = {
  text: "Додати",


}
export default Button;
