import { Select } from '@mui/material'
import React, { useState } from 'react'
import { TextField } from '@mui/material'
import './dashboard.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromFavorites, selectFavoriteImages } from '../../features/favoriteSlice'

export const Dashboard = () => {

  const favoriteImages = useSelector(selectFavoriteImages)
  
  const dispatch = useDispatch();
  const [editingImage, setEditingImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);


  const handleEdit = image => {
    setEditingImage(image)
    setIsEditing(true)
  }

  const handleSaveEdit = () => {
    setIsEditing(false)
  }

  const handleDownload = image => {
    //
  }

  const handleDelete = image => {
    dispatch(removeFromFavorites(image.id))
  }

  return (
    <div className='dashboard'>
      <TextField placeholder='Search description...' className='dashboard__searchBar' id='searchBar' />
      <Select className='dashboard__select'>
        <option value='date'>date</option>
        <option value='width'>width</option>
        <option value='height'>height</option>
        <option value='likes'>likes</option>
      </Select>

      {favoriteImages && favoriteImages.map((image) => (
          <div key={image.id} className='favorite-image'>
            <img src={image.urls.full} alt={image.alt_description} />
          </div>
        ))}
    </div>
  )
}
