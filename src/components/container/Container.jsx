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
  const [text, setText] = useState();

  const cardData = useSelector(getCardData);
  const cardStatus = useSelector(getCardStatus);
  const cardError = useSelector(getCardError);
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.search)

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      console.log("key press event triggered")
      handleSearch(event);
    }
  }

  const handleSearch = (event) => {
    console.log("Searching..." + event.target.value)
    dispatch(getSearchThunk(text))
  }


  useEffect(() => {
    if(cardStatus === ""){
      dispatch(getSearchThunk())
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
  }, [dispatch, cardData, text])

  
  console.log("Cards en container", cards)

  return (
    <div className='container'>
      <TextField
        placeholder='Search images...'
        className='container__searchBar'
        id='searchBar'
        onKeyDown={handleKeyPress}
        onChange={(event) => setText(event.target.value)}
      />
      <div className='container__cards'>
        {cardData && cardData.map((card)=> (
          <Card key={card.id} card={card}/>
        ))}
      </div>
    </div>
  )
}
