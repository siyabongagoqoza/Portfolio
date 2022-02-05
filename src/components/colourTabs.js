import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './colourTabs.css';
import '../App';

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='wholenav'>
    <Box id='navboxName' sx={{ width: '300%' }}>
      <Tabs value={value}  onChange={handleChange} aria-label="nav tabs example" >
        <LinkTab id="myname" label="Siyabonga Goqoza" href="#aboutnav" />
      </Tabs>
    </Box>        
    <Box id='navbox' sx={{ width: '100%' }}>
      <Tabs value={value}  onChange={handleChange} aria-label="nav tabs example" >
        <LinkTab id="labeltab" label="Projects" href="#projects" />
        <LinkTab id="labeltab" label="Skills" href="/trash" />
        <LinkTab id="labeltab" label="Contact Me" href="/spam" />
      </Tabs>
    </Box>
    </div>
  );
}