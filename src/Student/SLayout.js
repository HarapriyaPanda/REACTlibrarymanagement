import React from 'react'
import SHeader from './SHeader'
import SSidebar from './SSidebar'
import SDashboard from './SDashboard'

const SLayout = (props) => {
  return (
    <div className='container-fluid librarian'>
      <div className='container-fluid row banner'>{props.children[0]}</div>
      <div className='row'>
        <div className='col-3 banner'>{props.children[1]}</div>
        <div className='col-9 '>
            <div className='m-3 p-3'>
            {props.children[2]}
            </div>
        
        </div>
      </div>
    </div>
  )
}

export default SLayout
