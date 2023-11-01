import React from 'react'
import './container.css'
import { TextField } from '@mui/material'
import Card from '../cards/Card'
import { useDispatch, useSelector } from 'react-redux';
import { getSearchThunk } from '../../features/searchThunk';


export default function Container(props){

  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards)

  useEffect(() => {
    dispatch(getSearchThunk())
  }, [dispatch])


  return (
    <div className='container'>
      <TextField placeholder='Search images...' className='container__searchBar'/>
      <div className='container__cards'>
        {cards.map((card )=> (
          <Card key={card.id} card={card}/>
        ))}
      </div>
    </div>
  )
}
