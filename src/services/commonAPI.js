
import axios from "axios";

export const commonAPI = async(httpMethods,url,reqBody,reqHeader)=>{
    const reqConfig = {
        method:httpMethods,
        url: url,
        data:reqBody,
        headers:reqHeader?reqHeader:{"Content-Type":"application/json"} //there are two types of content to upload
    }
    return await axios(reqConfig).then((res)=>{
        return res
    }).catch((err)=>{
        return err
    })
}

export const fakeAPI = async(httpMethods,url,reqHeader)=>{
    const reqConfig = {
        method:httpMethods,
        url: url,
        headers:reqHeader?reqHeader:{"Content-Type":"application/json"}
    }
    return await axios(reqConfig).then((res)=>{
        return res
    }).catch((err)=>{
        return err
    })
}