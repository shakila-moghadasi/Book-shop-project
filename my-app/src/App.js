import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Adminheader from './components/admin/Adminheader';
import Userheader from './components/user/Userheader';

function App() {
  return (
    <div>
      {/* <Routes>
        <Route path='/' element={<Userheader/>}>
        </Route>
      </Routes> */}
      <Adminheader/>
    </div>
  );
}

export default App;
