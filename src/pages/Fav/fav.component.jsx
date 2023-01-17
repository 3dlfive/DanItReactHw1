
import CardList from '../../components/CardList/card-list.component'
import Card from '../../components/Card/card.component'
import { ReactComponent as SunSVG }from '../../SVG/sun.svg'

import './fav.styles.scss'

import { useSelector, useDispatch } from 'react-redux'
import { setfavList } from '../../store/shop/shop.action'

const FavoritePage = () =>{
    const dispatch = useDispatch();
    const {shopData,favList} = useSelector(((store)=>{
        return {
          shopData:store.shop.shopData,
          favList:store.shop.favList,
        }
      }))

    return (
        
            <>
            <h1>{favList.length>0 ? "Список улюблених карток" : "Улюлені картки відстуні"}</h1>
                <CardList>
                
                {shopData.map((el) => favList.includes(el.aritclId) && <Card
                    favComponent={favList.includes(el.aritclId) && <SunSVG className="star-yellow" onClick={()=>{
                        dispatch(setfavList(el.aritclId))
                    }}/> }
                    key={el.aritclId}
                    itemData={el}
                     />)}
                </CardList>
          </>
        
    )
}
export default FavoritePage;

