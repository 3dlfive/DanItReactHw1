import React from 'react';
import "./bucket.styles.scss"
import CardList from '../../components/CardList/card-list.component'
import Card from '../../components/Card/card.component'
import { ReactComponent as SunSVG }from '../../SVG/sun.svg'
import Button from '../../components/Button/button.component'

const Bucket = ({removeFromBucket,handlerToFav,handleClickWindow,shopData,cardinBucket,favList,handlerCurrentCARD}) =>{
 
  const filteredArray =  cardinBucket.map(el=>{
    const newEl = shopData.find(item=>item.aritclId===el);
    return newEl
  }
    )
    
  return (
  
    <>
        <CardList>
       {filteredArray.map((item,index)=>{
        return (<Card
          removeFromBucket={()=>{
            removeFromBucket(item)
          }}
          addToFav={()=>{
              handlerToFav(item)
          }}
          favComponent={favList.includes(item.aritclId) ? <SunSVG className="star-yellow" onClick={()=>{
              handlerToFav(item)
          }}/> : <SunSVG className="star" onClick={()=>{
              handlerToFav(item)
          }}/>}
          openModal={handleClickWindow}
          key={index}
          itemData={item}
          buttons={<><Button text={"Видалити"} onClick={()=>{
            handlerCurrentCARD(item);
            handleClickWindow()
            removeFromBucket(item)
            }}/></>}
           />)
       })}
        </CardList>
  </>
  )
}
export default Bucket


