import React from 'react'
import SLayout from './SLayout'
import SHeader from './SHeader'
import SSidebar from './SSidebar'
import SBookdetails from './SBookdetails'

const Sbooks = () => {
  return (
    <div>
      <SLayout>
        <SHeader/>
        <SSidebar/>
        <SBookdetails/>
      </SLayout>
    </div>
  )
}

export default Sbooks
