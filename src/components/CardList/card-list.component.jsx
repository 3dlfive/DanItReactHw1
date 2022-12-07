// eslint-disable-next-line
import React, { Component } from 'react';
import Card from '../Card/card.component.jsx';
import './card-list.styles.scss';

class CardList extends Component{

  render(){
    const {shopData,changeFavStatus} =this.props;

    return (< div className = 'card-list'>
      {this.props.children}
           < /div>)

  }
}
export default CardList;
