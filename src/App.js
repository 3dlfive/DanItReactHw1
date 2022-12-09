import{ useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

import Button from './components/Button/button.component'
import Modal from './components/Modal/modal.component'
import CardList from './components/CardList/card-list.component.jsx'
import Card from './components/Card/card.component.jsx'

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
      localStorage.СardinBucket=cardinBucket;
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
      <h1>NFT card marketplace</h1>
      <div className="counter-Wrapper">
        <div>{<BacketSVG/>} = {cardinBucket.length}</div>
        <div>{<SunSVG/>} = {favList.length}</div>

        {isModal && <Modal header="Додати в кошик"
                action={<><button className="btn" type="button" onClick={()=>{
                  handlerToBucket(currentCard.aritclId);
                  handleClickWindow();
                }}>OK</button>
                <button className="btn" type="button" onClick={handleClickWindow}>Cancel</button></>}
                text={`Імя картки ${currentCard.name}`}
                closeButton={handleClickWindow}/>}

      </div>

      <CardList>
      {shopData.map((el) => <Card
        addToFav={()=>{
          handlerToFav(el)
        }}
        favComponent={favList.includes(el.aritclId) ? <SunSVG className="star-yellow" onClick={()=>{
          handlerToFav(el)
        }}/> : <SunSVG className="star" onClick={()=>{
          handlerToFav(el)
        }}/>}
        openModal={handleClickWindow}
        key={el.aritclId}
        itemData={el}
        buttons={<><Button onClick={()=>{
        handlerCurrentCARD(el);
        handleClickWindow()
      }}/></>} />)}
      </CardList>

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
