import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import Button from './components/Button/button.component'
import Modal from './components/Modal/modal.component'
import CardList from './components/CardList/card-list.component.jsx'
import Card from './components/Card/card.component.jsx'

import { ReactComponent as BacketSVG }from './SVG/backet.svg'
import { ReactComponent as SunSVG }from './SVG/sun.svg'


class App extends Component {
  state = {
    shopData:[],
    isModal:false,
    currentCard:{},
    cardinBucket:[],
    favList:[]
  }
  handleClickWindow = () =>{
    this.setState((prevstate)=>
    {return {
      ...prevstate,
      isModal: !prevstate.isModal,
    }})
  }

  handlerCurrentCARD = (currentCard) => {
		this.setState((prevState) => {
			return {
				...prevState,
				currentCard: {...currentCard}
			}
		})
	}

  handlerToBucket = (id) =>{
    this.setState((prevState) => {
			return {
				...prevState,
				cardinBucket: [...this.state.cardinBucket,id]
			}
		},()=>{
      localStorage.cardinBucket=this.state.cardinBucket;
    })

  }
  handlerToFav = (id) =>{
    if (!this.state.favList.includes(id.aritclId)) {
      this.setState((prevState) => {
  			return {
  				...prevState,
  				favList: [...this.state.favList,id.aritclId]
  			}
  		},()=>{localStorage.FavList=this.state.favList;})
    }
    else {
      this.setState((prevState) => {
        return {
          ...prevState,
          favList: this.state.favList.filter(el =>el!==id.aritclId)
        }
      },()=>{localStorage.FavList=this.state.favList;})
    }
  }

  componentDidMount(){
    if((localStorage.FavList)!== undefined && (localStorage.FavList).length>0)
    {
      this.setState(prevState=>{
        return {
          ...prevState,
          favList:localStorage.FavList.split(",")
      }})
    }

    if((localStorage.cardinBucket)!== undefined){
      this.setState(prevState=>{
        return {
          ...prevState,
          cardinBucket:localStorage.cardinBucket.split(",")
      }})
    }

    fetch('./mydata.json',{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(response=>response.json())
    .then(myDB=>{
      this.setState(prevState=>{return {
        ...prevState,
        shopData:myDB
      }})
    })
  }


  render(){
    const {shopData,isModal,currentCard,cardinBucket,favList}= this.state;

    return (
      <div className="main-page">
        <h1>NFT card marketplace</h1>
        <div className="counter-Wrapper">
          <div>{<BacketSVG/>} = {cardinBucket.length}</div>
          <div>{<SunSVG/>} = {favList.length}</div>

          {isModal && <Modal header="Додати в корзину"
                  action={<><button className="btn" type="button" onClick={()=>{
                    this.handlerToBucket(currentCard.aritclId);
                    this.handleClickWindow();
                  }}>OK</button>
                  <button className="btn" type="button" onClick={this.handleClickWindow}>Cancel</button></>}
                  text={`Імя картки ${currentCard.name}`}
                  closeButton={this.handleClickWindow}/>}

        </div>

        <CardList>
        {shopData.map((el) => <Card
          addToFav={()=>{
            this.handlerToFav(el)
          }}
          favComponent={favList.includes(el.aritclId) ? <SunSVG className="star-yellow" onClick={()=>{
            this.handlerToFav(el)
          }}/> : <SunSVG className="star" onClick={()=>{
            this.handlerToFav(el)
          }}/>}
          openModal={this.handleClickWindow}
          key={el.aritclId}
          itemData={el}
          buttons={<><Button onClick={()=>{
          this.handlerCurrentCARD(el);
          this.handleClickWindow()
        }}/></>} />)}
        </CardList>

      </div>
    )
  }
}
App.propTypes = {
  shopData:PropTypes.array,
  isModal:PropTypes.bool,
  currentCard:PropTypes.object,
  cardinBucket:PropTypes.array,
  favList:PropTypes.array
};
export default App;
