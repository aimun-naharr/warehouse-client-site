
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Uploadproduct from './Components/UploadProduct/Uploadproduct';
function App() {
  return (
    <div>
    <Header></Header>
    
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/uploadpd' element={<Uploadproduct></Uploadproduct>}></Route>
     </Routes>
    </div>
  );
}

export default App;
