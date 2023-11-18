import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const AHeader = (props) => {
  const navigate=useNavigate();
  return (
    
      <nav className="navbar navbar-expand-lg navbar-dark container-fluid " >
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-column" id="navbarTogglerDemo03">
          <div className="navbar-brand " align="center">Admin Panel</div>
          
          <ul className="navbar-nav flex-column align-item-center" >
          <li className="nav-item">
           {(props.role)!=='Books'?<button className='btn btn-outline-info btn-sm' onClick={()=>{
                  navigate("/Addadmin",{state:{role:props.role}})
                }}>Add {props.role}</button>:<button className='btn btn-outline-info btn-sm' onClick={()=>{
                  navigate("/AddBook")
                }}>Add {props.role}</button>}
                {/* <button className='btn btn-outline-info btn-sm' onClick={()=>{
                  navigate("/Addadmin",{state:{role:props.role}})
                }}>Add {props.role}</button> */}
            </li>
            <hr />
            <li className="nav-item active">
              <NavLink className="nav-link" to="/Admin">
                Admin
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ATeacher">
                Librarian
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/AStudent">
                Student
              </NavLink>
            </li>
      
            <li className="nav-item">
              <NavLink className="nav-link" to="/ABook">
                Book
              </NavLink>
            </li>
           
          </ul>
        </div>
      </nav>
    
  );
};

export default AHeader;
