import React from "react";
import { Link } from 'react-router-dom';
import './Navigation.css'; 

export default function Navigation() {
    return (
        <div className="nav">
            <h1>News App</h1>
        <div className="navigation-container">
            <Link to="/Business" className="navigation-card">
                <h2>Business News</h2>
                <p>Stay updated with the latest business news</p>
            </Link>
            <Link to="/Sports" className="navigation-card">
                <h2>Sports News</h2>
                <p>Catch up on all the sports action</p>
            </Link>
            <Link to="/Tech" className="navigation-card">
                <h2>Tech News</h2>
                <p>Stay updated with the latest Technology</p>
            </Link>
        </div>
        </div>
    );
}
