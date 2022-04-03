import React, { useContext } from 'react';
import { DataContext } from '../grendpa/Grandpa';

const Me = () => {
    const data = useContext(DataContext)
    return (
        <div className='alldiv'>
            <h1>{data}</h1>
            <h1>Me</h1>
        </div>
    );
};

export default Me;