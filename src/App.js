import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './modules/users/pages/Home';
import Loginpage from './Loginpage';
import Register from './modules/users/pages/Register';
import Watches from './modules/users/pages/Watches';
import Addwatch from './modules/admin/Addwatch';
import Editwatch from './modules/admin/Editwatch';
import Viewall from './modules/admin/Viewall';
import SingleWatch from './modules/users/pages/SingleWatch';
import Cart from './modules/users/pages/Cart';

function App() {
  return (
    < >


   
{/* <Home></Home> */}
    <Routes>

       

      <Route path='/' element={<Home/>} />

      <Route path='/login' element={<Loginpage/>} />

      <Route path='/users/register' element={<Register/>} />

      <Route path='/users/viewallwatches' element={<Watches/>} />

      <Route path='/admin/allview' element={<Viewall/>} />

      <Route path='/admin/add' element={<Addwatch/>} />
      
      <Route path='/admin/edit/:id' element={<Editwatch/>} />

      <Route path='/users/view/single/:id' element={<SingleWatch/>}/>

      <Route path='/users/view/cart' element={<Cart/>} />



    </Routes>



    

      
    </>
  );
}

export default App;
