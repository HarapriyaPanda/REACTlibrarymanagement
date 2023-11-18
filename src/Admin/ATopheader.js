import React from 'react'

const ATopheader = (props) => {
  return (
    <div>
      <div className='container-fluid text-white bg-dark row justify-content-evenly p-2'>
        <div className='navbar-brand col-10'>Hi! Admin</div>
        <div className='col-2 row d-flex justify-content-center py-1'>
          <div className='rounded-circle col-4 d-flex justify-content-end '>
            {/* <div style={{height:'5vh',width:'5vh'}} className='bg-info text-dark rounded-circle p-1'>{props.name.split(' ').map(part => part[0]).join('').toUpperCase()}</div> */}
          </div>
          <div className='col-8 d-flex justify-content-start'>
            {/* {props.name.split(' ')[0].toUpperCase()} */}
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default ATopheader
