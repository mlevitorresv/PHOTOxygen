import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import './editImagePopUp.css'
import { useDispatch } from 'react-redux';
import { editFromFavorites } from '../../features/favoriteSlice';

export const EditImagePopUp = ({ open, onClose, image, onSave }) => {

    const [editedData, setEditedData] = useState({ ...image });
    const dispatch = useDispatch();
    

    const handleSave = () => {
      dispatch(editFromFavorites(editedData));
      onClose();
    };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Image Data</DialogTitle>
      <DialogContent>
      <fieldset>
          <legend>Desc</legend>
          <input
              name='inputDesc'
              type="text"
              value={editedData.alt_description}
              onChange={(e) => setEditedData({...editedData, alt_description: e.target.value})}
          />
        </fieldset>
        <fieldset>
          <legend>Width</legend>
          <input
              name='inputWidth'
              type="number"
              value={editedData.width}
              onChange={(e) => setEditedData({...editedData, width: e.target.value})}
          />
        </fieldset>
        <fieldset>
          <legend>Height</legend>
          <input
            name='inputHeight'
            type="number"
            value={editedData.height}
            onChange={(e) => setEditedData({...editedData, height: e.target.value})}
          />
        </fieldset>

        <fieldset>
          <legend>Likes</legend>
          <input
            name='inputLikes'
            type="number"
            value={editedData.likes}
            onChange={(e) => setEditedData({...editedData, likes: e.target.value})}
          />
        </fieldset>

        <fieldset>
          <legend>Date</legend>
          <input
            name='inputDate'
            type="text"
            value={editedData.created_at}
            onChange={(e) => setEditedData({...editedData, created_at: e.target.value})}
          />
        </fieldset>
        
        <Button onClick={handleSave}>Save</Button>
      </DialogContent>
    </Dialog>
  )
}