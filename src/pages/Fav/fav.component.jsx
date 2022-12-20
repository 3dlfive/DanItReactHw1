
import CardList from '../../components/CardList/card-list.component'
import Card from '../../components/Card/card.component'
import { ReactComponent as SunSVG }from '../../SVG/sun.svg'

import './fav.styles.scss'

const FavoritePage = ({handlerToFav,handleClickWindow,shopData,favList}) =>{
    return (
        
            <>
            <h1>{favList.length>0 ? "Список улюблених карток" : "Улюлені картки відстуні"}</h1>
                <CardList>
                
                {shopData.map((el) => favList.includes(el.aritclId) && <Card
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
                     />)}
                </CardList>
          </>
        
    )
}
export default FavoritePage;

