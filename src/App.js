import  React from 'react';
import './App.css';
import ColorTabs from './components/colourTabs';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CubeImg from './images/cubetech.png';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  AOS.init({
    mirror: true,
  });
  return (
    <div className="portfolio">
      <div className='homepage' > 
          <div className="App" >
            <meta name="viewport" content="initial-scale=1, width=device-width" />  
            <BrowserRouter>
              <Routes>
                <Route path='/' exact />    
              </Routes>
            </BrowserRouter>     
          </div>
          <div className='navbar'>
            <ColorTabs/>
          </div>
          <div className='body'>
              <div id='aboutnav'></div>
              <h1 className='title' data-aos="fade-right">Game Developer and Software Engineer</h1>
              <div className='imagedescription'>
                <p className='aboutme' data-aos="fade-right">
                For 2 years i have worked and upskilled myself as a junior software developer and as a digital assistance for two non profit organizations in an internship to have the approppriate skills to bring a client's vision to life.</p>
                <div id="cubediv">
                  <a href='#projects'><img src={CubeImg} className='cubeimg' alt=''/></a>
                </div>

              </div>
             
          </div>
          
      </div>
      <div id='projects'>
              <h1 data-aos="fade-right">Hello there piece of sheet </h1>
              <p>Lorem ipsumszjgesalfhds  sfahdsflkajsgdsfasdjgdsgalkj ajklgadjfdskj alkdsjhdskfadfkjfal ldfhak</p>
              <p>Lorem ipsumszjgesalfhds  sfahdsflkajsgdsfasdjgdsgalkj ajklgadjfdskj alkdsjhdskfadfkjfal ldfhak</p>
              <p>Lorem ipsumszjgesalfhds  sfahdsflkajsgdsfasdjgdsgalkj ajklgadjfdskj alkdsjhdskfadfkjfal ldfhak</p>
              <p>Lorem ipsumszjgesalfhds  sfahdsflkajsgdsfasdjgdsgalkj ajklgadjfdskj alkdsjhdskfadfkjfal ldfhak</p>
              <p>Lorem ipsumszjgesalfhds  sfahdsflkajsgdsfasdjgdsgalkj ajklgadjfdskj alkdsjhdskfadfkjfal ldfhak</p>
              <p>Lorem ipsumszjgesalfhds  sfahdsflkajsgdsfasdjgdsgalkj ajklgadjfdskj alkdsjhdskfadfkjfal ldfhak</p>
              <p>Lorem ipsumszjgesalfhds  sfahdsflkajsgdsfasdjgdsgalkj ajklgadjfdskj alkdsjhdskfadfkjfal ldfhak</p>
              <p>Lorem ipsumszjgesalfhds  sfahdsflkajsgdsfasdjgdsgalkj ajklgadjfdskj alkdsjhdskfadfkjfal ldfhak</p>
              <p>Lorem ipsumszjgesalfhds  sfahdsflkajsgdsfasdjgdsgalkj ajklgadjfdskj alkdsjhdskfadfkjfal ldfhak</p>
              <p>Lorem ipsumszjgesalfhds  sfahdsflkajsgdsfasdjgdsgalkj ajklgadjfdskj alkdsjhdskfadfkjfal ldfhak</p>
              <p>Lorem ipsumszjgesalfhds  sfahdsflkajsgdsfasdjgdsgalkj ajklgadjfdskj alkdsjhdskfadfkjfal ldfhak</p>
              <p>Lorem ipsumszjgesalfhds  sfahdsflkajsgdsfasdjgdsgalkj ajklgadjfdskj alkdsjhdskfadfkjfal ldfhak</p>
              <p>Lorem ipsumszjgesalfhds  sfahdsflkajsgdsfasdjgdsgalkj ajklgadjfdskj alkdsjhdskfadfkjfal ldfhak</p>
              <p>Lorem ipsumszjgesalfhds  sfahdsflkajsgdsfasdjgdsgalkj ajklgadjfdskj alkdsjhdskfadfkjfal ldfhak</p>  
      </div>      
  </div>
  );
}

export default App;
