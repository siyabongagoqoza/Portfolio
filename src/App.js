import  React from 'react';
import './App.css';
import ColorTabs from './components/colourTabs';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Paper } from '@mui/material';
import Image from './images/unsplashbluebackground.jpg';
import CubeImg from './images/cubetech.png';
import { merge, tada, flip} from 'react-animations';


const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
    // height: window.innerHeight + 'px'
  }
}

const tadaFlip = merge(tada, flip);

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
            <div className='imagedescription'>
              <p className='aboutme'>
              For 2 years i have worked and upskilled myself as a junior software developer and as a digital assistance for two non profit organizations in an internship to have the approppriate skills to bring a clients vision to life.</p>
              <div data-aos="flip-left" id="cubediv">
                <img src={CubeImg}/>
              </div>

            </div>
        </div>
    </Paper>

  );
}

export default App;
