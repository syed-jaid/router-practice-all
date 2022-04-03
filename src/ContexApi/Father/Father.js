import React from 'react';
import Brother from '../Bro/Brother';
import Me from '../Me/Me';
import Sister from '../sister/Sister';

const Father = () => {
    return (
        <div className='alldiv'>
            <h1>father</h1>
            <Me></Me>
            <Brother></Brother>
            <Sister></Sister>
        </div>
    );
};

export default Father;