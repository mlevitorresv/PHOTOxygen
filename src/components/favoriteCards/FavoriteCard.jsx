import React from 'react'

export const FavoriteCard = ({ image, onEdit, onDownload, onDelete }) => {
    return (
        <div className="dashboard-card">
            <img src={image.url} alt={image.alt} />
            <div className="image-details">
                <p>Date: {image.uploadDate}</p>
                <p>Width: {image.width}</p>
                <p>Height: {image.height}</p>
                <p>Likes: {image.likes}</p>
            </div>
            <div className="toolbar">
                <button onClick={() => onEdit(image)}>Edit</button>
                <button onClick={() => onDownload(image)}>Download</button>
                <button onClick={() => onDelete(image)}>Delete</button>
            </div>
        </div>
    );
};





