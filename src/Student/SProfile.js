import React from 'react'
import SLayout from './SLayout'
import SHeader from './SHeader'
import SSidebar from './SSidebar'
import Profile from '../OpenProfile/Profile'

const SProfile = () => {
  return (
    <div>
      <SLayout>
        <SHeader/>
        <SSidebar/>
        <Profile/>
      </SLayout>
    </div>
  )
}

export default SProfile
