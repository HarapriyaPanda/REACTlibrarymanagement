import React from 'react'
import {  Space, Typography } from "antd";
import { useUser } from '../UserContext';
import { useNavigate } from 'react-router';
const SHeader = () => {
    const navigate=useNavigate();
    const{logout}=useUser();
    const logouts=()=>{
        logout();
        navigate("/");
    }
  return (
    <div className="AppHeader container-fluid p-3">
        <Typography.Title>Hi! USER</Typography.Title>
        <Space>
            <button className='btn btn-danger' onClick={logouts}>Logout</button>
        </Space>
        </div>
  )
}

export default SHeader
