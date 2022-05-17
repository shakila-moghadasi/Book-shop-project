import { Route , Routes } from 'react-router-dom';
import './App.css';
import Managementcommodity from './components/admin/commodity/manegementcommodity/Managementcommodity';
import Loginadmin from './components/admin/login/Loginadmin';
import Admin from './components/layout/Admin';
import User from './components/layout/User';
import Withoutheader from './components/layout/withoutheader';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<User/>}>

        </Route>
        <Route path='/' element={<Withoutheader/>}>
          <Route path='/Loginadmin' element={<Loginadmin/>}/>
        </Route>
        <Route path='/' element={<Admin/>}>
          <Route path='managecommodity' element={<Managementcommodity/>}/>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
