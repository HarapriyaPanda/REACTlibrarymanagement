import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Addadminform = (props) => {
  const [admindetailsform, setAdmindetailsform] = useState({
    display: 'block'
  });
  const [admincredentialsform, setAdmincredentialsform] = useState({
    display: 'none'
  });

  const submitadmin = () => {
    // Handle form submission
  };

  const hideadmindetailsform = () => {
    setAdmindetailsform({
      display: 'none'
    });
    setAdmincredentialsform({
      display: 'block'
    });
  };

  const showadmindetailsform = () => {
    setAdmindetailsform({
      display: 'block'
    });
    setAdmincredentialsform({
      display: 'none'
    });
  };

  const [usernamevalue, setUsernamevalue] = useState('');
  const [passwordvalue, setPasswordvalue] = useState('');
  const [confirmpasswordvalue, setConformpasswordvalue] = useState('');

  const [usernamecharacter, setUsernamecharacter] = useState('d-block text-primary');
  const [passwordmatch, setPasswordmatch] = useState('d-none');

  const username = (event) => {
    setUsernamevalue(event.target.value);
    if (event.target.value.length !== 10) {
      setUsernamecharacter('text-danger');
    } else {
      setUsernamecharacter('text-primary');
    }
  };

  const password = (event) => {
    setPasswordvalue(event.target.value);
  };

  const confirmpassword = (event) => {
    setConformpasswordvalue(event.target.value);
    if (event.target.value === passwordvalue) {
      setPasswordmatch('d-none');
    } else {
      setPasswordmatch('d-block text-danger');
    }
  };

  return (
    <div>
      <div className='container-fluid'>
        <div className='container border border-outline-primary p-4 mt-4 col-lg-8'>
          <form action='' className='form-group justify-content-center ' onSubmit={submitadmin}>
            <div style={admindetailsform}>
              <h4 className='text-center'>Enter Details</h4>
              <label htmlFor="name">Enter Name: </label>
              <input type="text" placeholder='Name' required id='name' className='form-control' />
              <label htmlFor="email">Enter Email: </label>
              <input type="email" placeholder='Email' required id='email' className='form-control' />
              <label htmlFor="phone">Enter Phone no.: </label>
              <input type="number" placeholder='Phone No.' required id='phone' className='form-control' />
              <label htmlFor="role">Enter Role: </label>
              <input type="text" placeholder='Role' id='role' className='form-control' value={props.role} disabled />
              <label htmlFor="address">Enter Address: </label>
              <input type="text" placeholder='Address' required id='address' className='form-control' />
              <label htmlFor="pin">Enter PIN Code: </label>
              <input type="number" placeholder='PIN Code' required id='pin' className='form-control' />
              <input type="reset" className='btn btn-outline-danger btn-sm' />
              <input type="button" value="Next" className='btn btn-outline-success btn-sm m-2' onClick={hideadmindetailsform} />
              {props.role==='student'?(<div><Link to="/">Already have an account</Link></div>):(<div></div>)}
            </div>
            <div style={admincredentialsform}>
              <h4 align="center">Set Credentials</h4>
              <label htmlFor="username">Enter Username:</label>
              <input type="text" placeholder='Username' id='username' className='form-control' onChange={username} value={usernamevalue} />
              <div className={usernamecharacter}><small>Username should be 10 characters</small></div>
              <label htmlFor="password">Enter Password:</label>
              <input type="text" placeholder='Password' id='password' className='form-control' onChange={password} value={passwordvalue} />
              <label htmlFor="confirmpassword">Confirm Password:</label>
              <input type="text" placeholder='Confirm Password' id='confirmpassword' className='form-control' onChange={confirmpassword} value={confirmpasswordvalue} />
              <div><small className={passwordmatch}>Password Doesn't match</small></div>
              <input type="button" value="Go Back" className='btn btn-outline-warning btn-sm' onClick={showadmindetailsform} />
              <input type="submit" className='btn btn-outline-success btn-sm m-2' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addadminform;
