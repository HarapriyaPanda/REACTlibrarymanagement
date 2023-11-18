import React from 'react'
import Alayout from './Alayout'
import Addadminform from './Addadminform'
import ATopheader from './ATopheader'
import AHeader from './AHeader'
import { useLocation } from 'react-router-dom'

const Addadmin = (props) => {
  const location =useLocation();
  return (
    <div>
      <Alayout>
        <ATopheader/>
        <AHeader role="student"/>
        <Addadminform role={location.state.role}/>
      </Alayout>
    </div>
  )
}

export default Addadmin
