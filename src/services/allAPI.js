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
export const searchApi = async(reqHeader)=>{
   return  await commonAPI('GET',`${baseurl}/station/train/`,"",reqHeader)
 }

 //update train details
export const edittrainApi = async(trainId,reqBody,reqHeader)=>{
   return  await commonAPI('PUT',`${baseurl}/station/train/${trainId}/`,reqBody,reqHeader)
}

//trainlist
export const listtrainApi = async(reqHeader)=>{
   return  await commonAPI('GET',`${baseurl}/customer/train/`,"",reqHeader)
 } 

 // get user details
 export const getuserApi = async(reqHeader)=>{
   return  await commonAPI('GET',`${baseurl}/customer/profile/`,"",reqHeader)
 }

//get seat
export const displayseatsApi = async(reqHeader)=>{
   return  await commonAPI('GET',`${baseurl}/station/traincapacity/`,"",reqHeader)
 }

 // search train
 export const searchTrainApi = async(reqBody)=>{
   return await commonAPI(`POST`,`${baseurl}/customer/search_train/`,reqBody,"")
}

//check availability
export const checkavailabilityApi = async(id,reqBody,reqHeader)=>{
   return await commonAPI(`POST`,`${baseurl}/customer/train/${id}/check_availability/`,reqBody,reqHeader)
}
// add feedback api
export const submitFeedbackApi = async (id,reqBody,reqHeader)=>{
   return await commonAPI(`POST`,`${baseurl}/customer/train/${id}/add_feedback/`,reqBody,reqHeader)
}

//get single train API for customer
export const getSingleTrainApi = async (id,reqHeader)=>{
   return await commonAPI(`GET`,`${baseurl}/customer/train/${id}/`,"",reqHeader)
}

//train status

export const getlivestatusApi = async (reqBody)=>{
   return await commonAPI(`POST`,`${baseurl}/customer/train_status/`,reqBody)
}
//add payment api

export const addPaymentAPI = async (id,reqHeader)=>{
   return await commonAPI(`POST`,`${baseurl}/customer/bookinghistory/${id}/add_payment/`,"",reqHeader)
}

// book ticket
export const bookTicketAPI = async (id,reqBody,reqHeader)=>{
   return await commonAPI(`POST`,`${baseurl}/customer/train/${id}/book_ticket/`,reqBody,reqHeader)
}