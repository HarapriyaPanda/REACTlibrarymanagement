import React from 'react'


const Alayout = (props) => {
  return (
    <div>
          <div style={{ height: '100vh' }} className='overflow-hidden'>
            <div className='d-none d-lg-block justify-content-center'>
            {props.children[0]}
            </div>
            <div className='row '>
                <div className=' col-lg-2  border justify-content-center container bg-dark'>
                {props.children[1]}
                    
                </div>
                <div className=' col-lg-10 overflow-auto container mt-2' style={{ height: '92vh' }}>
                    {props.children[2]}
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default Alayout
