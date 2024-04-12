import React, { useState,useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
const ContactCard = () => {
  
  const [searchParams, setSearchParams] = useSearchParams()

let id=searchParams.get('id')
  
 const [data, setdata] = useState(); 
useEffect(() => {
 
fetch(`http://localhost:3006/contants/${id}`)
.then((resp)=>resp.json())
.then((data)=>setdata(data))

}, []);


let navigate=useNavigate();
  return (

    <div>
    <div className="container mt-5">
      <div className="row">
        <div className="offset-3 col-6 border text-center roundec">
          <img src="data:image/jpeg;base64,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" alt="" />
          { data &&<p className=' fst-italic'>{data.name}</p>}
          {data && <p className=' fst-italic'>{data.email}</p>}
        </div>
         <div className="offset-3 col-6 mt-3">
          <div className=" d-grid grap-2">

         <button className=' btn btn-primary fst-italic'onClick={ ()=>navigate('/')}>Go Back</button>
          </div>
         </div>
      </div>
    </div>



    </div>
  )
}

export default ContactCard
