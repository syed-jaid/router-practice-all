import React, { useState } from 'react';

const Count = () => {
    const [num1, setnum1] = useState(0)
    const [num2, setnum2] = useState(0)
    const [num3, setnum3] = useState(0)
    const [num4, setnum4] = useState(0)
    // num1 === 5 ? setnum1(100) : console.log('data1');
    // num2 === 5 && setnum2(10);
    num3 === 5 || console.log(100);
    // num1 === 5 ? setnum1(100) : console.log('data4');

    return (
        <div>
            {/* 1 */}
            <h3 className='mt-5'>Conditional  one : {num1}</h3>
            <button onClick={() => setnum1(num1 + 1)} className='px-3 py-1 fs-4 m-2 boder-0 bg-info'>plus Number</button>
            <button onClick={() => setnum1(num1 - 1)} className='px-3 py-1 fs-4 m-2 boder-0 bg-info'>minus Number</button>
            {/* 2 */}
            <h3 className='mt-5'>Conditional  one : {num2}</h3>
            <button onClick={() => setnum2(num2 + 1)} className='px-3 py-1 fs-4 m-2 boder-0 bg-info'>plus Number</button>
            <button onClick={() => setnum2(num2 - 1)} className='px-3 py-1 fs-4 m-2 boder-0 bg-info'>minus Number</button>
            {/* 3 */}
            <h3 className='mt-5'>Conditional  one : {num3}</h3>
            <button onClick={() => setnum3(num3 + 1)} className='px-3 py-1 fs-4 m-2 boder-0 bg-info'>plus Number</button>
            <button onClick={() => setnum3(num3 - 1)} className='px-3 py-1 fs-4 m-2 boder-0 bg-info'>minus Number</button>
            {/* 4 */}
            <h3 className='mt-5'>Conditional  one : {num4}</h3>
            <button onClick={() => setnum4(num4 + 1)} className='px-3 py-1 fs-4 m-2 boder-0 bg-info'>plus Number</button>
            <button onClick={() => setnum4(num4 - 1)} className='px-3 py-1 fs-4 m-2 boder-0 bg-info'>minus Number</button>
        </div>
    );
};

export default Count;