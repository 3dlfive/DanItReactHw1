// eslint-disable-next-line
import React from 'react';
import './card-list.styles.scss';
//
const CardList = ({children})=>{
  return (< div className = 'card-list'>
       {children}< /div>)
}

export default CardList;
