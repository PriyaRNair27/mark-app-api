import React, { useState } from 'react'

const Add = () => {
    var [name,setname]=useState("")
    var [admin,setadmin]=useState("")
    var [cgpa,setcgpa]=useState("")
    const subdata=()=>{
        const data={"name":name,"admin":admin,"cgpa":cgpa}
        console.log(data)

    }
  return (
    <div>

<div className="container">
    <div className="row">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="from-label">Name</label>
                    <input  onChange={(a)=>{setname(a.target.value)}}type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="from-label">Admin no</label>
                    <input  onChange={(a)=>{setadmin(a.target.value)}}  type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="from-label">Cgpa</label>
                    <input onChange={(a)=>{setcgpa(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button  onClick={subdata} className="bt btn-success">Submit</button>
                </div>
            </div>
        </div>
    </div>
    </div>

  )
}

export default Add