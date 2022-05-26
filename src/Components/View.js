import React from 'react'

const View = () => {
    var viewlist=[
        {
            "name":"anoop","admin":"112","cgpa":"7.7"
        },
        {
            "name":"manju","admin":"113","cgpa":"7.8"
        },
        {
            "name":"lachu","admin":"114","cgpa":"7.9"
        },
        {
            "name":"radha","admin":"115","cgpa":"7.5"
        }
    ]
  return (
    <div>
<div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
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