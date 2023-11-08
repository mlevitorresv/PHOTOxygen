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
import { EditImagePopUp } from '../popUpEdit/EditImagePopUp'

export const Dashboard = () => {

  const [editPopUpOpen, setEditPopUpOpen] = useState(false);
  const [selectedImage, setselectedImage] = useState(null);
  const [searchDescription, setSearchDescription] = useState('')

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

  const handleEdit = (image) => {
    setEditPopUpOpen(true);
    setselectedImage(image);
  }

  const filteredFavoriteImages = searchDescription ? 
    favoriteImages.filter((image) =>
      image.description!== null ? image.description.toLowerCase().includes(searchDescription.toLowerCase()) : console.log('no existen imagenes')
    )
    : favoriteImages;

  return (
    <div className='dashboard'>
      <TextField
        placeholder='Search description...'
        className='dashboard__searchBar'
        id='searchBar'
        onChange={(e) => setSearchDescription(e.target.value)}
      />
      <Select className='dashboard__select'>
        <option value='date'>date</option>
        <option value='width'>width</option>
        <option value='height'>height</option>
        <option value='likes'>likes</option>
      </Select>
      <div className='favorite__content'>        
        {filteredFavoriteImages.map((image) => (
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
                <EditIcon className='img__icon img__icon-edit' onClick={ () => handleEdit(image)} />
                <DownloadIcon className='img__icon img__icon-download' onClick={() => handleDownload(image)} />
                <DeleteIcon className='img__icon img__icon-remove' onClick={() => handleDelete(image)} />
              </div>
            </div>
          </div>
        ))}

        {editPopUpOpen && selectedImage && (
          <EditImagePopUp
            open={editPopUpOpen}
            onClose={() => setEditPopUpOpen(false)}
            image={selectedImage}
            onSave={(editedData) => {
              setEditPopUpOpen(false)
            }}
          />
        )}
        
      </div>
      
    </div>
  )
}
