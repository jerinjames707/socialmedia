import React, { useState } from 'react'
import Header from './Header'

const Addpost = () => {
    var [title,settitle]=useState("")
    var [message,setmessage]=useState("")
    const subData=()=>{
        const data={"title":title,"message":message}
        console.log(data)
    }


  return (
    <div>
        <Header/>
         <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Title</label>
                    <input onChange={(e)=>{settitle(e.target.value)}} className="form-control" placeholder="Enter Title" type="text"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Message</label>
                    <textarea onChange={(e)=>{setmessage(e.target.value)}} className='form-control' placeholder='Enter Message'/>
                </div>
                
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button  onClick={subData} className="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Addpost