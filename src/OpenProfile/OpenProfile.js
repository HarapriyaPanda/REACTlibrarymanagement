import React from 'react'
import Alayout from '../Admin/Alayout'
import AHeader from '../Admin/AHeader'
import ATopheader from '../Admin/ATopheader'
import Profile from './Profile'

const OpenProfile = () => {
  return (
    <div>
        <Alayout>
            <ATopheader/>
            <AHeader/>
            <Profile/>
        </Alayout>
    </div>
  )
}

export default OpenProfile
