import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

function Header() {

  const [isLogedin, setIsLoggedIn] = useState(false)

  const navigate = useNavigate();



  const [userData,setUserData]=useState("null")




  useEffect(() => {

    const storedUser = localStorage.getItem('user');
      if (storedUser) {
          setUserData(JSON.parse(storedUser));
          setIsLoggedIn(true);

      }
    
   
  }, []);

  const handleLogout = () => {
    // Remove user data from local storage

    navigate('/');
    localStorage.removeItem('user');
    window.location.reload();
    console.clear()
    
    setIsLoggedIn(false);

  };

  const btnnavigate = () => {
    navigate('/login')
  }


  return (
    <>

      <nav className='d-flex justify-content-around' data-bs-theme="dark" style={{ backgroundColor: 'black', }}>

        <div className='ms-lg-5'>
          {/* <img style={{height:"40px", width:"40px" , borderRadius:"20%"}} src="https://i.postimg.cc/PJ3z3qZ2/OS.png" alt="logo" /> */}
        </div>

        <div className='text-center ms-lg-3'>

          <a id="head" class="navbar-brand fs-1 fw-bolder  text-light" href="/">Osse stox</a>
        </div>

        {isLogedin ? (

          <div className=' mt-3 d-flex justify-content-between'>
            {/* <a className='text-decoration-none text-light' style={{ cursor: "pointer" }} onClick={handleLogout} >
              <i className="fa-solid fa-right-to-bracket fa-xl text-light"></i> Logout
            </a> */}

            <Dropdown  className='ms-lg-5'>
              <Dropdown.Toggle variant='black' style={{color:"black"}} id="dropdown-basic">
              <i className="fa-solid fa-user fa-xl text-light"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu className='mt-5 pt-3' style={{height:"300px",width:"200px"}}>
                <Dropdown.Item href="#/action-1">{userData.username}</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

           <Link to={'/users/view/cart'} className=' mt-2'> <i class="fa-solid fa-cart-shopping fa-xl text-light "></i></Link>

            
              
      


          </div>



        ) : (

          <div className=' mt-3'>
            <a className='text-decoration-none text-light ' style={{ cursor: "pointer" }} onClick={btnnavigate} >
              <i className="fa-solid fa-right-to-bracket fa-xl text-light"></i> Login
            </a>
          </div>


        )}

      </nav>








    </>
  )
}

export default Header