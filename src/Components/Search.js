import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Search = () => {
    const [data,setdata]=useState([{"name":"","cgpa":""}])
     const [admin,setadmin]=useState("")
    const subdata=()=>{
        const data={"admin":admin}
        console.log(data)

        axios.post("http://localhost:5000/api/search",data).then((response)=>{
            
            setdata(response.data.data)

        })

        
    }
    
    const deleteApiCall=(id)=>{
         const data={"_id":id}
        console.log(data)
        axios.post("http://localhost:5000/api/delete",data).then((response)=>
        {
            if(response.data.status=="success")
            {
                alert("success")
            }
            else
            {
                alert("error")
            }
        })
       
    }

  return (
    <div>
        <Header/>
<div className="container">
    <div className="row">
            <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="from-label">Admin no</label>
                    <input  onChange={(e)=>{setadmin(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subdata} className="bt btn-success">SEARCH</button>
                </div>


    </div>
    {data.map((value,key)=>
    {
        return<div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                NAME:
                <input type="text" value={value.name} className="form-control"/>

                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                CGPA:
                <input type="text" value={value.cgpa} className="form-control"/>

                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button   onClick={()=>{deleteApiCall(value._id)}} className="bt btn-success">DELETE</button>

                </div>
                
              
                
                </div>

                  

    })}
    </div>
    </div>
    </div>

  )
}

export default Search