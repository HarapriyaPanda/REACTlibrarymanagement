import React from 'react';

const Bookcard = (props) => {
  const imageSrc = `data:image/png;base64,${props.book.bookimage}`;

  return (
    <>
    {/* <div className="card" style={{ width: '18rem', height: '25rem', backgroundColor: '#f8f9fa', margin: '10px', overflow: 'hidden' }}>
      <div className="card-header" style={{ backgroundColor: '#007bff', color: '#fff' }}>
        <h5 className="card-title">{props.book.bookname}</h5>
        <span>By: {props.book.author}</span>
      </div>
      <img src={imageSrc} className="img-thumbnail" alt={props.book.bookname} style={{ width: '100%', height: '40%', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title">Book ID: {props.book.bookid}</h5>
        <p className="card-text"></p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item" style={{ backgroundColor: '#f8d7da', color: '#721c24' }}>Type: {" " + props.book.type}</li>
        <li className="list-group-item" style={{ backgroundColor: (props.book.availablebookquantity > 0) ? '#d4edda' : '#f8d7da', color: '#155724' }}>
          Status: {(props.book.availablebookquantity > 0) ? "Available" : "Unavailable"}
        </li>
      </ul>
      {(props.role) === "student" ? <div className="card-body"><button className='btn btn-outline-warning'>Request</button></div> : ""}
    </div> */}




<div className='book-item flex flex-column flex-sb border rounded border-primary p-3 bg-dark text-white'>
<div className='book-item-img d-flex justify-content-center'>
  <img src = {imageSrc} alt = "cover" className="img-thumbnail" style={{height:'16rem',width:'12rem',objectFit: 'cover'}}/>
</div>
<div className='book-item-info text-center'>
 
    <div className='book-item-info-item title fw-7 fs-18'>
      <span>{props.book.bookname}</span>
    </div>


  <div className='book-item-info-item author fs-15'>
    <span className='text-capitalize fw-7'>Author: </span>
    <span>{props.book.author}</span>
  </div>

  <div className='book-item-info-item edition-count fs-15'>
    <span className='text-capitalize fw-7'>BOOK ID: </span>
    <span>{props.book.bookid}</span>
  </div>

  <div className='book-item-info-item publish-year fs-15'>
    <span className='text-capitalize fw-7'>Type: </span>
    <span>{" " + props.book.type}</span>
  </div>
  <div>
  <li className="list-group-item rounded" style={{ backgroundColor: (props.book.availablebookquantity > 0) ? '#d4edda' : '#f8d7da', color: '#155724' }}>
          Status: {(props.book.availablebookquantity > 0) ? "Available" : "Unavailable"}
        </li>
  </div>
</div>
</div>
</>
  );
}

export default Bookcard;
