import { useDispatch } from 'react-redux';
import './card.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addToFavorites, removeFromFavorites } from '../../features/favoriteSlice';

export const Card = (props) => {

  const dispatch = useDispatch();
  
  const handleAddToFavorites = () => {
    dispatch(addToFavorites(props.card))
  }

  const cards = Array.isArray(props.card) ? props.card : [props.card]

  return (
    <div className='card'>
      {cards.map((card, index) => (
        <div key={index} className='card__complete'>
          <img src={card.urls.full} alt={card.alt_description} />
          <div className='favorite-icon' onClick={handleAddToFavorites}>
            <FavoriteIcon />
          </div>
        </div>
      ))}
    </div>
  )
}
