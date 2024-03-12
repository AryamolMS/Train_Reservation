import { Route, Routes } from 'react-router-dom';
import './App.css';
import Authentication from './common/Authentication/Authentication';
import AdminHeader from './common/Headers/AdminHeader';
import UserHeader from './common/Headers/UserHeader';
import Home from './common/Home/Home';
import AdminHome from './Admin/AdminHome';
import MyBookings from './User/Bookings/MyBookings';
import UserHome from './User/UserHome/UserHome'
import UserList from './Admin/UserList';
import AddTrain from './Admin/AddTrain';
import Station from './Admin/Station';
import Search from './User/Search/Search';
import StationLogin from './Admin/StationLogin';
import Displaytrain from './Admin/Train/Displaytrain';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home home/>}/>
        <Route path='/login' element={<Authentication login/>}/>
        <Route path='/register' element={<Authentication/>}/>
        <Route path='/adminheader' element={<AdminHeader/>}/>
        <Route path='/userheader' element={<UserHeader/>}/>
        <Route path='/adminhome' element={<AdminHome/>}/>
        <Route path='/userhome' element={<UserHome/>}/>
        <Route path='/userbookings' element={<MyBookings/>}/>
        <Route path='/userlist' element={<UserList/>}/>
        <Route path='/addtrain' element={<AddTrain/>}/>
        <Route path='/station' element={<Station/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/stationlogin' element={<StationLogin/>}/>
        <Route path='/displaytrain' element={<Displaytrain/>}/>

      </Routes>
    </div>
  );
}

export default App;
