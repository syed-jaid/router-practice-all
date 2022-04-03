import { createContext } from 'react';
import Father from '../Father/Father';
import Uncal from '../uncal/Uncal';
import Unti from '../unti/Unti';
import './Grandpa.css';
export const DataContext = createContext('find')
const Grandpa = () => {
    const data = "data";
    return (
        <DataContext.Provider value={data}>
            <div className='alldiv'>
                <h1>GrandPa</h1>
                <div className='alldiv d-flex justify-content-around'>

                    <Father></Father>
                    <Uncal></Uncal>
                    <Unti></Unti>
                </div>
            </div>

        </DataContext.Provider>
    );
};

export default Grandpa;