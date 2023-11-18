import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='container-fluid'>
      <div className='container'>
           <form action='' className='form-group justify-content-center border border-primary p-3 m-3' >
              <h4 align="center">Enter Credentials</h4>
              <label htmlFor="name">Enter Username: </label>
              <input type="text" placeholder='Username' required id='name' className='form-control' />
              <label htmlFor="email">Enter Password: </label>
              <input type="email" placeholder='Password' required id='email' className='form-control' />
              <input type="reset" className='btn btn-outline-danger btn-sm' />
              <input type="submit" className='btn btn-outline-success btn-sm m-2'/><br />
              <Link to="/Signup">Don't have an account</Link>
          </form>
          </div>
    </div>
  )
}

export default Login
