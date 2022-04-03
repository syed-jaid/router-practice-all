import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light main-div">
            <div className="container-fluid">
                <h3 className='ms-5'>
                    Nav bar
                </h3>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ms-5">
                            <Link className='link-of-nav' to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='link-of-nav' to='/contex-api'>ConTex API</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='link-of-nav' to='/rechart'>Chart</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='link-of-nav' to='/conditional-randring'>Randring</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;