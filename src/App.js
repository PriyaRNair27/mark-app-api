import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Add from './Components/Add';
import View from './Components/View';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Search from './Components/Search';


function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Add/>}/>
      <Route path="/view" exact element={<View/>}/>
      <Route path="/search" exact element={<Search/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
