import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';

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
        <label htmlFor="inputWidth">Width</label>
        <input
            name='inputWidth'
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
        />
        <br />
        <label htmlFor="inputHeight">Height</label>
        <input
            name='inputHeight'
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
        />
        <br />
        <label htmlFor="inputLikes">Likes</label>
        <input
            name='inputLikes'
            type="number"
            value={likes}
            onChange={(e) => setLikes(e.target.value)}
        />
        <br />
        <label htmlFor="inputDate">Date</label>
        <input
            name='inputDate'
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
        />
        <Button onClick={handleSave}>Save</Button>
      </DialogContent>
    </Dialog>
  )
}