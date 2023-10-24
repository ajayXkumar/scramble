
import './App.css';
import { useState } from 'react';
import {BrowserRouter,Routes , Route} from "react-router-dom"
import Scramble from './screens/scramble';
import Ans from './screens/Ans';
function App() {
  return (
    <div className="App">
         
         <BrowserRouter>
         <Routes>
          <Route path="/" element={<Scramble/>}/>
          <Route path='/ans' element={<Ans/>}/>
         </Routes>
         
         </BrowserRouter>
    </div>
  );
}

export default App;
