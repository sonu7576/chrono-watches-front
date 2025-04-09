import React, { useState } from 'react'
import './add.css'
import { Form, FormGroup } from 'react-bootstrap'
import { newWatch } from '../../services/allApi'
import { useNavigate } from 'react-router-dom'




function Addwatch() {


       const navigate = useNavigate()

    const [WatchInfo, setWatchInfo] = useState
        ({
            watchname: "",
            price: "",
            about: "",
            img: "",
            category: "",
            warranty: ""

        })

    const getAndsetWatchInfo = (e) => {
        const { name, value } = e.target
        setWatchInfo({ ...WatchInfo, [name]: value })
    }


    // console.log(WatchInfo);

    //   btn


    const handleSubmit = async (e) => {

        e.preventDefault()

        const { watchname, price, about, img, category, warranty } = WatchInfo

        if (!watchname || !price || !about || !img || !category || !warranty) {

            alert('please fill the form')

        }

        else {
            try {
                const data = {
                    watchname, price, about, img, category, warranty
                };

                // API call
                const response = await newWatch(data);

                console.log(response);

                if (response.status === 200) {
                    setWatchInfo({
                        watchname: "",
                        price: "",
                        about: "",
                        img: "",
                        category: "",
                        warranty: ""
                    });
                     navigate('/admin/allview');
                } else {
                    alert('Failed to register');
                }
            } catch (error) {


                alert('Registration failed');
            }

        }
    }






    return (
        <div className="container contact-form">

            <Form>
                <h3>Add A Chronograph Watch</h3>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" name="watchname" className="form-control" placeholder="Watch name" value={WatchInfo.watchname} onChange={e => getAndsetWatchInfo(e)} />
                        </div>
                        <div class="form-group">
                            <input type="text" name="price" className="form-control" placeholder="Price" value={WatchInfo.price} onChange={e => getAndsetWatchInfo(e)} />
                        </div>

                        <div class="form-group">
                            <input type="text" name="img" className="form-control" placeholder="imageurl *" value={WatchInfo.img} onChange={e => getAndsetWatchInfo(e)} />
                        </div>

                        <FormGroup className='d-flex justify-content-around m-4' >
                            <Form.Check
                                name="category"
                                type="radio"
                                id="radio1"
                                value="MENS"
                                onChange={e => getAndsetWatchInfo(e)}
                                label="MENS"
                            />
                            <Form.Check
                                name='category'
                                type="radio"
                                id="radio2"
                                value="WOMENS"
                                onChange={e => getAndsetWatchInfo(e)}
                                label="WOMENS"
                            />

                        </FormGroup>

                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <textarea name="about" class="form-control" placeholder="About Watch *" value={WatchInfo.about} onChange={e => getAndsetWatchInfo(e)} style={{ width: "100%", height: "150px" }}>

                            </textarea>

                        </div>

                        <div>
                            <select className="form-select mb-3" name='warranty' value={WatchInfo.warranty} onChange={e => getAndsetWatchInfo(e)} aria-label="Default select example">
                                <option selected>WARRANTY</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                    </div>

                    <div className="form-group">
                        <input type="submit" onClick={e => handleSubmit(e)} name="btnSubmit" class="btnContact" value="Add To Store" />
                    </div>



                </div>

            </Form >

        </div>

    )
}

export default Addwatch