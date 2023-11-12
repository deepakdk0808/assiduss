import './App.css';
import Sidebar from './Components/Navbar';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <Routes> 
        <Route path="/" element={<Sidebar/>}></Route>
    </Routes>
  );
}

export default App;
