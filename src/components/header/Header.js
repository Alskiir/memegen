import React from "react";
import troll from './trollface.png';
import './header.css';

function Header() {
    return (
        <div className="header">
            <div className="header--main">
                <img className="header--troll" src={troll} alt="trollface" />
                <h2 className="header--title">Meme Generator</h2>
            </div>
            <p className="header--react">React Course - Project 3</p>
        </div>
    )
}

export default Header