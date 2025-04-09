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

export const allwatches=async(search)=>{
    return await commonApi("GET",`${BaseUrl}/get/all?search=${search}`,"")
 }

//  get a watch

export const getAwatch=async(id)=>{

    return await commonApi("GET",`${BaseUrl}/get/single/${id}`)

}


// add watch 

export const newWatch = async(body,header)=>{
    return await commonApi("POST",`${BaseUrl}/watch/add`,body,header)
}


// edit

export const editWatch =async(id,body,header)=>{
    return await commonApi("PUT",`${BaseUrl}/edit/${id}`,body,header)
}


// delete

export const deleteWatch =async(id)=>{
    return await commonApi("DELETE",`${BaseUrl}/remove/watch/${id}`)
}


// add to cart


export const addTocart =async(body,header)=>{
    return await commonApi("POST",`${BaseUrl}/add/tocart`,body,header)
}


// view cart 

export const viewCart = async()=>{
    return await commonApi("GET",`${BaseUrl}/view/cart`)
}


// remove cart

export const removecart= async(id)=>{
    return await commonApi("DELETE",`${BaseUrl}/remove/cart/${id}`)
}