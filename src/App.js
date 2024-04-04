import React from 'react';

import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './home';
import Wallet from './wallets';
import Wallettwo from './wallettwo';

function App() {
  return (
      <>

    <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />}/> */}
          <Route path="/" element={<Wallet />}/>
          <Route path="/wallets" element={<Wallettwo />}/>
         
        


        

          
            
        </Routes>
      </BrowserRouter>
      
      </>
  );
}

export default App;
