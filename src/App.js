import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Top from './components/EntrancePage/Entrance';
import Career from './components/Career/Career';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Top />} />
          <Route path='/career' element={<Career />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
