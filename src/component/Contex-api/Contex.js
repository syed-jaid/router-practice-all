import React from 'react';
import Grandpa from '../../ContexApi/grendpa/Grandpa';
import Nav from '../Nav/Nav';

const Contex = () => {
    return (
        <div>
            <Nav></Nav>
            <h1>contex</h1>
            <Grandpa></Grandpa>
        </div>
    );
};

export default Contex;