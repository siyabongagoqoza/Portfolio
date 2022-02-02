import  React from 'react';
import './App.css';
import ColorTabs from './components/colourTabs';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Paper } from '@mui/material';
import Image from './images/unsplashbluebackground.jpg';


const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
    // height: window.innerHeight + 'px'
  }
}

function App() {
  return (
    <Paper style={styles.paperContainer}>
        <div className="App" >
          <meta name="viewport" content="initial-scale=1, width=device-width" />  
          <BrowserRouter>
            <ColorTabs />
            <Routes>
              <Route path='/' exact />    
            </Routes>
          </BrowserRouter>     
        </div>
        <div className='body'>
            <h1 className='title'>Game Developer and Software Engineer</h1>

            <p className='aboutme'>I am a junior software developer and a game developer, I work on frontend and backend</p>
        </div>
    </Paper>

  );
}

export default App;
