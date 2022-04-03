import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div >
            <h1 className='mt-5 pt-5'>Not Fount sorry</h1>
            <h1>$ 404</h1>
            <button className='px-5 py-3 found-button'>
                <Link className='links' to='/'>Back to the Home</Link>
            </button>
        </div>
    );
};

export default NotFound;