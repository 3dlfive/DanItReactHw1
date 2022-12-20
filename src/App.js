import React from 'react'
import { Route,Routes} from "react-router-dom"
import{ useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

import Header from './components/Header/header.component'
import HomePage from "./pages/home-page/home-page.component"
import FavoritePage from "./pages/Fav/fav.component"
import Modal from './components/Modal/modal.component'
import Bucket from './pages/Bucket/bucket.component.jsx'

import { ReactComponent as BacketSVG }from './SVG/backet.svg'
import { ReactComponent as SunSVG }from './SVG/sun.svg'


const App = () =>{
  const [shopData,setshopData] = useState([])
  const [isModal,setisModal] = useState(false)
  const [currentCard,setcurrentCard] = useState({})
  const [cardinBucket,setcardinBucket] = useState([])
  const [favList,setfavList] = useState([])

  useEffect(()=>{
    if((localStorage.FavList)!== undefined && (localStorage.FavList).length>0){
      setfavList(localStorage.FavList.split(","))
    }

    if((localStorage.СardinBucket)!== undefined && (localStorage.FavList).length>0){
      setcardinBucket(localStorage.СardinBucket.split(","))
    }

    fetch('./mydata.json',{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(response=>response.json())
    .then(myDB=>{setshopData(myDB)})

},[])
  useEffect(()=>{
      localStorage.FavList=favList;
  },[favList])
  useEffect(()=>{
      localStorage.cardinBucket=cardinBucket;
  },[cardinBucket])
  const handleClickWindow = () =>{
    setisModal(!isModal)
  }
  const handlerCurrentCARD = (currentCard) => {
    setcurrentCard({...currentCard})
  }
  const handlerToBucket = (id) =>{
      setcardinBucket([...cardinBucket,id])
  }
  const removeFromBucket = ({aritclId})=>{
    const index = cardinBucket.indexOf(aritclId)
   
    
    if (index > -1) {
      let sVariable = cardinBucket.splice(index, 1);
      console.log(sVariable);

      setcardinBucket(sVariable)
      console.log(cardinBucket);
    }
  }
  const handlerToFav = (id) =>{
    if (!favList.includes(id.aritclId)) {
      setfavList([...favList,id.aritclId])
    }
    else {
      setfavList(favList.filter(el=>el!==id.aritclId))
    }
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
                  handlerToBucket(currentCard.aritclId);
                  handleClickWindow();
                }}>OK</button>
                <button className="button-15" type="button" onClick={handleClickWindow}>Cancel</button></>}
                text={`Імя картки ${currentCard.name}`}
                closeButton={handleClickWindow}/>}
       </div>
       <Routes>
        <Route path="/bucket" element={<Bucket 
          removeFromBucket={removeFromBucket}
          handlerToFav={handlerToFav}
          handleClickWindow={handleClickWindow}
          shopData={shopData}
          cardinBucket={cardinBucket}
          favList={favList}
          handlerCurrentCARD={handlerCurrentCARD}
          />}/>
        <Route path="/favorite" element={<FavoritePage
          handlerToFav={handlerToFav}
          handleClickWindow={handleClickWindow}
          shopData={shopData}
          favList={favList}
          />}/>
        <Route path="/" element={ <HomePage handlerToFav={handlerToFav} 
        handleClickWindow={handleClickWindow} 
        handlerCurrentCARD={handlerCurrentCARD}
        shopData={shopData} 
        favList={favList}
        />}/>
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
