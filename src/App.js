import { Route, Routes } from 'react-router-dom';
import './App.css';
import Authentication from './common/Authentication/Authentication';
import AdminHeader from './common/Headers/AdminHeader';
import UserHeader from './common/Headers/UserHeader';
import Home from './common/Home/Home';
import AdminHome from './Admin/AdminHome';
import UserHome from './User/UserHome';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Authentication login/>}/>
        <Route path='/register' element={<Authentication/>}/>
        <Route path='/adminheader' element={<AdminHeader/>}/>
        <Route path='/userheader' element={<UserHeader/>}/>
        <Route path='/adminhome' element={<AdminHome/>}/>
        <Route path='/userhome' element={<UserHome/>}/>

      </Routes>
    </div>
  );
}

export default App;
