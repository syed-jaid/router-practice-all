import React from 'react';

const Shop = () => {
    return (
        <div>
            <h1 className='mt-4' style={{ color: "gray" }}>Wellcome to our world</h1>
            <div className="input-group mb-3 mt-3 w-50 mx-auto">
                <input type="text" className="form-control p-2" placeholder="Shearch for food" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
            </div>
            <div>
                carts iss here
            </div>
        </div>
    );
};

export default Shop;