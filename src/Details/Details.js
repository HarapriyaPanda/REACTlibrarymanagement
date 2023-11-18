import React, { useEffect, useState } from 'react'
import Rolemap from '../Map/Rolemap';
import details from '../Data';

const Details = (props) => {

// let api="";    
// const fetchapi=async(url)=>{
//     try{
//         const res=await fetch(url);
//         const detail=await res.json();
//     }catch(error){
//         console.log(error);
//     }
// }
// useEffect(()=>{
//     fetchapi(api);
// },[]);

const [rolemapdetails,setRolemapdetails]=useState('d-block');
const [searchdetails,setSearchdetails]=useState('d-none');

   //Filter using role based 
const roledetails=details.filter(detail=>detail.role===props.role);
// input value of searchbar
const [searchvalue,setSearchvalue]=useState("");
//output value of searchbar
const [searchedvalue,setSearchedvalue]=useState([]);
//button for searchbar
const Searchbtn=()=>{
    const lowercaseSearchValue = searchvalue.toLowerCase(); 
    setSearchedvalue(
      roledetails.filter((detail) =>
        (detail.id === parseInt(searchvalue)) || 
        (detail.username.toLowerCase()=== lowercaseSearchValue||
        detail.name.toLowerCase().includes(lowercaseSearchValue) ||
        detail.email.toLowerCase()===lowercaseSearchValue)
      )
    );    setSearchvalue("");
    setSearchdetails('d-block');
    setRolemapdetails('d-none');
}


//searchbar value retriving
const Searchbar=(event)=>{
    setSearchvalue(event.target.value);
}
const closesearchdetailform=()=>{
    setSearchdetails('d-none');
    setRolemapdetails('d-block');
}

    return (
        <div>
            <div className='container-fluid  justify-content-center'>
                <div className='row justify-content-center'>
                    <input type="search" placeholder='Search' className='col-lg-4 col-md-4 col-sm-5 col-5 border border rounded-4 me-2' value={searchvalue} onChange={Searchbar}/>
                    <input type="submit" className='col-lg-1 col-sm-2 col-md-1 col-2 btn btn-outline-success border rounded-4 border-success' onClick={Searchbtn} />
                </div>
                <hr />
                <div className='col-12 row container-fluid'>

                    <div className='col-1'>Sl No.</div>
                    <div className='col-2'>Name</div>
                    <div className='col-3'>Email</div>
                    <div className='col-2 '>Phone No.</div>
                    <div className='col-4 d-flex justify-content-center'>Updates</div>


                </div>
                <hr />
                <div>
                <div className={rolemapdetails}>
                <div className='overflow-auto'>
                    {roledetails.map((detail,index)=><div key={detail.id}><Rolemap id={detail.id} sl={index + 1} username={detail.username}  name={detail.name} email={detail.email} role={detail.role} phone={detail.phone} address={detail.address} pin={detail.pin} /><hr />{console.log(props.address)}</div>)}
                </div>
                </div>
                <div className={searchdetails}>
                <div className='overflow-auto border rounded border-dark bg-light' style={{height:'65vh'}}>
                <div className=' d-flex  justify-content-end'>
                <button className='btn btn-white' onClick={closesearchdetailform}><i className="fa-solid fa-xmark" style={{ color: 'red' }}></i></button>
                </div>
                {searchedvalue.length === 0 ? (<p align="center">{props.role.charAt(0).toUpperCase() + props.role.slice(1)} not found</p>) : (searchedvalue.map((detail, index) => (<Rolemap key={detail.id} username={detail.username}  id={detail.id} sl={index + 1} name={detail.name} email={detail.email} phone={detail.phone} role={detail.role} address={detail.address} pin={detail.pin}/>)))}
                </div>
                </div>
                </div>
            </div>
        
        </div>
    )
}

export default Details
