import React, {Component} from 'react'
import './button.styles.scss'

class Button extends Component {
  render(){
    const {text,BGcolor,onClick} = this.props;
    return (<button type="button" onClick={onClick} style={BGcolor} className="button-15" >{text}</button>)
  }
}

export default Button;
