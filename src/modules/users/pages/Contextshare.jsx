import React, { createContext } from 'react'
import { useState ,useEffect } from 'react'

export const UserContext=createContext()

function Contextshare({children}) {

  

    const [userData,setUserData]=useState("null")


    

    useEffect(() => {
      // Check if user data exists in local storage
      
      const storedUser = localStorage.getItem('user');
      
          setUserData(JSON.parse(storedUser));

         
          
     
  }, []);

  return (
   
       <UserContext.Provider value={{userData}}>

        {children}

       </UserContext.Provider>

    
    
  )
}

export default Contextshare