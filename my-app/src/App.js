import { Route , Routes } from 'react-router-dom';
import './App.css';
import Managementcommodity from './components/admin/commodity/manegementcommodity/Managementcommodity';
import Admin from './components/layout/Admin';
import User from './components/layout/User';
import Withoutheader from './components/layout/withoutheader';
import PriceandInventorymanagement from './components/admin/commodity/InventoryandPrice/PriceandInventorymanagement';
import Commodityposted from './components/admin/Folloingupuser/Commodityposted';
import Ordered from './components/admin/Folloingupuser/Ordered';
import Waiting from './components/admin/Folloingupuser/Waitingcommodity';
import Home from './components/user/Home';
import Loginadmin from './components/admin/login/Loginadmin';
import CategoryComedy from './components/user/Category/CategoryComedy';
import CategoryTragedy from './components/user/Category/CategoryTragedy';
import CategoryFantasy from './components/user/Category/CategoryFantasy';
import CategoryNovel from './components/user/Category/CategoryNovel';
import CategoryPoem from './components/user/Category/CategoryPoem';
import Main from './components/user/shop/Main';
import FinalizeShop from './components/user/shop/FinalizeShop';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<User/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/comedy' element={<CategoryComedy/>}/>
          <Route path='/tragedy' element={<CategoryTragedy/>}/>
          <Route path='/fantasy' element={<CategoryFantasy/>}/>
          <Route path='/novel' element={<CategoryNovel/>}/>
          <Route path='/poem' element={<CategoryPoem/>}/>
          <Route path='/card' element={<Main/>}/>
          <Route path='/formshop' element={<FinalizeShop/>}/>
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
  );
}

export default App;
