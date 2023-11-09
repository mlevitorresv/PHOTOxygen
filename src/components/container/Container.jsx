import React, { useState } from 'react'
import { useEffect } from 'react'
import './container.css'
import { TextField } from '@mui/material'
import {Card} from '../cards/Card'
import { useDispatch, useSelector } from 'react-redux';
import { getSearchThunk } from '../../features/searchThunk';
import { getCardData, getCardError, getCardStatus, searchSlice } from '../../features/searchSlice'


export default function SearchContainer(props){

  const [card, setCard] = useState();
  const [spinner,setSpinner] = useState(false);
  const [error, setError] = useState();
  const [query, setQuery] = useState('');

  const cardData = useSelector(getCardData);
  const cardStatus = useSelector(getCardStatus);
  const cardError = useSelector(getCardError);
  const dispatch = useDispatch('');
  const cards = useSelector((state) => state.search)

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      handleSearch();
    }
  }

  const handleSearch = () => {
    dispatch(getSearchThunk(query))
  }


  useEffect(() => {
    if(cardStatus === "idle"){
      dispatch(getSearchThunk(query))
    }
    else if(cardStatus === "fulfilled"){
      setSpinner(false)
    }
    else if(cardStatus === "pending"){
      setSpinner(true)
    }
    else if(cardStatus === "rejected"){
      setError(cardError)
    }
  }, [dispatch])

  
  console.log("Cards en container", cards)

  return (
    <div className='container'>
      <TextField
        placeholder='Search images...'
        className='container__searchBar'
        id='searchBar'
        onKeyDown={handleKeyPress}
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className='container__cards'>
        {cardData && cardData.map((card)=> (
          <Card key={card.id} card={card}/>
        ))}
      </div>
    </div>
  )
}
