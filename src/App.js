// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Global/Footer/Footer';
import Header from './Components/Global/Header/Header';
import About from './Components/Pages/About/About';
import Blog from './Components/Pages/Blog/Blog';
import Checkout from './Components/Pages/Checkout/Checkout';
import Home from './Components/Pages/Home/Home';
import ForgotPassword from './Components/Pages/LoginRegister/Forgotpassword/ForgotPassword';
import Login from './Components/Pages/LoginRegister/Login/Login';
import Register from './Components/Pages/LoginRegister/Register/Register';
import Notfound from './Components/Pages/Notfound/Notfound';
import TourPackages from './Components/Pages/TourPackages/TourPackages';
import RequireAuth from './Components/utilities/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="page-body">
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/tour-packages' element={<TourPackages></TourPackages>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/about' element={<About></About>}></Route>


          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/reset-password' element={<ForgotPassword></ForgotPassword>}></Route>

    

          <Route path='/checkout/:id' element={
              <RequireAuth>
                <Checkout></Checkout>
              </RequireAuth>

          }></Route>



          <Route path='*' element={<Notfound></Notfound>}></Route>
        </Routes>

      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
