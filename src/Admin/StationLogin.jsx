import React, { useState } from 'react'
import AdminHeader from '../common/Headers/AdminHeader'
import { stationloginaApi } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';

function StationLogin() {

    const navigate = useNavigate()
    const [stationdata,setstationdata] = useState({
        username:"",
        password:""
    })
    console.log(stationdata);

    const stationLogin = async(e)=>{
        e.preventDefault()

        const {username,password} = stationdata

        if(!username || !password){
            alert("Please fill this form")
        }
        else{
            const result = await stationloginaApi(stationdata)
            console.log(result);

            if(result.status === 200){
                alert("Login successfull")
                navigate('/addtrain')
                sessionStorage.setItem("token",result.data.token)
            }
            else{
                console.log(result.response.data);
            }
        }
    }
  return (
    <>
     <div className="d-flex">
        <div>
            <AdminHeader/>
        </div>
        <div className='mt-5 ms-5'>
            <form className='Card shadow' style={{width:'500px',height:'500px',marginLeft:'200px'}}>
                <h1 className='text-center text-success mt-3'>Login</h1>
                <div className='mt-3'>
                    <input type="text" placeholder='username' className='form-control w-75 ms-5' value={stationdata.username} onChange={(e)=>setstationdata({...stationdata,username:e.target.value})}/>
                </div>
                <div className='mt-5'>
                    <input type="password" placeholder='password' className='form-control w-75 ms-5'  value={stationdata.password} onChange={(e)=>setstationdata({...stationdata,password:e.target.value})}/>
                </div>
                <div className='mt-5 ms-5'>
                    <button className='btn btn-warning ms-3 w-75' style={{fontSize:'20px',fontWeight:'bold'}} onClick={stationLogin}>Login</button>
                </div>
            </form>
        </div>
    </div> 
    </>
  )
}

export default StationLogin
