import React, { useContext, useEffect } from 'react'
import './UserHeader.css'
import { Link, useNavigate } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { isAuthtokenContext } from '../../context/ContextShare';
import { editProfileApi, getuserApi } from '../../services/allAPI';
import Swal from 'sweetalert2';


function UserHeader({login}) {

  const {isAuthtken,setIsAuthtoken} = useContext(isAuthtokenContext)
  const navigate =useNavigate()

  const logeout = ()=>{
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("userDetails")
    setIsAuthtoken(false)
    navigate('/')
   
  }

  const [show, setShow] = useState(false);
  const handleClose = () => {setShow(false)};
  const handleShow = () => setShow(true);

  const [useredit,setUseredit] = useState([])
  const [photo, setPhoto] =useState(null);


   const [userProfile,setUserprofile] = useState({
    name: "",
    age: "",
    email_address: "",
    biodata: null,
    username: "",
    // password: "",
  });

  const [isUpdate,setIsUpdate] =useState(false)


  const HandleImageChange =(e)=>{
    const file = e.target.files[0];
    setPhoto(file);
    setUserprofile((p)=>({
      ...p,
      biodata:file,
    }))
    
  

  }

  const [existingUser,setExistinguser] = useState("")
  const[existingimage,setExistingimage]=useState("")
  const [preview,setPreview] = useState("") //to display //storing url

   const getuserdetails = async()=>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        'Content-Type':'application/json',
        'Authorization':`Token ${token}`
      }
   
    const result = await getuserApi(reqHeader)
    console.log(result);
    
    sessionStorage.setItem("userDetails", JSON.stringify(result.data));
    setUseredit(result.data)
    
  }
} 

console.log(existingimage)

console.log(useredit)

  
  const loginForm = login?true:false

  useEffect(()=>{
 
    getuserdetails()
  },[])
 
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("userDetails"));
    if (user) {
      setUserprofile({
        ...userProfile,
        name: user.name || "",
        age: user.age || "",
        email_address: user.email_address || "",
        username: user.username || "",
        password: user.password || "",
        biodata: ""
      });
      setExistinguser(user.biodata || "");
    }
  }, []);
  console.log(userProfile);







  
 useEffect(()=>{
  if(userProfile.biodata){
    setPreview(URL.createObjectURL(userProfile.biodata))

 }
 else{
  setPreview("")
 }
 },[userProfile.biodata])

 const handleProfileUpdate = async()=>{

const {username ,age ,biodata ,email_address}= userProfile
 
 if(!username ||!age ||!biodata ||!email_address) {
  Swal.fire({
    position: "top-center",
    icon: "warning",
    title: "Please fill the form completely",
    showConfirmButton: false,
    timer: 1700
  });
 }
else{
     const reqBody = new FormData()
     reqBody.append("name",username)
     reqBody.append("age",age)
     reqBody.append("email_address",email_address)
     reqBody.append("biodata",biodata)

     preview?reqBody.append("biodata",biodata):reqBody.append("biodata",existingUser)//preview is there profile otherwise existing image


const token = sessionStorage.getItem("token")
if(preview){
   const reqHeader={
    "Content-Type":"multipart/form-data",
    "Authorization":`Token ${token}`
   }

   const result = await editProfileApi(reqBody,reqHeader)
   console.log(result);
   if(result.status===200){
    

    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Profile updated successfully",
      showConfirmButton: false,
      timer: 1700
    });
    sessionStorage.setItem("existingUser",JSON.stringify(result.data))
    setIsUpdate(true)
   }
else{
  console.log(result.response.data);
}
}
 
 else{
  const reqHeader ={
    "Content-Type":"application/json",
    "Authorization":`Bearer ${token}`
  }

  
//   const result = await editProfileApi(reqBody,reqHeader)
//   console.log(result);
//   if(result.status===200){
//     Swal.fire({
//       position: "top-center",
//       icon: "success",
//       title: "Profile updated successfully",
//       showConfirmButton: false,
//       timer: 1700
//     });
//     sessionStorage.setItem("existingUser",JSON.stringify(result.data))
//    setIsUpdate(true)
//   }
// else{
//  console.log(result.response.data);
// }
 }
 
 }
}
console.log(userProfile);

useEffect(()=>{
  const profile=(JSON.parse(sessionStorage.getItem('existingUser')))

},[isUpdate])
  return (
    <>
     <div className='userheader d-flex  text-light'>
       <div className='ms-auto me-3 p-2 d-flex m-2'>
       <Link to={'/feedback'} style={{textDecoration:'none',color:'white'}}><p className='me-4'>Feedback</p></Link>
        <p className='me-4' onClick={handleShow}>Profile</p>
        <Link to={'/userbookings'} style={{textDecoration:'none',color:'white'}}><p className='me-4'>My Bookings</p></Link>
        <Link to={'/livestatus'} style={{textDecoration:'none',color:'white'}}><p className='me-4'>Train status</p></Link>

                
        <p onClick={logeout}>LogOut</p>
        </div>
    </div> 

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
              <input value={userProfile.name} onChange={(e)=>setUserprofile({...userProfile,name:e.target.value})} style={{borderRadius:'10px',border:'1px solid black'}} type="text" placeholder='Enter name' className='form-control mt-4 w-75 ms-5' /> <br />
              <input value={userProfile.age} onChange={(e)=>setUserprofile({...userProfile,age:e.target.value})} style={{borderRadius:'10px',border:'1px solid black'}} type="age" placeholder='Enter age' className='form-control mt-4 w-75 ms-5'/> <br />
             <div className='text-center'> 
             <img
  src={existingimage ? `http://127.0.0.1:8000/${existingimage}`: `http://127.0.0.1:8000/${existingUser}`}
  alt=''
  width={300}
/>
             </div>
              <input  onChange={(e)=>setUserprofile({...userProfile,biodata:e.target.files[0]})}
             
              

              style={{borderRadius:'10px',border:'1px solid black'}} type="file" placeholder='choose file' className='form-control mt-4 w-75 ms-5'/> <br />
              <input value={userProfile.email_address} onChange={(e)=>setUserprofile({...userProfile,email_address:e.target.value})}style={{borderRadius:'10px',border:'1px solid black'}} type="email" placeholder='Enter email' className='form-control w-75 ms-5'/> <br/>

              {/* <input
            value={userProfile.password}
            onChange={(e) => setUserprofile({ ...userProfile, password: e.target.value })}
            style={{ borderRadius: '10px', border: '1px solid black' }}
            type='password'
            placeholder='Enter password'
            className='form-control w-75 ms-5'
          />{' '}<br/> */}
              <button type='submit' onClick={handleProfileUpdate}className='btn btn-primary w-50' style={{marginLeft:'100px'}} >Update</button>
              
        </Modal.Body>
       
      </Modal>
    </>
  )
  }

export default UserHeader