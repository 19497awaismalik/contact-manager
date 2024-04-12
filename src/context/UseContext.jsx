import React, { useEffect, useState } from 'react'
import Context from './CreateContext'
import toast from 'react-hot-toast'
const State=(props)=>{


  const [contactList, setContactList] = useState({
name:"",
email:""
});
let [contact, setcontact] = useState([])

// useEffect(()=>{
// fetch('https://json-server-ruby.vercel.app/contants')
// .then((resp)=>resp.json())
// .then((data)=>setcontact(data))

// },[setcontact])

const handle=async(data)=>{
  if(data.name==="" || data.email===""){
    toast.error("fill the name and email fields...")
    return ;
  }else{

    const response = await fetch('https://json-server-ruby.vercel.app/contants', {
      method: "POST", 
      
        headers: {
          "Content-Type": "application/json",
        },
        
        body: JSON.stringify({name:data.name,avatar:"",email:data.email}), 
      });
      setContactList({
        name:"",
        email:""
      })
      toast.success("Contact added successfull!");
      let resp=await response.json();
      setcontact(contact.concat(resp))
      
      
    }
  }
    const handleDelete=async(id)=>{

      
      
      await fetch(`https://json-server-ruby.vercel.app/contants/${id}`, {
        method: "DELETE", 
        
        headers: {
          "Content-Type": "application/json",
          
        },
        
        
      })
      toast.success("Contact Deleted successfull!");
      contact= contact.filter((data)=>data.id!=id)
      
      setcontact(contact);   
      
      
    }
    const Edit=async({id,name,email,avatar})=>{
      if (name==="" || email==="") {
        toast.error("fill the name and email fields")
           return ;
      } else {
        
      await fetch(`https://json-server-ruby.vercel.app/contants/${id}`, {
          method: "PUT", 
          
        headers: {
          "Content-Type": "application/json",
          
        },
        body:JSON.stringify({id,avatar,name,email})
      })
      
      
      toast.success("Contact updated successfull!");
      fetch('https://json-server-ruby.vercel.app/contants')
      .then((resp)=>resp.json())
      .then((data)=>{
        setcontact(data)
      })

      

    }
    }
    return(
<Context.Provider   value={{contactList,setContactList,handle,handleDelete,Edit ,contact}}>{props.children}</Context.Provider>


)




}
export default State;
