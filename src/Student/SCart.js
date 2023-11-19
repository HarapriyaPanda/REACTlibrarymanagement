import React from 'react'
import SLayout from './SLayout'
import SHeader from './SHeader'
import SSidebar from './SSidebar'
import SCartdetails from './SCartdetails'

const SCart = () => {
  return (
    <div>
      <SLayout>
        <SHeader/>
        <SSidebar/>
        <SCartdetails/>
      </SLayout>
    </div>
  )
}

export default SCart
