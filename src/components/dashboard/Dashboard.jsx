import { Select } from '@mui/material'
import React, { useState } from 'react'
import {Card} from '../cards/Card'
import { TextField } from '@mui/material'
import './dashboard.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromFavorites } from '../../features/favoriteSlice'

export const Dashboard = () => {

  const favoriteImages = useSelector((state) => state.favorites)
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
      <div className="favorite-images">
        {favoriteImages.map((image) => (
          <Card
            key={image.id}
            image={image}
            onEdit={handleEdit}
            onDownload={handleDownload}
            onDelete={handleDelete}
          />
        ))}
      </div>
      {isEditing && (
        <div className='edit-modal'>
          <h3>Edit Image</h3>
          <input type="text"
          value={editingImage.title} 
          onChange={(e) => setEditingImage({ ...editingImage, title: e.target.value })}/>
          <button onClick={handleSaveEdit}>Save</button>
        </div>
      )}
    </div>
  )
}
