import React from 'react'
import { Route,Routes} from "react-router-dom"
import{  useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch,useSelector } from 'react-redux';

import Header from './components/Header/header.component'
import HomePage from "./pages/home-page/home-page.component"
import FavoritePage from "./pages/Fav/fav.component"
import Modal from './components/Modal/modal.component'
import Bucket from './pages/Bucket/bucket.component.jsx'
import Button from './components/Button/button.component'
import { ReactComponent as BacketSVG }from './SVG/backet.svg'
import { ReactComponent as SunSVG }from './SVG/sun.svg'

import { setCurrentModal,setCurrentModal2 } from './store/modal/modal.action';
import { setShopData,removeFromBucket,setcardinBucket } from './store/shop/shop.action';

const App = () =>{
  
  const dispatch = useDispatch();
  const {isModal,isModal2,currentCard,favList,cardinBucket} = useSelector((store)=>{
    return {isModal:store.modal.isModal,
      isModal2:store.modal.isModal2,
      currentCard:store.shop.currentCard,
      favList:store.shop.favList,
      cardinBucket:store.shop.cardinBucket
    }
  })
 


  useEffect(()=>{

    fetch('./mydata.json',{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(response=>response.json())
    .then(myDB=>{ dispatch(setShopData(myDB))})

},[])

  useEffect(()=>{
      localStorage.setItem("favList",JSON.stringify(favList))
  },[favList])
  useEffect(()=>{
      localStorage.setItem("cardinBucket",JSON.stringify(cardinBucket));
  },[cardinBucket])

  //OPEN CLOSE MODALS
  const handleClickWindow = () =>{
    dispatch(setCurrentModal())
    
  }
  const handleClickWindowBucketModal = () =>{
    dispatch(setCurrentModal2())
  }

 


 
  return (

    <div className="main-page">
    <Header />
      <h1>NFT card marketplace</h1>


      <div className="counter-Wrapper">
        <div>{<BacketSVG/>} = {cardinBucket.length}</div>
        <div>{<SunSVG/>} = {favList.length}</div>

        {isModal && <Modal header="Додати в кошик"
                action={<><button className="button-15" type="button" onClick={()=>{
                  dispatch(setcardinBucket(currentCard.aritclId))
                  handleClickWindow();
                }}>OK</button>
                <button className="button-15" type="button" onClick={handleClickWindow}>Cancel</button></>}
                text={`Імя картки ${currentCard.name}`}
                closeButton={handleClickWindow}/>}
        {isModal2 && <Modal header="Видалити з кошика"
                action={<>
                <Button text="Підтвердити" onClick={()=>{
                  dispatch(removeFromBucket(currentCard.aritclId))
                  handleClickWindowBucketModal();
                }} />
                <Button text="Відміна" onClick={()=>{  handleClickWindowBucketModal();
                }} />
                </>
                }
                text={`Імя картки ${currentCard.name}`}
                closeButton={handleClickWindowBucketModal}/>}
       </div>
       <Routes>
        <Route path="/bucket" element={<Bucket/>}/>
        <Route path="/favorite" element={<FavoritePage/>}/>
        <Route path="/" element={ <HomePage/>}/>
      </Routes>
      </div>

  )
}

App.defaultProps = {
  shopData:[],
  isModal:false,
  currentCard:{},
  cardinBucket:[],
  favList:[]
}
App.propTypes = {
  shopData:PropTypes.array,
  isModal:PropTypes.bool,
  currentCard:PropTypes.object,
  cardinBucket:PropTypes.array,
  favList:PropTypes.array
};
export default App;
