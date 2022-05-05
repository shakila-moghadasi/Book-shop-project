import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Managementcommodity from './components/admin/commodity/manegementcommodity/Managementcommodity';
import Adminheader from './components/admin/general/Adminheader';
import Loginadmin from './components/admin/login/Loginadmin';
import Commodity from './components/user/commodity/Commodity';
import Finalizeshop from './components/user/finilazeshop/Finalizeshop';
import Firstpage from './components/user/firstpage/Firstpage';
import Userheader from './components/user/general/Userheader';
import Groupcommodity from './components/user/groupcommodity/Groupcommodity';
import Listshop from './components/user/listshop/Listshop';
import Paymentgateway from './components/user/payment/Paymentgateway';
import Resultshop from './components/user/Resultshop/Resultshop';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Userheader/>}>
          <Route index element={<Firstpage/>}/>
          <Route path='/firstpage'  element={<Firstpage/>}/>
          <Route path='/Groupcommodity' element={<Groupcommodity/>}/>
          <Route path='/Commodity' element={<Commodity/>}/>
          <Route path='/Listshop' element={<Listshop/>}/>
          <Route path='/Finalizeshop' element={<Finalizeshop/>}/>
          <Route path='/Resultshop' element={<Resultshop/>}/>
        </Route>
        <Route path='/Paymentgateway' element={<Paymentgateway/>}/>
        <Route path='/Loginadmin' element={<Loginadmin/>}/>
        <Route path='/Admin' element={<Adminheader/>}>
          <Route path='/:Managementcommodity' element={<Managementcommodity/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
