import { baseurl } from "./baseurl"
import { commonAPI } from "./commonAPI"


//user registration
export const registrationapi = async(reqBody,reqHeader)=>{
   return await commonAPI(`POST`,`${baseurl}/customer/signup/`,reqBody,reqHeader)
}

//login
export const loginaApi = async(reqBody)=>{
   return await commonAPI(`POST`,`${baseurl}/customer/token/`,reqBody,"")
}

//station registration
export const stationregistrationApi = async(reqBody)=>{
   return await commonAPI(`POST`,`${baseurl}/station/register/`,reqBody,"")
} 

//station login
export const stationloginaApi = async(reqBody)=>{
   return await commonAPI(`POST`,`${baseurl}/station/token/`,reqBody,"")
}

//train registration
export const trainregistrationApi = async(reqBody,reqHeader)=>{
   return await commonAPI(`POST`,`${baseurl}/station/train/`,reqBody,reqHeader)
} 

//display train details
export const displaytrainsApi = async(reqHeader)=>{
   return  await commonAPI('GET',`${baseurl}/customer/train/`,"",reqHeader)
 }

 //booknow
 export const booknowApi = async(reqHeader)=>{
   return  await commonAPI('GET',`${baseurl}/customer/train/`,"",reqHeader)
 }

 //check
 export const checkApi = async(reqHeader)=>{
   return  await commonAPI('GET',`${baseurl}/customer/train/`,"",reqHeader)
 }

 //booked

 export const bookedApi = async(reqHeader)=>{
   return  await commonAPI('GET',`${baseurl}/customer/train/`,"",reqHeader)
 }
 //display train details
export const bookingsApi = async(reqHeader)=>{
   return  await commonAPI('GET',`${baseurl}/customer/bookinghistory/`,"",reqHeader)
 }

//search train details
/* export const searchApi = async(reqHeader)=>{
   return  await commonAPI('GET',`${baseurl}/station/train/${id}/`,"",reqHeader)
 } */

 //update train details
export const edittrainApi = async(trainId,reqBody,reqHeader)=>{
   return  await commonAPI('PUT',`${baseurl}/station/train/${trainId}/`,reqBody,reqHeader)
}