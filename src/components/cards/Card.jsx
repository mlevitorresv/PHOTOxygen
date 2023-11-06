import { useDispatch } from 'react-redux';
import './card.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addToFavorites, removeFromFavorites } from '../../features/favoriteSlice';

export const Card = (props) => {
  return (
    <div className='card'>
      {props.card.map((card, index) => (
        <div key={index} className='card__complete'>
          <img src={card.urls.full} alt={card.alt_description} />
          <div className='favorite-icon'>
            <FavoriteIcon />
          </div>
        </div>
      ))}
    </div>
  )
}
