import { useDispatch } from 'react-redux';
import './card.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addToFavorites, removeFromFavorites } from '../../features/favoriteSlice';

export const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.card.urls.full} alt={props.card.alt_description} />
      <div className='favorite-icon'>
        <FavoriteIcon />
      </div>
    </div>
  )
}
