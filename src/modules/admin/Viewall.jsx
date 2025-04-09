import React, { useEffect, useState } from 'react';
import Header from '../users/Header';
import Footer from '../users/Footer';
import { allwatches, deleteWatch } from '../../services/allApi';
import { Link } from 'react-router-dom';

function Viewall() {

    const [Search , setSearch]=useState("")
  
    const [watches, setWatches] = useState([]);
  
    useEffect(() => {
      getAllwatches();
    }, [Search]);
  
    const getAllwatches = async () => {
      try {
        const res = await allwatches(Search);
        console.log( res);
  
        setWatches(res.data)
  
        
      } catch (error) {
        console.error(error);
      }
    };

    const remove = async (id)=>{

        console.log(id);
         const res= await deleteWatch(id);

         if (res.status===200) {

            getAllwatches()
            
         } else {

            alert('bad request')
            
         }
       

    }


  
    return (
      <>
        <Header />
        
  
        <div className='row m-5 pb-5 d-flex justify-content-center'>
          {watches.length > 0 ? (
            watches.map((watch, index) => (
              <div key={index} className='productcard col-lg-3 overflow-hidden m-3 shadow-lg'>
                <div className='h-100 w-100'>
                  <div className='shadow-none'>
                    <img className='overflow-hidden' style={{width:"100%",height:"275px", textAlign:"center"}} src={watch.img} alt={watch.name} />
                  </div>
                  <center>
                    <ul className='mt-4'>
                      <li className='fs-6 text-uppercase fw-light lh-lg'>{watch.watchname.slice(0,15)}...</li>
                      <li>{watch.price}</li>
                    </ul>
                  </center>
                  <div className='d-flex justify-content-between'>

                  <Link to={`/admin/edit/${watch._id}`}><i className="fa-regular fa-pen-to-square fa-2xl text-dark" ></i></Link>
``
                  <Link onClick={()=>remove(watch._id)}><i class="fa-solid fa-eraser fa-2xl text-danger"></i></Link>

                  </div>
                </div>
              </div>
              
            ))
          ) : (
            <p>No watches available.</p>
          )}

          <Link to={'/admin/add'} className='text-center p-5 m-5'><i className="fa-regular fa-add fa-2xl text-dark" ></i></Link>
        </div>
  
        <Footer />
      </>
    );
}

export default Viewall