import React, { useState } from 'react';

const AddBookForm = () => {
  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');
  const [type, setType] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [availableQuantity, setAvailableQuantity] = useState(0);
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create FormData object to send as a multi-part form data
    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('bookname', bookName);
    formData.append('totalbookquantity', quantity);
    formData.append('author', author);
    formData.append('type', type);
    formData.append('availablebookquantity', availableQuantity);

    // Perform fetch or axios request to send formData to the server
    fetch('http://localhost:8080/api/saveBooks', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => console.log('Book saved:', data))
      .catch(error => console.error('Error saving book:', error));
  };

  return (
    <div className='container-fluid border-success'>
      <div className='container-fluid d-flex align-items-center justify-content-center border-primary'>
        <form onSubmit={handleSubmit} className='form-control'>
          <h4>Enter Book Details</h4>
          <div className='form-group'>
            <label htmlFor="name">Book Name: </label>
            <input
              type="text"
              placeholder='Enter Book Name'
              required
              id='name'
              className='form-control'
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor="author">Author: </label>
            <input
              type="text"
              placeholder='Enter Author'
              required
              id='author'
              className='form-control'
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor="type">Type: </label>
            <select
              id='type'
              className='form-control'
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">Select Type</option>
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
              <option value="Science Fiction">Science Fiction</option>
              {/* Add other types as needed */}
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor="qt">Quantity: </label>
            <input
              type="number"
              placeholder='Enter Quantity'
              required
              id='qt'
              className='form-control'
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor="available">Available Quantity: </label>
            <input
              type="number"
              placeholder='Enter Available Quantity'
              required
              id='available'
              className='form-control'
              value={availableQuantity}
              onChange={(e) => setAvailableQuantity(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor="image">Select Image: </label>
            <input
              type="file"
              id="image"
              accept=".jpg, .jpeg, .png"
              className='form-control-file'
              onChange={(e) => setImageFile(e.target.files[0])}
            />
          </div>
          <div className='d-flex justify-content-center my-2'>
            <button type="submit" className='btn btn-outline-success'>Save Book</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBookForm;
