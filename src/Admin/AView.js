import React, { useState } from 'react';

const AView = (props) => {

    //variable
    const [submitbtn, setSubmitbtn] = useState({
        display: 'none'
    });
    const [updatebtn, setUpdatebtn] = useState({
        display: 'block'
    });
    const [isreadonly, setIsreadonly] = useState(true);

    const deleteid = () => {
        alert(props.id + ' deleted');
    };
    //value

    //email value
    const [emailvalue,setEmailvalue]=useState(props.email);
    const changeEmail = (event) => {
        setEmailvalue(event.target.value);
    };    
    //phone value
    const [phonevalue,setPhonevalue]=useState(props.phone);
    const changePhone = (event) => {
        setEmailvalue(event.target.value);
    };   
    //address value
    const [addressvalue,setAddressvalue]=useState(props.address);
    const changeAddress = (event) => {
        setAddressvalue(event.target.value);
    };
    //pin value
    const [pinvalue,setPinvalue]=useState(props.pin);
    const changePin = (event) => {
        setAddressvalue(event.target.value);
    };
    //functions
    const showsubmit = () => {
        setSubmitbtn({
            display: 'block'
        });
        setUpdatebtn({
            display: 'none'
        });
        setIsreadonly(false);
    };

    const showupdate = () => {
        setIsreadonly(true);
        setSubmitbtn({
            display: 'none'
        });
        setUpdatebtn({
            display: 'block'
        });
    };

    const updatedetails = (e) => {
        e.preventDefault(); 
        
    };

    return (
        <div className='container'>
            <form action='' className='form-group justify-content-center' onSubmit={updatedetails}>
                <div className='container pb-2'>
                    <button className='btn btn-white' onClick={showupdate} style={submitbtn}>
                        <i className="fa-solid fa-arrow-left" style={{ color: 'red' }}></i>
                    </button>
                    <h4 className='text-center'>View Details</h4>
                    <label htmlFor="username">Username: </label>
                    <input type="text" placeholder='Name' required id='username' className='form-control' value={props.username} readOnly />
                    <label htmlFor="name">Enter Name: </label>
                    <input type="text" placeholder='Name' required id='name' className='form-control' value={props.name} readOnly/>
                    <label htmlFor="email">Enter Email: </label>
                    <input type="email" placeholder="Email" required id="email" className="form-control" value={emailvalue} onChange={changeEmail} readOnly={isreadonly}/>
                    <label htmlFor="phone">Enter Phone no.: </label>
                    <input type="number" placeholder='Phone No.' required id='phone' className='form-control' value={phonevalue} onChange={changePhone} readOnly={isreadonly}/>
                    <label htmlFor="role">Enter Role: </label>
                    <input type="text" placeholder='Role' id='role' className='form-control' value={props.role} disabled />
                    <label htmlFor="address">Enter Address: </label>
                    <input type="text" placeholder='Address' required id='address' className='form-control' value={addressvalue} onChange={changeAddress} readOnly={isreadonly}/>
                    <label htmlFor="pin">Enter PIN Code: </label>
                    <input type="number" placeholder='PIN CODE' required id='pin' className='form-control' value={pinvalue} onChange={changePin} readOnly={isreadonly}/>
                    <div className='d-flex justify-content-center mt-2'>
                        <input type="submit" className='btn btn-outline-success' style={submitbtn} />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button type="button" className='btn btn-outline-danger me-3' style={updatebtn} onClick={deleteid}>
                            Delete
                        </button>
                        <button type="button" className='btn btn-outline-warning' style={updatebtn} onClick={showsubmit}>
                            Update
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AView;
