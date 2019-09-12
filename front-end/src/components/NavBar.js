import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props){
    return(
        <ul className="nav">
            <li className="nav-item">
                <Link to="/" className="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/add-income" className="nav-link">Add Income</Link>
            </li>
            <li className="nav-item">
                <Link to="/add-expense" className="nav-link">Add an expense</Link>
            </li>
            <li className="nav-item">
                <Link to="/setup" className="nav-link">Setup your account (start here first)</Link>
            </li>
        </ul>        
    )
}

export default NavBar