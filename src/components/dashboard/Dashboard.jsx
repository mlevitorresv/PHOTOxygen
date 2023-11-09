import { MenuItem, Select } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { TextField } from '@mui/material'
import './dashboard.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToFavorites, removeFromFavorites, selectFavoriteImages } from '../../features/favoriteSlice'
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DownloadIcon from '@mui/icons-material/Download';
import { EditImagePopUp } from '../popUpEdit/EditImagePopUp'

export const Dashboard = () => {

  const [editPopUpOpen, setEditPopUpOpen] = useState(false);
  const [selectedImage, setselectedImage] = useState(null);
  const [searchDescription, setSearchDescription] = useState('');

  const favoriteImages = useSelector(selectFavoriteImages)
  const [images, setImages] = useState(favoriteImages);
  
  const dispatch = useDispatch();

  useEffect(()=> {
    setImages(favoriteImages)
  }, [favoriteImages])

  // useEffect(() => {
  //   window.localStorage.setItem('images', JSON.stringify(images))
  // }, [images])

  // useEffect(() => {
  //   const storedImages = JSON.parse(localStorage.getItem('images'));
  //   if(storedImages && storedImages.length > 0){
  //     dispatch(addToFavorites(storedImages))
  //   }
  // }, [dispatch])

  const handleDownload = image => {
    fetch(image.urls.full)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${image.id}.jpg`
        link.click();
        window.URL.revokeObjectURL(url);
      }).catch((error) => alert(`Error al descargar la foto: ${error}`))

  }

  const handleDelete = (image) => {
    dispatch(removeFromFavorites(image))
  }

  const handleEdit = (image) => {
    setEditPopUpOpen(true);
    setselectedImage(image);
  }

  const filteredFavoriteImages = searchDescription ? 
    images.filter((image) =>
      image.alt_description!== null ? image.alt_description.toLowerCase().includes(searchDescription.toLowerCase()) : console.log('no existen imagenes')
    )
    : images;

  const handleSort = (e) => {
    let sortedImages = [...images];
    switch(e.target.value){
      case 'date':
        sortedImages.sort((img1, img2) => new Date(img1.created_at) - new Date(img2.created_at))
      break;
      case 'width':
        sortedImages.sort((img1, img2) => img1.width - img2.width)
      break;
      case 'height':
        sortedImages.sort((img1, img2) => img1.height - img2.height)
      break;
      case 'likes':
        sortedImages.sort((img1, img2) => img1.likes - img2.likes)
      break;
    }
    setImages(sortedImages);
  }

  return (
    <div className='dashboard'>
      <TextField
        placeholder='Search description...'
        className='dashboard__searchBar'
        id='searchBar'
        onChange={(e) => setSearchDescription(e.target.value)}
      />
      <Select className='dashboard__select' onChange={handleSort} value={'ORDER BY'}>
        <MenuItem value='ORDER BY' >ORDER BY...</MenuItem>
        <MenuItem value='date'>date</MenuItem>
        <MenuItem value='width'>width</MenuItem>
        <MenuItem value='height'>height</MenuItem>
        <MenuItem value='likes'>likes</MenuItem>
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
                desc: <span>{image.alt_description}</span>
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