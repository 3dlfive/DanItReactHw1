import React from 'react';
import "./bucket.styles.scss"
import CardList from '../../components/CardList/card-list.component'
import Card from '../../components/Card/card.component'
import { ReactComponent as SunSVG }from '../../SVG/sun.svg'
import Button from '../../components/Button/button.component'

import { useSelector, useDispatch } from 'react-redux'

import { setCurrentModal2 } from '../../store/modal/modal.action';
import { setcurrentCard,setfavList } from '../../store/shop/shop.action'

const Bucket = () =>{
  const dispatch = useDispatch();
  const {shopData,favList,cardinBucket} = useSelector(((store)=>{
      return {
        shopData:store.shop.shopData,
        favList:store.shop.favList,
        cardinBucket:store.shop.cardinBucket
      }
    }))
 
  
  const filteredArray = shopData.filter((card)=>cardinBucket.includes(card.aritclId))


  return (

    <>
        <CardList>
       {filteredArray.map((item,index)=>{
        return (<Card
          
         
          favComponent={favList.includes(item.aritclId) ? <SunSVG className="star-yellow" onClick={()=>{
              dispatch(setfavList(item.aritclId))
          }}/> : <SunSVG className="star" onClick={()=>{
              dispatch(setfavList(item.aritclId))
          }}/>}
         
          key={index}
          itemData={item}
          buttons={<><Button text={"Видалити"}  onClick={()=>{
            dispatch(setcurrentCard(item))
            dispatch(setCurrentModal2())
            }}/></>}
           />)
       })}
        </CardList>
  </>
  )
}
export default Bucket
