import React from 'react'


import CardList from '../../components/CardList/card-list.component'
import Card from '../../components/Card/card.component'
import Button from '../../components/Button/button.component'

import "./home-page.styles.scss"
import { ReactComponent as SunSVG }from '../../SVG/sun.svg'
import Spinner from '../../components/spinner/spinner.component';

import { useSelector, useDispatch } from 'react-redux';
import { setCurrentModal } from '../../store/modal/modal.action'
import { setcurrentCard, setfavList } from '../../store/shop/shop.action'


const HomePage =()=>{
    const dispatch = useDispatch();
    const {shopData,favList,isLoading} = useSelector(((store)=>{
        return {
          shopData:store.shop.shopData,
          favList:store.shop.favList,
          isLoading:store.shop.isLoading}
      }))
      

    return (
        <>
            {
                isLoading ? <Spinner/> : <CardList>
                {shopData.map((el) => <Card
                addToFav={()=>{
                    dispatch(setfavList(el.aritclId))
                }}
                favComponent={favList.includes(el.aritclId) ? <SunSVG className="star-yellow" onClick={()=>{
                    dispatch(setfavList(el.aritclId))
                }}/> : <SunSVG className="star" onClick={()=>{
                    dispatch(setfavList(el.aritclId))
                   
                }}/>}
                key={el.aritclId}
                itemData={el}
                buttons={<><Button onClick={()=>{
                    dispatch(setcurrentCard({...el}))
                    dispatch(setCurrentModal())
                }}/></>} />)}
                </CardList>
            }
            
      </>
    )

}
export default HomePage;