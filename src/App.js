import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Top from './components/top/Top';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Top />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
