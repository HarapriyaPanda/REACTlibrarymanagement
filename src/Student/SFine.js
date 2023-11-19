import React from 'react'
import SLayout from './SLayout'
import SHeader from './SHeader'
import SSidebar from './SSidebar'
import SFinedetails from './SFinedetails'

const SFine = () => {
  return (
    <div>
      <SLayout>
        <SHeader/>
        <SSidebar/>
        <SFinedetails/>
      </SLayout>
    </div>
  )
}

export default SFine
