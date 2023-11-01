import React from "react";
import './header.css'
import { AccountBoxRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="header">
            <Link to="/search" className="link"><h1 className="header__title">PHOTOxygen</h1></Link>
            <Link to="/my-photos" className="link"><AccountBoxRounded className="header__icon"/></Link>
        </header>
    )
}