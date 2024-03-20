import React, { useState } from 'react'
import { stationloginaApi } from '../../services/allAPI';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function StationLogin({register}) {

    const registerForm = register?true:false
    const navigate = useNavigate()
    const [stationdata,setstationdata] = useState({
        name:"",
        station_code:"",
        Location:"",
        phone_number:"",
        username:"",
        password:""
    })
    console.log(stationdata);

    const stationLogin = async(e)=>{
        e.preventDefault()

        const {username,password} = stationdata

        if(!username || !password){
            Swal.fire({
                title: "Fill the details completely!",
                icon: "warning"
              });
        }
        else{
            const result = await stationloginaApi(stationdata)
            console.log(result);

            if(result.status === 200){
                Swal.fire({
                    title: "Login Successfull!",
                    icon: "success"
                  });
                  sessionStorage.setItem("token",result.data.token)

                navigate('/adminhome')
            }
            else{
                console.log(result.response.data);
            }
        }
    }
  return (
    <>
     <div className="d-flex">
        <div className='mt-5 ms-5'>
        <h1 className='text-center text-success mt-3'  style={{marginLeft:'400px'}}>Login</h1>
            <form className='Card shadow' style={{width:'500px',height:'auto',marginLeft:'400px'}}>
           <div className='pt-5'>
               
                    <div className='mt-3'>
                        <input type="text" placeholder='username' className='form-control w-75 ms-5' value={stationdata.username} onChange={(e)=>setstationdata({...stationdata,username:e.target.value})}/>
                    </div>
                    <div className='mt-3'>
                        <input type="password" placeholder='password' className='form-control w-75 ms-5'  value={stationdata.password} onChange={(e)=>setstationdata({...stationdata,password:e.target.value})}/>
                    </div>
                   { registerForm? <div className='mt-5 ms-5'>
                        <button className='btn btn-warning ms-3 w-75 mb-5' style={{fontSize:'20px',fontWeight:'bold'}} onClick={stationLogin}>Register</button>
                    </div>:<div className='mt-5 ms-5'>
                        <button className='btn btn-warning ms-3 w-75' style={{fontSize:'20px',fontWeight:'bold'}} onClick={stationLogin}>Login</button>
                    </div>}
                    <div>
                        <p className='text-center mt-5 pb-5'>New Station ? register here <Link to={'/station'}>Register</Link></p>
                    </div>
           </div>
            </form>
        </div>
    </div> 
    </>
  )
}

export default StationLogin
