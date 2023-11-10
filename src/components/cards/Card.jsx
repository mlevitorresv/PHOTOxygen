import { useDispatch, useSelector } from 'react-redux';
import './card.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addToFavorites, removeFromFavorites, selectFavoriteImages } from '../../features/favoriteSlice';

export const Card = (props) => {

  const dispatch = useDispatch();
  const favoriteImages = useSelector(selectFavoriteImages);
  const isFavorite = favoriteImages.some((favImage) =>favImage.id === props.card.id)
  
  const handleAddToFavorites = () => {
    if(isFavorite){
      alert("Esta foto ya está en favoritos")
    }else{
      dispatch(addToFavorites(props.card))
    }
  }

  const cards = Array.isArray(props.card) ? props.card : [props.card]

  
  return (
    <div className='card'>
      {cards.map((card, index) => (
        <div key={index} className='card__complete'>
          <img src={card.urls.full} alt={card.alt_description} />
          <div 
            className={`favorite-icon ${isFavorite ? 'red' : 'gray'}`}
            onClick={handleAddToFavorites}
          >
            <FavoriteIcon className='icon'/>
          </div>
        </div>
      ))}
    </div>
  )
}
