/* import React, { useState } from 'react'
import './Authentication.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { loginaApi, registrationapi } from '../../services/allAPI';
import Swal from 'sweetalert2';

function Authentication({login}) {

  const loginForm = login?true:false
  const navigate = useNavigate()

  const [data,setdata] = useState({
    name:"",
    age:"",
    email_address:"",
    biodata:"",
    username:"",
    password:""
  })


  //function to register
  const handleRegister = async(e)=>{
    e.preventDefault()

    const {name,age,email_address,biodata,username,password} = data

    if(!name || !age || !email_address || !biodata || !username || !password){
      Swal.fire({
        position: "top-center",
        icon: "warning",
        title: "Please fill the form",
        showConfirmButton: false,
        timer: 1700
      }); 
    }
    else{

      const reqBody = new FormData()

      reqBody.append("name",name)
      reqBody.append("age",age)
      reqBody.append("email_address",email_address)
      reqBody.append("biodata",biodata)
      reqBody.append("username",username)
      reqBody.append("password",password)

      const reqHeader ={
        "Content-Type":"multipart/form-data"
      }

      const result = await registrationapi(reqBody,reqHeader)
      console.log(result);
      if(result.status === 200){
        console.log(result.data);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Registered Successfully",
          showConfirmButton: false,
          timer: 1700
        }); 
        setdata({
          name: "",
          age: "",
          email_address: "",
          biodata: "",
          username: "",
          password: ""
        })
        navigate('/login')
      }
      else{
        console.log(result.response.data);
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Something went wrong",
          showConfirmButton: false,
          timer: 2000
        }); 
      }
    }
  }
  console.log(data);

  //function to login
  const handleLogin = async(e)=>{
    e.preventDefault()

    const {username,password} = data

    if(!username || !password){
      Swal.fire({
        position: "top-center",
        icon: "warning",
        title: "Please fill the form",
        showConfirmButton: false,
        timer: 1700
      }); 
    }
    else{    
      const result = await loginaApi(data)
      console.log(result);

      if(result.status === 200){
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Login Successfully",
            showConfirmButton: false,
            timer: 1500
          }); 

          sessionStorage.setItem("token",result.data.token)
          setdata({
            username:"",
            password:""
          })
          navigate('/userhome')
        }
    else{
      console.log(result.response.data)
    }
  }
  return (
    <>
     <Container>
      <Row>
      </Row>  
      <Col md={2}>
      </Col>
      <Col md={8}>
        <div className='Card shadow card mt-5 '>
          <Row>
            <Col md={6}>
              <img src="https://activetuitions.com/images/bg/login.png" alt="no image" className='loginimg' />
            </Col>
            <Col md={6}>
           { loginForm? <h1 className='mt-3 mb-5' style={{color:'royalblue'}}>Login</h1>
              :
              <h1 className='mt-3 text-center' style={{color:'royalblue',marginRight:'350px'}}>Register</h1>}
              {loginForm?
              null
                :
                <div className='mb-5 mt-5 me-4'>
                <input value={data.name} onChange={(e)=>setdata({...data,name:e.target.value})} type="text" placeholder='Enter name' className='form-control w-75'/>
              </div>}
            
              {loginForm?null
              :<div className='mb-4 d-flex'>
                <input value={data.age} onChange={(e)=>setdata({...data,age:e.target.value})} type="number" name="" id="" placeholder='Enter Age' className='form-control w-50'/>
              <input onChange={(e)=>setdata({...data,biodata:e.target.files[0]})}  type="file" name="" id=""  className='ms-3'/>
              </div>}
             
              { loginForm?null
              :
              <div className='mb-5 me-4'>
                <input value={data.email_address} onChange={(e)=>setdata({...data,email_address:e.target.value})} type="email" placeholder='Enter email' className='form-control w-75'/>
              </div>}
              <div className='mb-3 me-4'>
             
                <div className='mb-5 mt-5 me-4'>
                <input value={data.username} onChange={(e)=>setdata({...data,username:e.target.value})} type="text" placeholder='Enter username' className='form-control w-75'/>
              </div>
              </div>
           
                <div>
                  <input value={data.password} onChange={(e)=>setdata({...data,password:e.target.value})} type="password" placeholder='Enter password' className='form-control w-75'/>
             
                </div>
            
             { loginForm?
              <div className='mt-5 fw-5'>
              <Link to={'/userhome'} style={{textDecoration:'none'}}><button className='btn btn-success form-control w-75 mb-2' onClick={handleLogin}>Login</button></Link>
            </div>:
              <div className='mt-5 fw-5'>
                <button className='btn btn-success form-control w-50 mb-2' onClick={handleRegister}>Register</button>
              </div>}
              { loginForm?
                <div>
              <p>Don't have an account? <Link to={'/register'} style={{textDecoration:'none',color:'royalblue',fontSize:'20px'}}>Sign Up</Link></p>
              </div>:
              <div>
              <p>Already have an account? <Link to={'/login'} style={{textDecoration:'none',color:'royalblue',fontSize:'20px'}}>Sign In</Link></p>
              </div>}
            </Col>
          </Row>
        </div>
      </Col>
      <Col md={2}>
      </Col>
    </Container> 
    <ToastContainer theme='colored' position='top-center' autoClose={2000}/>
    </>
  )
}

export default Authentication
 */

import React, { useState } from 'react';
import './Authentication.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { getuserApi, loginaApi, registrationapi } from '../../services/allAPI';
import Swal from 'sweetalert2';

function Authentication({ login }) {
  const loginForm = login ? true : false;
  const navigate = useNavigate();

  const [data, setdata] = useState({
    name: "",
    age: "",
    email_address: "",
    biodata: "",
    username: "",
    password: ""
  });

  //function to register
  const handleRegister = async (e) => {
    e.preventDefault();

    const { name, age, email_address, biodata, username, password } = data;

    if (!name || !age || !email_address || !biodata || !username || !password) {
      Swal.fire({
        position: "top-center",
        icon: "warning",
        title: "Please fill the form",
        showConfirmButton: false,
        timer: 1700
      });
    } else {
      const reqBody = new FormData();

      reqBody.append("name", name);
      reqBody.append("age", age);
      reqBody.append("email_address", email_address);
      reqBody.append("biodata", biodata);
      reqBody.append("username", username);
      reqBody.append("password", password);

      const reqHeader = {
        "Content-Type": "multipart/form-data"
      };

      const result = await registrationapi(reqBody, reqHeader);
      console.log(result);
      if (result.status === 200) {
        console.log(result.data);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Registered Successfully",
          showConfirmButton: false,
          timer: 1700
        });
        setdata({
          name: "",
          age: "",
          email_address: "",
          biodata: "",
          username: "",
          password: ""
        });
        navigate('/login');
      } else {
        console.log(result.response.data);
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Something went wrong",
          showConfirmButton: false,
          timer: 2000
        });
      }
    }
  };

  //function to login
  const handleLogin = async (e) => {
    e.preventDefault();

    const { username, password } = data;

    if (!username || !password) {
      Swal.fire({
        title: "Please fill the form!",
        icon: "warning"
      });
    } else {
      const result = await loginaApi(data);
      console.log(result);

      if (result.status === 200) {
        Swal.fire({
          title: "Login Successfull!",
          icon: "success"
        });
        sessionStorage.setItem("token", result.data.token);

        setdata({
          username: "",
          password: ""
        });
        navigate('/userhome');
      } else {
        console.log(result.response.data);
      }
    }
  };

  return (
    <>
      <Container>
        <Row>
        </Row>
        <Col md={2}>
        </Col>
        <Col md={8}>
          <div className='Card shadow card mt-5 '>
            <Row>
              <Col md={6}>
                <img src="https://activetuitions.com/images/bg/login.png" alt="no image" className='loginimg' />
              </Col>
              <Col md={6}>
                {loginForm ? <h1 className='mt-3 mb-5' style={{ color: 'royalblue' }}>Login</h1>
                  :
                  <h1 className='mt-3 text-center' style={{ color: 'royalblue', marginRight: '350px' }}>Register</h1>}
                {loginForm ?
                  null
                  :
                  <div className='mb-5 mt-5 me-4'>
                    <input value={data.name} onChange={(e) => setdata({ ...data, name: e.target.value })} type="text" placeholder='Enter name' className='form-control w-75' />
                  </div>}

                {loginForm ? null
                  : <div className='mb-4 d-flex'>
                    <input value={data.age} onChange={(e) => setdata({ ...data, age: e.target.value })} type="number" name="" id="" placeholder='Enter Age' className='form-control w-50' />
                    <input onChange={(e) => setdata({ ...data, biodata: e.target.files[0] })} type="file" name="" id="" className='ms-3' />
                  </div>}

                {loginForm ? null
                  :
                  <div className='mb-5 me-4'>
                    <input value={data.email_address} onChange={(e) => setdata({ ...data, email_address: e.target.value })} type="email" placeholder='Enter email' className='form-control w-75' />
                  </div>}
                <div className='mb-3 me-4'>

                  <div className='mb-5 mt-5 me-4'>
                    <input value={data.username} onChange={(e) => setdata({ ...data, username: e.target.value })} type="text" placeholder='Enter username' className='form-control w-75' />
                  </div>
                </div>

                <div>
                  <input value={data.password} onChange={(e) => setdata({ ...data, password: e.target.value })} type="password" placeholder='Enter password' className='form-control w-75' />
                </div>

                {loginForm ?
                  <div className='mt-5 fw-5'>
                    <Link to={'/userhome'} style={{ textDecoration: 'none' }}><button className='btn btn-success form-control w-75 mb-2' onClick={handleLogin}>Login</button></Link>
                  </div> :
                  <div className='mt-5 fw-5'>
                    <button className='btn btn-success form-control w-50 mb-2' onClick={handleRegister}>Register</button>
                  </div>}
                {loginForm ?
                  <div>
                    <p>Don't have an account? <Link to={'/register'} style={{ textDecoration: 'none', color: 'royalblue', fontSize: '20px' }}>Sign Up</Link></p>
                  </div> :
                  <div>
                    <p>Already have an account? <Link to={'/login'} style={{ textDecoration: 'none', color: 'royalblue', fontSize: '20px' }}>Sign In</Link></p>
                  </div>}
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={2}>
        </Col>
      </Container>
      <ToastContainer theme='colored' position='top-center' autoClose={2000}/>
    </>
  )
}

export default Authentication