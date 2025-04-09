import React from 'react';
import './home.css';


function Navsecond() {
  return (

    <>

      <nav class="navbar navbar-expand-lg sticky-top  " data-bs-theme="dark" style={{ backgroundColor: 'black', }}>

        <div className='text-lg-center m-lg-auto' >
          {/* <div>
    <a id="head" class="navbar-brand fs-1 fw-bolder" href="#">Osse stox</a>
  </div> */}


          <div class="container-fluid">

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>




            <div class="collapse navbar-collapse justify-content-center " id="navbarNav">
              <ul class="navbar-nav ">
                <li class="nav-item">
                  <a class="nav-link active  " href='/' aria-current="page" >HOME</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link active "  aria-current="page" >MENS WATCHES</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link active " href='#about' aria-current="page" >ABOUT AS</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link active " aria-current="page" >WARRANTY</a>
                </li>

                



              </ul>
            </div>




          </div>

        </div>




      </nav>

    </>

  );
}

export default Navsecond;
