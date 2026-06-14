import logo from './logo.svg';
import './App.css';
import Nav from './Component/Nav.js';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Footer from './Component/Footer.js';
import PrivateComponent from './Component/PrivateComponent.js';
import SignUp from './Component/SignUp.js';
import Login from './Component/login/Login.js';
import AddProduct from './Component/AddProduct.js';
import ProductList from './Component/product/ProductList.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path='/' element={<ProductList/>}></Route>
            <Route path='/add' element={<h1>Add product</h1>}></Route>
            <Route path='/update' element={<h1>update product</h1>}></Route>
            <Route path='/logout' element={<h1>User logout</h1>}></Route>
            <Route path='/profile' element={<h1>Edit profile</h1>}></Route>
            <Route path='/addproduct' element={<AddProduct/>}></Route>
          </Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
