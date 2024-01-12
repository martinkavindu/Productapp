
import './App.css';
import Addproduct from './components/Addproduct';
import ProductList from './components/ProductList';
import Login from './components/Login';
import Register from './components/Register';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className='app'>
<BrowserRouter>
<Routes>
  <Route path='/' element ={<Login/>}/>
  <Route path='/register' element ={<Register/>}/>
  <Route path='/allproducts' element = {<ProductList/>}/>
  <Route path='/addproduct' element = {<Addproduct/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
