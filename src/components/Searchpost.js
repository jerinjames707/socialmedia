import React, { useState } from 'react'
import Header from './Header'

const Searchpost = () => {
    
        var [name,setname]=useState("rahul")
        const chngname =()=>{
            setname(
                name="revathy"
            )
        }
    
   
  return (
    <div>
        <Header/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                   <p>{name}</p>
                    
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={chngname} className="btn btn-primary">Search</button>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Searchpost