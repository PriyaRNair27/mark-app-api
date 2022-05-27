import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const View = () => {
    var  [viewlist,setviewlist]=useState([])

   
axios.get("http://localhost:5000/api/view").then(
    (response)=>{

        console.log(response.data)
        setviewlist(response.data.data) 
      
    })
  return (
    <div>
        <Header/>
<div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table ">
  <thead className="table table-info">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Admin no</th>
      <th scope="col">Cgpa</th>
     
    </tr>
  </thead>
  <tbody>
  {viewlist.map((value,key)=>{
           return <tr>
               <td>{value.name}</td>
                <td>{value.admin}</td>
     
      <td>{value.cgpa}</td>
      </tr>
        })}
     
    
  </tbody>
</table>
    </div>
    </div>
        </div>
    </div>
    </div>
</div>
  )
}

export default View