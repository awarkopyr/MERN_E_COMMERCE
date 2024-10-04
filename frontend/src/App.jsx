import { Routes, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Cart from './pages/Cart'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/footer/Footer'
import Collection from './pages/Collection'
import SearchBar from './components/searchbar/SearchBar'
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Orders';
import Login from './pages/Login'
import Contact from './pages/Contact';

function App() {

  return (
    <>
      <div>
        <ToastContainer />
        <Navbar/>
        <SearchBar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/product/:productId' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/collection' element={<Collection/>}/>
          <Route path='/place-order' element={<PlaceOrder/>}/>
          <Route path='/order' element={<Orders/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </div>
        
    </>
  )
}

export default App
