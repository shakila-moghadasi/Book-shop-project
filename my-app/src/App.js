import { Route , Routes } from 'react-router-dom';
import './App.css';
import Managementcommodity from './components/admin/commodity/manegementcommodity/Managementcommodity';
import Loginadmin from './components/admin/login/Loginadmin';
import AxiosLogin from './components/admin/login/AxiosLogin';
import Admin from './components/layout/Admin';
import User from './components/layout/User';
import Withoutheader from './components/layout/withoutheader';
import PriceandInventorymanagement from './components/admin/commodity/InventoryandPrice/PriceandInventorymanagement';
import Commodityposted from './components/admin/Folloingupuser/ordermanagement/Commodityposted';
import Waitingcommodity from './components/admin/Folloingupuser/ordermanagement/Waitingcommodity';
import Listshop from './components/user/listshop/Listshop';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<User/>}>
          <Route path="/listshop" element={<Listshop/>}/>
        </Route>
        <Route path='/' element={<Withoutheader/>}>
          <Route path='/Loginadmin' element={<Loginadmin/>}/>
        </Route>
        <Route path='/' element={<Admin/>}>
          <Route path='managecommodity' element={<Managementcommodity/>}/>
          <Route path='manageprice' element={<PriceandInventorymanagement/>}/>
          <Route path='posted' element={<Commodityposted/>}/>
          <Route path='waiting' element={<Waitingcommodity/>}/>
        </Route>
      </Routes>
    </div>
    //  <div>
    //    <AxiosLogin/>
    //  </div>
  );
}

export default App;
