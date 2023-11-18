import React from 'react'
import AHeader from './AHeader'
import ATopheader from './ATopheader'
import Details from '../Details/Details'

const Admin = () => {
    return (
        <div style={{ height: '100vh' }} className='overflow-hidden'>
            <div className='d-none d-lg-block justify-content-center'>
                <ATopheader name="ashish mohanty"/>
            </div>
            <div className='row '>
                <div className=' col-lg-2  border justify-content-center container bg-dark'>
                    <AHeader role="Admin"/>   
                </div>
                <div className=' col-lg-10 overflow-auto container-fluid mt-2' style={{ height: '92vh' }}>
                    <Details role="admin"/>
                </div>

            </div>
        </div>
    )
}

export default Admin
