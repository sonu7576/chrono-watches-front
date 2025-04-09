import React, { useContext, useEffect, useState } from 'react'
import Header from '../Header'
import Navsecond from '../Navsecond'
import Footer from '../Footer'
import { removecart, viewCart } from '../../../services/allApi'
import { UserContext } from './Contextshare'
import { Link } from 'react-router-dom'

function Cart() {

    const [cartItem, setCartItem] = useState([])

    const { userData } = useContext(UserContext)

    const [ count , setCount ]= useState(1)

    const [total , settotal]= useState()

    useEffect(() => {


        if (userData) {

            viewToCart()
            totalprice()

        }


    }, [userData])


    const increment = () => {
        setCount(count + 1);


        totalprice()

        
        
      };

      const decrement =()=>{
        

            if (count > 1) {

               setCount(count-1)
                
            } 

            totalprice()

       
      }

      
       

      const totalprice =()=>{

        

        console.log();

        


      }



    const viewToCart = async () => {
        try {
            const res = await viewCart("")
            const data = res.data
            const price =res.data.price
            settotal(price)

            if (res.status === 200) {
                const userCartItems = data.filter(item => item.userId === userData._id)
                setCartItem(userCartItems)
            } else {
                console.log(res.error)
            }
        } catch (err) {
            console.log(err)
        }
    }

    console.log(cartItem);



    // remove from cart

   const remove = async (id)=>{

    const res = await removecart(id)


    if (res.status===200) {

        viewToCart()

        
        
    } else {



        
        
    }



   }

   console.log(total);

   

    return (
        <>
            <Header />
            <Navsecond />

            <div>
            <div className='row border-bottom d-flex justify-content-between' style={{ margin: "5%" }}>

<div className="col-6 ">

    <h3>product</h3>


</div>
<div className="col-3 ">

    <h3>Quantity</h3>


    
</div>
<div className="col-2">

<h3>total</h3>
    
</div>



</div>
                {cartItem.length > 0 ? (
                    cartItem.map(cart => (
                        <div className='row border-bottom d-flex justify-content-between' style={{ margin: "10%" }}>

                            <div className="col-6 ">

                                <div className='d-flex '>
                                    <img className='w-50 h-100 pb-4' src={cart.img} alt="" />
                                    <div>

                                        <h4 className='mt-5' >{cart.watchname}</h4>
                                        <h5 >{cart.price}</h5>


                                    </div>
                                </div>


                            </div>
                            <div className="col-3 ">

                                <h4 style={{ marginTop: "35%" }}>Quantity</h4>

                                <div className='d-flex justify-content-center'>
                                <a><Link  className='text-decoration-none text-black me-5'   onClick={increment}><h1>+</h1></Link></a>

                                    <div className='me-5'><h4>{count}</h4></div>


                                    <a><Link  className='text-decoration-none text-black'   onClick={decrement}><h1>-</h1></Link></a>
                                </div>

                            </div>
                            <div className="col-2">

                                <h5 style={{ margin: "50%" }}>total</h5>

                                <div><button className='w-100 border rounded text-light bg-black p-3 ' onClick={()=>remove(cart._id)}>Remove</button></div>

                            </div>



                        </div>
                    ))
                ) : (
                    <h1 style={{margin:"17%"}} className='fw-light text-dark text-center'>CART IS EMPTY</h1>
                )}
            </div>



            <Footer />
        </>
    )
}

export default Cart
