import React, { useContext, useEffect, useState } from "react";
import Context from "../context/CreateContext";
import ContactList from "./ContactList";
import { useFormik } from 'formik'
import * as Yup  from 'yup'
import toast from 'react-hot-toast'
const AddContact = () => {
  let { contactList,setContactList,handle,contact,handleDelete} = useContext(Context);


const handleChange=(e)=>{
  setContactList({...contactList,[e.target.name]:e.target.value});

}
const handleSubmit=(e)=>{
  e.preventDefault();
   handle(contactList);
}
  

  return (
   <div>
     <section className="text-gray-600 body-font relative">
    <div className="container px-5  mx-auto flex  justify-center">

      <div className="lg:w-1/2 w-full bg-white   my-5 ">
        <h2 className="text-gray-900  mb-1  text-2xl text-center title-font font-bold">Add New Contact</h2>
       <form action="" onSubmit={handleSubmit}>
         
       <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
          <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={contactList.name} onChange={handleChange} />
        </div>
       <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email </label>
          <input type="name" id="name" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={contactList.email} onChange={handleChange} />
        </div>
        
        
        <button className="text-white bg-green-500 border-0 py-2 px-10 focus:outline-none hover:bg-green-600 rounded text-lg" type="submit" >Add Contact</button>
      
       </form>
      </div>
    </div>
  </section>
  <div className=" card pb-[50px]">
  <h1 className= "text-2xl  text-center mb-5 font-bold  md:mt-0 mt-10 ">Contact List</h1>
  {contact && contact.map((item,index)=>{ 
    return (<ContactList key={index} item={item} handleDelete={handleDelete}/>)
  })}
 
  </div>
   </div>
  );
};

export default AddContact;
