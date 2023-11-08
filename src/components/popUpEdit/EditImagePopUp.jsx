import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import './editImagePopUp.css'

export const EditImagePopUp = ({ open, onClose, image, onSave }) => {

    const [width, setWidth] = useState(image.width);
    const [height, setHeight] = useState(image.height);
    const [date, setDate] = useState(image.date);
    const [likes, setLikes] = useState(image.likes);

    const handleSave = () => {
        onSave({ width, height, date, likes });
        onClose();
    }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Image Data</DialogTitle>
      <DialogContent>
        <fieldset>
          <legend>Width</legend>
          <input
              name='inputWidth'
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <legend>Height</legend>
          <input
            name='inputHeight'
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <legend>Likes</legend>
          <input
            name='inputLikes'
            type="number"
            value={likes}
            onChange={(e) => setLikes(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <legend>Date</legend>
          <input
            name='inputDate'
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </fieldset>
        
        <Button onClick={handleSave}>Save</Button>
      </DialogContent>
    </Dialog>
  )
}