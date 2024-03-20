import { Navigate, Route, Routes, redirect } from 'react-router-dom';
import './App.css';
import Authentication from './common/Authentication/Authentication';
import AdminHeader from './common/Headers/AdminHeader';
import UserHeader from './common/Headers/UserHeader';
import Home from './common/Home/Home';
import AdminHome from './Admin/AdminHome/AdminHome';
import MyBookings from './User/Bookings/MyBookings';
import UserHome from './User/UserHome/UserHome'
import AddTrain from './Admin/Train & Seat add/AddTrain';
import Station from './Admin/Trainregister/Station';
import Search from './User/Search/Search';
import StationLogin from './Admin/Trainregister/StationLogin';
import Displaytrain from './Admin/Train Display/Displaytrain';
import BookNow from './User/Bookings/BookNow';
import Check from './User/Search/Check';
import Footer from './common/Footer/Footer';
import { useContext } from 'react';
import { isAuthtokenContext } from './context/ContextShare';
import Feedback from './User/Feedback/Feedback';
import Status from './User/TrainStatus/Status';
import Payment from './User/Bookings/Payment';
import Refunds from './User/Refunds/Refunds';

function App() {
  const {isAuthtken,setIsAuthtoken} = useContext(isAuthtokenContext)
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home home/>}/>
        <Route path='/login' element={<Authentication login/>}/>
        <Route path='/register' element={<Authentication/>}/>
        <Route path='/adminheader' element={<AdminHeader/>}/>
        <Route path='/userheader' element={<UserHeader/>}/>
        <Route path='/adminhome' element={isAuthtken?<AdminHome/>:<Home/>}/>
        <Route path='/userhome' element={isAuthtken?<UserHome/>:<Home/>}/>
        <Route path='/userbookings' element={<MyBookings/>}/>
        <Route path='/addtrain' element={<AddTrain/>}/>
        <Route path='/station' element={<Station register/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/stationlogin' element={<StationLogin/>}/>
        <Route path='/displaytrain' element={<Displaytrain/>}/>
        <Route path='/booknow' element={<BookNow/>}/>
        <Route path='/check/:id' element={<Check/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
        <Route path='/livestatus' element={<Status/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/refunds' element={<Refunds/>}/>
        <Route path='/*' element={<Navigate to={'/'}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
