import React, { useState } from 'react'
import { useEffect } from 'react'
import './container.css'
import { TextField } from '@mui/material'
import Card from '../cards/Card'
import { useDispatch, useSelector } from 'react-redux';
import { getSearchThunk } from '../../features/searchThunk';
import { getCardData, getCardError, getCardStatus } from '../../features/searchSlice'


export default function Container(props){

  const [card, setCard] = useState();
  const [spinner,setSpinner] = useState(false);
  const [error, setError] = useState();

  const cardData = useSelector(getCardData);
  const cardStatus = useSelector(getCardStatus);
  const cardError = useSelector(getCardError);
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.search)

  useEffect(() => {
    if(cardStatus === ""){
      dispatch(getSearchThunk())
    }
    else if(cardStatus === "fulfilled"){
      setSpinner(false)
      let listCom = [];
      cardData.forEach(c => {
        listCom.push(<Card key={c.id} card={c}/>)
      });
    }
    else if(cardStatus === "pending"){
      setSpinner(true)
    }
    else if(cardStatus === "rejected"){
      setError(cardError)
    }

    dispatch(getSearchThunk());
  }, [dispatch, cardStatus, cardData])

  
  console.log("Cards en container", cards)

  return (
    <div className='container'>
      <TextField placeholder='Search images...' className='container__searchBar' id='searchBar' />
      <div className='container__cards'>
        {cardData && cardData.map((card )=> (
          <Card key={card.id} card={card}/>
        ))}
      </div>
    </div>
  )
}
