
import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Uploadproduct from './Components/UploadProduct/Uploadproduct';
import Login from './Pages/Login/Login';
import ProtectedRoute from './Components/protectedRoute/ProtectedRoute';
import Product from './Pages/Home/Inventory/Product/Product';
import Inventory from './Pages/Home/Inventory/Inventory';
import SignUp from './Pages/SignUp/SignUp';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div>
    <Header></Header>
    
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/uploadpd' element={<Uploadproduct></Uploadproduct>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/signup' element={<SignUp/>}></Route>
       <Route path='/inventory/:id' element={<ProtectedRoute><ProductDetails></ProductDetails></ProtectedRoute>}></Route>
       <Route path='/manageInventory' element={<ManageInventory></ManageInventory>}></Route>
     </Routes>
    
    </div>
  );
}

export default App;
