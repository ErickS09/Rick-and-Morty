import React from 'react';
import { Link } from "react-router-dom";

function Detail() {
    return (
        <nav className="navbar navbar-dark bg-primary" >
            <div className="container">
                <a className="navbar-brand text-uppercase" href="/">Rick and Morty</a>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link className="navbar-brand text-uppercase" to="/Location">Location</Link>
                        <Link className="navbar-brand text-uppercase" to="/Episode">Episode</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Detail