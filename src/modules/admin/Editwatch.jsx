import React, { useState, useEffect } from 'react';
import './add.css';
import { Form, FormGroup } from 'react-bootstrap';
import { allwatches, editWatch } from '../../services/allApi';
import { useNavigate, useParams } from 'react-router-dom';

function Editwatch() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [WatchInfo, setWatchInfo] = useState({
        watchname: "",
        price: "",
        about: "",
        img: "",
        category: "",
        warranty: ""
    });

    useEffect(() => {
        const getWatch = async () => {
            const { data } = await allwatches("");
            let existingData = data.find(watch => watch._id === id);
            setWatchInfo(existingData);
        };
        getWatch();
    }, [id]);

    const getAndsetWatchInfo = (e) => {
        const { name, value } = e.target;
        setWatchInfo({ ...WatchInfo, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { watchname, price, about, img, category, warranty } = WatchInfo;

        if (!watchname || !price || !about || !img || !category || !warranty) {
            alert('please fill the form');
        } else {
            try {

                // api call
                const data = { watchname, price, about, img, category, warranty };

                const response = await editWatch(id, data);

                if (response.status === 200) {
                    navigate('/admin/allview');
                } else {
                    alert('err');
                }
            } catch (error) {
                alert('cant process ');
            }
        }
    };

    return (
        <div className="container contact-form">
            <Form>
                <h3>Edit Watch Details</h3>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input
                                type="text"
                                name="watchname"
                                className="form-control"
                                placeholder="Watch name"
                                value={WatchInfo.watchname}
                                onChange={getAndsetWatchInfo}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="price"
                                className="form-control"
                                placeholder="Price"
                                value={WatchInfo.price}
                                onChange={getAndsetWatchInfo}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="img"
                                className="form-control"
                                placeholder="imageurl *"
                                value={WatchInfo.img}
                                onChange={getAndsetWatchInfo}
                            />
                        </div>
                        <FormGroup className='d-flex justify-content-around m-4'>
                            <Form.Check
                                name="category"
                                type="radio"
                                id="radio1"
                                value="MENS"
                                onChange={getAndsetWatchInfo}
                                checked={WatchInfo.category === "MENS"}
                                label="MENS"
                            />
                            <Form.Check
                                name='category'
                                type="radio"
                                id="radio2"
                                value="WOMENS"
                                onChange={getAndsetWatchInfo}
                                checked={WatchInfo.category === "WOMENS"}
                                label="WOMENS"
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <textarea
                                name="about"
                                className="form-control"
                                placeholder="About Watch *"
                                value={WatchInfo.about}
                                onChange={getAndsetWatchInfo}
                                style={{ width: "100%", height: "150px" }}
                            />
                        </div>
                        <div>
                            <select
                                className="form-select mb-3"
                                name='warranty'
                                value={WatchInfo.warranty}
                                onChange={getAndsetWatchInfo}
                            >
                                <option value="" disabled>WARRANTY</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <input
                            type="submit"
                            onClick={handleSubmit}
                            name="btnSubmit"
                            className="btnContact"
                            value="Submit to Edit"
                        />
                    </div>
                </div>
            </Form>
        </div>
    );
}

export default Editwatch;
