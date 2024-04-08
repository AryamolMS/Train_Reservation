import React, { useContext, useState } from 'react';
import './Authentication.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { getuserApi, loginaApi, registrationapi } from '../../services/allAPI';
import Swal from 'sweetalert2';
import { isAuthtokenContext } from '../../context/ContextShare';

function Authentication({ login }) {
  const loginForm = login ? true : false;
  const navigate = useNavigate();
  const { isAuthtoken, setIsAuthtoken } = useContext(isAuthtokenContext)
  const [data, setdata] = useState({
    name: "",
    age: "",
    email_address: "",
    biodata: "",
    username: "",
    password: ""
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Basic validation checks
    if (!data.username.trim()) {
      newErrors.username = "Username is required";
      valid = false;
    }
    if (!data.password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    }

    // Additional validation for registration form
    if (!loginForm) {
      if (!data.name.trim()) {
        newErrors.name = "Name is required";
        valid = false;
      }
      if (!data.age) {
        newErrors.age = "Age is required";
        valid = false;
      }
      if (!data.email_address.trim()) {
        newErrors.email_address = "Email is required";
        valid = false;
      }
      if (!data.biodata) {
        newErrors.biodata = "Biodata is required";
        valid = false;
      }
    }

    setErrors(newErrors);
    return valid;
  };

  //function to register
  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const reqBody = new FormData();
    reqBody.append("name", data.name);
    reqBody.append("age", data.age);
    reqBody.append("email_address", data.email_address);
    reqBody.append("biodata", data.biodata);
    reqBody.append("username", data.username);
    reqBody.append("password", data.password);

    const reqHeader = { "Content-Type": "multipart/form-data" };

    try {
      const result = await registrationapi(reqBody, reqHeader);
      console.log(result);

      if (result.status === 200) {
        console.log(result.data);
        setIsAuthtoken(true);
        Swal.fire({
          title: "Registered successfully!",
          icon: "success"
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
      } else if (result.status === 400 && result.response.data.error === "Username already exists") {
        Swal.fire({
          title: "Username already exists!",
          icon: "error"
        });
      } else {
        console.log(result.response.data);
        Swal.fire({
          title: "Registration failed!",
          icon: "warning"
        });
      }
    } catch (error) {
      console.error("Registration error:", error);
      Swal.fire({
        title: "Registration failed!",
        icon: "error"
      });
    }
  };

  //function to login
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const result = await loginaApi(data);
      console.log(result);

      if (result.status === 200) {
        Swal.fire({
          title: "Login Successful!",
          icon: "success"
        });
        sessionStorage.setItem("token", result.data.token);

        setdata({
          username: "",
          password: ""
        });
        navigate('/userhome');
      } else {
        Swal.fire({
          title: "Invalid username or password!",
          icon: "warning"
        });
        console.log(result.response.data);
      }
    } catch (error) {
      console.error("Login error:", error);
      Swal.fire({
        title: "Login failed!",
        icon: "error"
      });
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
                    {errors.name && <div className="text-danger">{errors.name}</div>}
                  </div>}

                {loginForm ? null
                  : <div className='mb-4 d-flex'>
                    <input value={data.age} onChange={(e) => setdata({ ...data, age: e.target.value })} type="number" name="" id="" placeholder='Enter Age' className='form-control w-50' />
                    {errors.age && <div className="text-danger">{errors.age}</div>}
                    <input onChange={(e) => setdata({ ...data, biodata: e.target.files[0] })} type="file" name="" id="" className='ms-3' />
                    {errors.biodata && <div className="text-danger">{errors.biodata}</div>}
                  </div>}

                {loginForm ? null
                  :
                  <div className='mb-5 me-4'>
                    <input value={data.email_address} onChange={(e) => setdata({ ...data, email_address: e.target.value })} type="email" placeholder='Enter email' className='form-control w-75' />
                    {errors.email_address && <div className="text-danger">{errors.email_address}</div>}
                  </div>}
                <div className='mb-3 me-4'>

                  <div className='mb-5 mt-5 me-4'>
                    <input value={data.username} onChange={(e) => setdata({ ...data, username: e.target.value })} type="text" placeholder='Enter username' className='form-control w-75' />
                    {errors.username && <div className="text-danger">{errors.username}</div>}
                  </div>
                </div>

                <div>
                  <input value={data.password} onChange={(e) => setdata({ ...data, password: e.target.value })} type="password" placeholder='Enter password' className='form-control w-75' />
                  {errors.password && <div className="text-danger">{errors.password}</div>}
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
      <ToastContainer theme='colored' position='top-center' autoClose={2000} />
    </>
  )
}

export default Authentication;
