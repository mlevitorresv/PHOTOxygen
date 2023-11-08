import { Select } from '@mui/material'
import React, { useState } from 'react'
import { TextField } from '@mui/material'
import './dashboard.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromFavorites, selectFavoriteImages } from '../../features/favoriteSlice'
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DownloadIcon from '@mui/icons-material/Download';

export const Dashboard = () => {

  const favoriteImages = useSelector(selectFavoriteImages)
  
  const dispatch = useDispatch();

  const handleDownload = image => {
    const link = document.createElement('a');
    link.href = image.urls.full;
    link.download = `${image.id}.jpg`;
    link.click();
  }

  const handleDelete = image => {
    dispatch(removeFromFavorites(image))
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
      <div className='favorite__content'>        
        {favoriteImages.map((image) => (
          <div key={image.id} className='favorite__image'>
            {image.urls && image.urls.full && (
              <img src={image.urls.full} alt={image.alt_description} />
            )}
            <div className='favorite__icon'>
              <FavoriteIcon />
            </div>
            <div>
              <p className='favorite__info'>
                desc: <span>{image.description}</span>
                <br />
                width: <span>{image.width}</span>
                <br />
                height: <span>{image.height}</span>
                <br />
                likes: <span>{image.likes}</span>
                <br />
                date added: <span>{image.created_at}</span>
              </p>
              <div className='favorite__footer'>
                <EditIcon className='img__icon img__icon-download' />
                <DownloadIcon className='img__icon img__icon-edit' onClick={() => handleDownload(image)} />
                <DeleteIcon className='img__icon img__icon-remove' onClick={() => handleDelete(image)} />
              </div>
            </div>
          </div>
        ))}
        
      </div>
      
    </div>
  )
}
