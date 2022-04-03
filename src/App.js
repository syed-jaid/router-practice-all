import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';

import NotFound from './component/NotFound/NotFound.js';
import Chart from './component/Chart/Chart';
import Conditional from './component/Conditional-rendring/Conditional';
import Contex from './component/Contex-api/Contex';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/conditional-randring' element={<Conditional></Conditional>}></Route>
        <Route path='/contex-api' element={<Contex></Contex>}></Route>
        <Route path='/rechart' element={<Chart></Chart>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
