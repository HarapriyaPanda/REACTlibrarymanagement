import React, { useState } from 'react'
import AView from '../Admin/AView'
const Rolemap = (props) => {
  const [viewdetailform,setViewdetailform]=useState({
    display:'none'
  })
  const viewdetails = () => {
    setViewdetailform({
      display:'block'
    })
  }
  const hideviewdetails = () => {
    setViewdetailform({
      display:'none'
    })
  }
  return (
    <div>
      <div className='col-12 row container-fluid my-2'>
        {console.log(props.address)}
        <div className='col-1'>{props.sl}</div>
        <div className='col-2'>{props.name}</div>
        <div className='col-3'>{props.email}</div>
        <div className='col-2 '>{props.phone}</div>
        <div className='col-4 row justify-content-evenly'>
          <button className='btn btn-outline-primary btn-sm col-3' onClick={viewdetails}>View</button>
          <button className='btn btn-outline-warning btn-sm col-3'>Borrows</button>
        </div>
      </div>
      <div style={viewdetailform} className='border rounded border-primary'>
        <div className='d-flex justify-content-end'>
          <button className='btn btn-white' onClick={hideviewdetails}><i className="fa-solid fa-xmark" style={{ color: 'red' }}></i></button>
        </div>
        <AView id={props.id} name={props.name} username={props.username} password={props.password} role={props.role} email={props.email} phone={props.phone} address={props.address} pin={props.pin} />
      </div>

    </div>
  )
}

export default Rolemap
