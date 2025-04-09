import React, { useContext, useEffect, useState } from 'react';
import Header from '../Header';
import Navsecond from '../Navsecond';
import Footer from '../Footer';
import { UserContext } from './Contextshare';
import { allwatches } from '../../../services/allApi';
import { Link } from 'react-router-dom';

function Watches() {
  const { userData } = useContext(UserContext);

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

  return (
    <>
      <Header />
      <Navsecond />
      <input type="text" onChange={e => setSearch(e.target.value)} placeholder='Search' className='form-control m-auto mt-5 ' style={{ width: "400px" }} />

      <div className='row m-5 pb-5 d-flex justify-content-center'>
        {watches.length > 0 ? (
          watches.map((watch, index) => (
            <div key={index} className='productcard col-lg-3 m-3 shadow-lg'>
             <Link to={`/users/view/single/${watch._id}`} className=' text-dark text-decoration-none'>
                <div className='h-100 w-100'>
                  <div className='shadow-none'>
                    <img style={{height:"275px"}} src={watch.img} alt={watch.name} />
                  </div>
                  <center>
                    <ul className='mt-5'>
                      <li className='fs-6 text-uppercase fw-light lh-lg'>{watch.watchname.slice(0,15)}....</li>
                      <li>{watch.price}</li>
                    </ul>
                  </center>
                </div>
             </Link>
            </div>
          ))
        ) : (
          <p>No watches available.</p>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Watches;
