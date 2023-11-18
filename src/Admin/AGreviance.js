import React, { useState } from 'react'

const AGreviance = (props) => {
    const [message,setMessage]=useState();
    const changeMessage=(event)=>{
      setMessage(event.target.value);
    }
  return (
    <div>
      <div className='container-fluid'>
        <div className='container'>
            <form action="" className='border border-primary rounded m-2 pt-2 p-4'>
                <div className='d-flex justify-content-center row'>
                <div className='m-2 row'>
                    <b className='col-12'>Student name:</b>
                    <span className='col-12 bg-light form-control mx-2'>{props.name}</span>
                </div>
                <div className='m-2 row'>
                    <b className='col-12 '>Problem:</b>
                    <span className='col-12  bg-light form-control mx-2'>{props.problem}</span>
                </div>
                <div className='m-2'>
                    <b className='col-12 mb-1'>Message:</b>
                    <textarea name="" id="" cols="30" rows="5" className='col-12 border rounded border-warning' value={message} onChange={changeMessage} required></textarea>
                </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <input type="submit" className='btn btn-outline-success'/>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default AGreviance
