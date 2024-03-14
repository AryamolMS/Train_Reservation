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
import BookNow from './User/Bookings/BookNow';
import Check from './User/Search/Check';
import Booked from './User/Search/Booked';
import Trainsearch from './User/Search/Trainsearch';
import Footer from './common/Footer/Footer';

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
        <Route path='/booknow' element={<BookNow/>}/>
        <Route path='/check' element={<Check/>}/>
        <Route path='/booked' element={<Booked/>}/>


     
        <Route path='/trainsearch' element={<Trainsearch/>}/>
      </Routes>
      <Footer/>

    </div>
    
  );
}

export default App;
