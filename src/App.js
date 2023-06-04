import { useState } from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Top from './components/EntrancePage/Entrance';
import Career from './components/Career/Career';
import Store from './components/Store/Store';
import {Box} from '@mui/material';


function App() {
  const [scrollTop, setScrollTop] = useState(0);

  //catch event for line
  const handleScroll = (event) => {
    console.log("eventaskldmalkdmaklsdmklasd");
    setScrollTop(event.currentTarget.scrollTop);
}

console.log("scroll , ",scrollTop);
  return (
    <Box className="App" onScroll={handleScroll}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Top />} />
          <Route path='/career' element={<Career />} />
          <Route path='/store' element={<Store />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
