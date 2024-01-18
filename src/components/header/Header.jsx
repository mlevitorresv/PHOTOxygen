import React from "react";
import './header.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";

export const Header = () => {
    return(
        <header className="header">
            <Link to="/" className="link"><HomeIcon className="header__icon"/></Link>
            <h1 className="header__title">PHOTOxygen</h1>
            <Link to="/my-photos" className="link"><FavoriteIcon className="header__icon"/></Link>
        </header>
    )
}