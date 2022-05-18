import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addpost from './components/Addpost';
import Searchpost from './components/Searchpost';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewpost from './components/Viewpost';

function App() {
  return (
    <div>
      <BrowserRouter>
     <Routes>
      <Route path="/" exact element={<Addpost/>}/>
      <Route path="/search" exact element={<Searchpost/>}/>
      <Route path="/view" exact element={<Viewpost/>}/>
      
     
     </Routes>
     </BrowserRouter>
    

    </div>
  );
}

export default App;
