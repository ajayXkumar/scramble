
import './App.css';
import { useState } from 'react';
import {BrowserRouter,Routes , Route} from "react-router-dom"
import Scramble from './screens/scramble';
function App() {
  return (
    <div className="App">
         
         <BrowserRouter>
         <Routes>
          <Route path="/" element={<Scramble/>}/>
         </Routes>
         
         </BrowserRouter>
    </div>
  );
}

export default App;
