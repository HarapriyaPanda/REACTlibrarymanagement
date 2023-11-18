import React from 'react'
import Alayout from './Alayout'
import Details from '../Details/Details'
import ATopheader from './ATopheader'
import AHeader from './AHeader'


const AStudent = () => {
  return (
    <div>
      <Alayout>
        <ATopheader name="ashish mohanty"/>
        <AHeader role="Student"/>
        <Details role="student"/>
      </Alayout>
    </div>
  )
}

export default AStudent
