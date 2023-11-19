import React from 'react'

const AddBookform = () => {
  return (
    <div className='container-fluid border-success'>
      <div className='container-fluid d-flex align-items-center justify-content-center border-primary'>
        
            <form action="" className='form-control'>
            <h4>Enter Book Details</h4>
            <div className='form-group'>
                <label htmlFor="name">Enter BookName: </label>
                <input type="text" placeholder='BookName' required id='name' className='form-control' />
            </div>
            <div className='form-group'>
                <label htmlFor="author">Enter Author: </label>
                <input type="text" placeholder='Author' required id='author' className='form-control' />
            </div>
            <div className='form-group'>
                <label htmlFor="type">Enter Type: </label>
                <input type="text" placeholder='Type' required id='type' className='form-control' />
            </div>
            <div className='form-group'>
                <label htmlFor="qt">Enter Quantity: </label>
                <input type="number" placeholder='Quantity' required id='qt' className='form-control' />
            </div>
            <div className='form-group'>
                <label htmlFor="available">Available: </label>
                <input type="number" placeholder='Type' required id='available' className='form-control' />
            </div>
            <div className='d-flex justify-content-center my-2'><input type="submit" className='btn btn-outline-success' /></div>
            </form>
        </div>
      </div>
  )
}

export default AddBookform
