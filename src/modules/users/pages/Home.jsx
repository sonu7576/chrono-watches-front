import '../home.css'
import React, { useContext, useEffect, useState } from 'react'
import Header from '../Header';
import Footer from '../Footer';
import Navsecond from '../Navsecond';
import { UserContext } from './Contextshare';
import { Link } from 'react-router-dom';


function Home() {


  
  

  const { userData }=useContext(UserContext)

  

  





  return (
    <>
      <Header />

      <Navsecond />


      <div>
       
        <div
          style={{
            backgroundImage: "url('https://arthurcharleswatches.com/cdn/shop/files/Chrongraph_web_banner_trial.png?v=1706915713&width=1400')",
            height: '400px',
            backgroundAttachment: 'fixed',
            backgroundSize:'cover'
          }}
        >
      <div className='text-end'>
        <h1 id='head' className='head d-lg-flex me-5 fw-bold p-5 justify-content-end'>
          CHRONOGRAPH WATCHES
        </h1>
       
      </div>
    </div>

   
  
        <div className='m-5 p-5 border-bottom'>
          <center>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus optio aliquam corrupti, eligendi amet reprehenderit ab aliquid aspernatur omnis assumenda debitis veniam sed at accusantium animi cumque sapiente officia exercitationem.
            </p>
          </center>
        </div>
  
        <div className='row m-5 pb-5 d-flex justify-content-center'>
          {[
            {
              img: 'https://arthurcharleswatches.com/cdn/shop/products/brownandgoldfrontangleCompressed.jpg?v=1666725886&width=500',
              name: 'GOLD CHRONO PRESTIGE WATCH',
              price: '₹ 5999 /-',
            },
            {
              img: 'https://arthurcharleswatches.com/cdn/shop/products/Silverblackfacefrontcompressed.jpg?v=1666725943&width=500',
              name: 'SILVER CHRONO MASTER II WATCH',
              price: '₹ 4099 /-',
            },
            {
              img: 'https://arthurcharleswatches.com/cdn/shop/products/Silverwhitefacefrontanglecompressed.jpg?v=1666725913&width=500',
              name: 'SILVER CHRONO MASTER I WATCH',
              price: '₹ 4099 /-',
            },
            {
              img: 'https://assets.tissotwatches.com/transform/Extend/1ef9b8d4-d9af-4a09-9b89-c1a4a62da84e/T137-427-11-091-00_Shadow?io=transform:fit,width:800,height:800,gravity:center',
              name: 'TISSOT PRX AUTOMATIC WATCH',
              price: '₹ 5999 /-',
            },
            
          ].map((product, index) => (
            <div key={index} className='productcard col-lg-3 m-3 shadow-lg'>
              <div className='h-100 w-100'>
                <div className='shadow-none'>
                  <img src={product.img} alt={product.name} />
                </div>
                <center>
                  <ul className='mt-5'>
                    <li className='fs-6 text-uppercase fw-light lh-lg'>{product.name}</li>
                    <li>{product.price}</li>
                    <li className='fs-6 text-uppercase fw-light lh-lg'>fghj</li>
                  </ul>
                </center>
              </div>
            </div>
          ))}
          <Link to={"/users/viewallwatches"} className='text-center mt-5'><i className="fa-solid fa-shop fa-2xl text-dark "></i></Link>
        </div>
  
  
  
        <div>
          <img width={'100%'} src='https://i.postimg.cc/021qmWNv/wp6942.jpg' alt='' />
        </div>
  
        <div className='row d-flex justify-content-center m-5'>
          {[
            {
              icon: 'fa-solid fa-rotate-left',
              title: 'HASSLE FREE RETURNS',
              description:
                'We believe in making the return process seamless for our valued customers, ensuring that your satisfaction is our priority.',
            },
            {
              icon: 'fa-regular fa-gem',
              title: 'GUARANTEE ON ALL WATCHES',
              description:
                'We offer a guarantee on all purchases made, ensuring reliability of your watch for years to come.',
            },
            {
              icon: 'fa-regular fa-star',
              title: 'RATED EXCELLENT',
              description:
                'Dont just hear it from us, we are proud to be rated excellent on Trustpilot.',
            },
          ].map((feature, index) => (
            <div key={index} className='col-md-4 mt-5'>
              <center>
                <i className={`${feature.icon} fs-2 mb-4`} style={{ color: 'grey' }}></i>
                <h5>{feature.title}</h5>
                <p className='lh-lg'>{feature.description}</p>
              </center>
            </div>
          ))}
        </div>
  
        <div id='about' className='row bg-dark text-light p-5' style={{ height: '500px' }}>
          <div className='col-md-3'></div>
          <div className='col-md-6'>
            <center className='pt-5 mt-5'>
              <h4>RATED EXCELLENT ON TRUSTPILOT</h4>
              <p className='mt-5 lh-lg'>
                Fantastic watch. Excellent customer service throughout the process. I ordered the moonphase in silver, was a little hesitant at first due to the affordable price range. I have been pleasantly surprised and the watch currently serves as my everyday wear, I will certainly be ordering again.
              </p>
            </center>
          </div>
          <div className='col-md-3'></div>
        </div>
  
        <div id='connect' className='mt-5'>
          <h2 className='text-center' style={{ color: 'grey' }}>AS SEEN ON INSTAGRAM</h2>
          <div className='row mt-5 d-flex justify-content-center'>
            {[
              {
                img: 'https://arthurcharleswatches.com/cdn/shop/files/Gold_chrono_1600_x_1600_px.png?v=1706916374&width=800',
                height: '500px',
              },
              {
                img: 'https://arthurcharleswatches.com/cdn/shop/files/Silver_Chrono_prestige_1600_x_1600_px_1.png?v=1706916690&width=800',
                height: '500px',
              },
              {
                img: 'https://arthurcharleswatches.com/cdn/shop/files/56EE3E9A-04F0-4841-9DF4-469F90A8B610.png?v=1614317900&width=1000',
                height: '450px',
                col: 'col-lg-6',
              },
              {
                img: 'https://arthurcharleswatches.com/cdn/shop/files/Silver_Chrono_Master_1600_x_1600_px.png?v=1707173780&width=500',
                height: '450px',
                col: 'col-lg-4',
              },
            ].map((instagramPost, index) => (
              <div key={index} className={`${instagramPost.col ? instagramPost.col : 'col-lg-5'} p-1`} style={{ height: instagramPost.height }}>
                <img style={{ height: '100%', width: '100%' }} src={instagramPost.img} alt='...' />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home