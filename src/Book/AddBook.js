import React from 'react'
import AddBookform from './AddBookform'
import AHeader from '../Admin/AHeader'
import ATopheader from '../Admin/ATopheader'
import Alayout from '../Admin/Alayout'
const AddBook = () => {
  return (
    <div>
       <Alayout>
        <ATopheader/>
        <AHeader role="Book"/>
        <AddBookform/>
      </Alayout>
    </div>
  )
}

export default AddBook