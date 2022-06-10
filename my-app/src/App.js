import { Route , Routes } from 'react-router-dom';
import './App.css';
import Managementcommodity from './components/admin/commodity/manegementcommodity/Managementcommodity';
import Admin from './components/layout/Admin';
import User from './components/layout/User';
import Withoutheader from './components/layout/withoutheader';
import PriceandInventorymanagement from './components/admin/commodity/InventoryandPrice/PriceandInventorymanagement';
import Commodityposted from './components/admin/Folloingupuser/Commodityposted';
import Listshop from './components/user/listshop/Listshop';
import Ordered from './components/admin/Folloingupuser/Ordered';
import Waiting from './components/admin/Folloingupuser/Waitingcommodity';
import Home from './components/user/Home';
import Loginadmin from './components/admin/login/Loginadmin';
import Category from './components/user/Category';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<User/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/category' element={<Category/>}/>
          <Route path="/listshop" element={<Listshop/>}/>
        </Route>
        <Route path='/' element={<Withoutheader/>}>
          <Route path='/Loginadmin' element={<Loginadmin/>}/>
        </Route>
        <Route path='/' element={<Admin/>}>
          <Route path='managecommodity' element={<Managementcommodity/>}/>
          <Route path='manageprice' element={<PriceandInventorymanagement/>}/>
          <Route path='waiting' element={<Waiting/>}/>
          <Route path='posted' element={<Commodityposted/>}/>
          <Route path='ordered' element={<Ordered/>}/>
        </Route>
      </Routes>
    </div>
    //  <div>
    //    <AxiosLogin/>
    //  </div>
  );
}

export default App;
