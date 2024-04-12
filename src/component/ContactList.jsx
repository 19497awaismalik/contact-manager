import React, { useContext, useState } from 'react'
import avatar from '/avatar.jpg'
import Context from '../context/CreateContext'
import defaultAvatar from '/avatar.jpg'
import { AiOutlineCamera } from 'react-icons/ai'

const ContactList = (props) => {
  
  const [open, setOpen] = useState(false);
  let {contact,Edit} = useContext(Context);
     const [viewPort, setViewPort] = useState(false);
 useEffect(()=>{
       if (window.screen.availWidth<400) {
        setViewPort(true);
       }
     },[window.screen])
  
const [update,setUpdate]=useState({
  id:"",
  avatar:"",
  name:"",
  email:""
})

const handleEdit=(id)=>{
  setOpen(true);
  let filter=contact.filter((item)=>item.id===id);
   filter.map((item)=>{
    setUpdate({
      id:item.id,
      avatar:item.avatar,
      name:item.name,
      email:item.email
    })
   })
}
const handleSubmit=(e)=>{
  e.preventDefault();
setOpen(false);
Edit(update);
}
const handleChange=(e)=>{
  setUpdate({...update,[e.target.name]:e.target.value});
}
const imageHandler=(e)=>{

  const fileReader=new FileReader();
  fileReader.onload=async()=>{
      if(fileReader.readyState===2){
      const avatar=fileReader.result;
    
      setUpdate({...update,[e.target.name]:avatar});
      }
  }
  fileReader.readAsDataURL(e.target.files[0]);
}

  return (
  <>
  {open && <div className=' w-full h-full fixed  top-0 animation rounded-md'  >
   <div className=' mx-auto  md:w-[500px] w-full bg-white px-4 mt-3 pt-3'>
     <p onClick={()=>setOpen(false)} className=" flex justify-end cursor-pointer">
     <lord-icon
    src="https://cdn.lordicon.com/zxvuvcnc.json"
    trigger="hover"
    style={{width:"40px",height:"40px"}}  
    >
</lord-icon>
     </p>
    

       <form  className=' pb-5 rounded-lg' onSubmit={handleSubmit}>
       <div className=' relative  flex justify-center'>
                
                <img src={ update.avatar ? update.avatar : defaultAvatar}  
                className='w-[120px] h-[120px] rounded-full border-[3px] border-solid border-[#37a39a] ' alt='avatarImage' />
 
                <input type="file" name='avatar' className='hidden' accept='image/png,image/jpeg,image/jpg,image/webp' id='avatar'  onChange={imageHandler}/>
 
                <label htmlFor="avatar" className=' w-[30px] bg-slate-900 h-[30px] rounded-full absolute  items-center md:right-[160px] right-[120px] top-[60px]  cursor-pointer text-white '>
                    <AiOutlineCamera size={23} className=' z-1 !items-center !flex  !justify-center ' />
                </label>
                </div>
                <div className="relative mb-4">
                      <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                      <input type="text" id="ename" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  value={update.name} onChange={handleChange}/>
                    </div>
                <div className="relative mb-4">
                      <label htmlFor="name" className="leading-7 text-sm text-gray-600 ">Email address</label>
                      <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  value={update.email} onChange={handleChange}/>
                    </div>
                 
                    
                    <button className="text-white bg-green-500 border-0 py-2 px-10 focus:outline-none hover:bg-green-600 rounded text-lg" type="submit" >Update</button>
                </form>
  </div>
  </div>}
    <div className='mx-auto  md:w-[500px] w-[90%] border border-indigo-800 rounded-md my-4'>
      <div className=' flex w-full     justify-start items-center  '>
        <div className='avatar   py-2 mx-2'>
          <img src={props.item.avatar?props.item.avatar:avatar} alt="" className='    rounded-full  w-[50px] h-[50px]' />
        </div>
        <div className='name-email   '>
          <p>{props.item.name}</p>
          <p>{props.item.email}</p>
        </div>
        <div className=' w-[100px] mx-auto'>
        <div className={`   flex justify-end  ${open && "hidden"}`}>
        <lord-icon
    src="https://cdn.lordicon.com/skkahier.json"
    trigger="hover"
    style={{width:viewPort?"25px":"30px",height:viewPort?"25px":"30px",cursor:"pointer",marginRight:"2px"}} onClick={()=>props.handleDelete(props.item.id)} >
</lord-icon>
        <lord-icon
    src="https://cdn.lordicon.com/oqaajvyl.json"
    trigger="hover"
    style={{width:viewPort?"25px":"30px",height:viewPort?"25px":"30px",cursor:"pointer",marginLeft:"2px",color:"red"}}
    onClick={()=>handleEdit(props.item.id)}>
</lord-icon>
        </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default ContactList
