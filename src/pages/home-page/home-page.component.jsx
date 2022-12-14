import React from 'react'


import CardList from '../../components/CardList/card-list.component'
import Card from '../../components/Card/card.component'
import Button from '../../components/Button/button.component'

import "./home-page.styles.scss"
import { ReactComponent as SunSVG }from '../../SVG/sun.svg'



const HomePage =({handlerToFav,handleClickWindow,handlerCurrentCARD,shopData,favList})=>{

    return (
        <>
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
      </>
    )

}
export default HomePage;