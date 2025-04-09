import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { addTocart, getAwatch } from '../../../services/allApi'
import Header from '../Header'
import Navsecond from '../Navsecond'
import Footer from '../Footer'
import { UserContext } from './Contextshare'

function SingleWatch() {

    const { id } = useParams()

    const [watch, setWatch] = useState([])

    const { userData } = useContext(UserContext)



    useEffect(() => {


        getWatch()




    })

    // console.log(id)



    // add to cart
    const Tocart = async () => {

        try {
            const data = {

                userId: userData._id,
                watchname: watch.watchname,
                price: watch.price,
                about: watch.about,
                img: watch.img,
                category: watch.category,
                warranty: watch.warranty
            };

            const res = await addTocart(data)

            console.log(res);

            if (res.status === 200) {

                alert('added successfully')
                
            } else {

                alert('somthing wrong !!!!')
            }

        } catch (err) {

            alert('can not added product to cart  ')
        }

    }













    const getWatch = async () => {

        const res = await getAwatch(id);

        setWatch(res.data)



    }











    return (
        <>



            <Header />
            <Navsecond />
            <div className='container-fluid '>

                <div className='row d-flex justify-content-center m-5'>
                    <div className="col-md-6 mt-5 p-3">

                        <div className='text-center'>

                            <img className='w-50 h-75' src={watch.img} alt="---" />

                        </div>


                    </div>
                    <div className="col-md-6 mt-5 p-3">


                        <div className='text-center'>
                            <h5 className='mb-5'>brand</h5>

                            <h1 className='mb-5'>{watch.watchname}</h1>

                            <h3 className='mb-5  '>{watch.price}</h3>

                            <p className='mb-5 mt-5 pt-5 border-top'>
                                {watch.about}
                            </p>

                        </div>

                        <div className='d-flex justify-content-around'>
                            <button className='border rounded' style={{ background: "black", width: "100px", height: "50px", color: "white" }} >Buy</button>
                            <button className='border rounded' onClick={Tocart} style={{ background: "black", width: "100px", height: "50px", color: "white" }}>Cart</button>
                        </div>


                    </div>
                </div>





            </div>

            <Footer />


        </>
    )
}

export default SingleWatch