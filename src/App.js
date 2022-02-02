import  React from 'react';
import './App.css';
import ColorTabs from './components/colourTabs';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Paper } from '@mui/material';
import Image from './images/unsplashbluebackground.jpg';
import CubeImg from './images/cubetech.png';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
    // height: window.innerHeight + 'px'
  }
}


function App() {
  AOS.init();
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
            <div id='aboutnav'></div>
            <h1 className='title animate__animated animate__fadeInLeft' data-aos="fade-right">Game Developer and Software Engineer</h1>
            <div className='imagedescription'>
              <p className='aboutme' data-aos="fade-right">
              For 2 years i have worked and upskilled myself as a junior software developer and as a digital assistance for two non profit organizations in an internship to have the approppriate skills to bring a client's vision to life.</p>
              <div id="cubediv">
                <img src={CubeImg} className='cubeimg' alt=''/>
              </div>

            </div>
        </div>
    </Paper>

  );
}

export default App;
