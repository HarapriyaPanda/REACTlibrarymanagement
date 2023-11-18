import React from 'react'
import AHeader from './AHeader'
import Alayout from './Alayout'
import ATopheader from './ATopheader'
import Details from '../Details/Details'
const ATeacher = () => {
  return (
    <div>
       <Alayout>
        <ATopheader name="ashish mohanty"/>
        <AHeader role="Librarian"/>
        <Details role="teacher"/>
      </Alayout>
    </div>
  )
}

export default ATeacher
