import { BaseUrl } from "./baseurl";
import { commonApi } from "./commonApi";


export const register=async(body,header)=>{
    return await commonApi("POST",`${BaseUrl}/user/register`,body,header)
 }


//  log in api

export const login= async(body, header)=>{
    return await commonApi("POST",`${BaseUrl}/user/login`,body,header)
}

// getall

export const allwatches=async()=>{
    return await commonApi("GET",`${BaseUrl}/watch/all`,"")
 }

//  get a watch

export const getAwatch=async(id)=>{

    return await commonApi("GET",`${BaseUrl}/watch/single/${id}`)

}


// add watch 

export const newWatch = async(body,header)=>{
    return await commonApi("POST",`${BaseUrl}/watch/add`,body,header)
}


// edit

export const editWatch =async(id,body,header)=>{
    return await commonApi("PUT",`${BaseUrl}/watch/edit/${id}`,body,header)
}


// delete

export const deleteWatch =async(id)=>{
    return await commonApi("DELETE",`${BaseUrl}/watch/delete/${id}`)
}


// add to cart


export const addTocart =async(body,header)=>{
    return await commonApi("POST",`${BaseUrl}/cart/add`,body,header)
}


// view cart 

export const viewCart = async()=>{
    return await commonApi("GET",`${BaseUrl}/cart/all`)
}


// remove cart

export const removecart= async(id)=>{
    return await commonApi("DELETE",`${BaseUrl}/cart/remove/${id}`)
}