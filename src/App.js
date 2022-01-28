import  React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
         <Navbar />
         <Routes>
           <Route path='/' exact />    
         </Routes>
      </BrowserRouter>     
    </div>
  );
}

export default App;
