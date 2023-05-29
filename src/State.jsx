import React, { useState } from 'react'
  // let String="submit"
  // function Change(){
  //   String="update"
  // }
function State() {
  const[Show,SetShow]=useState(false);
  setTimeout(()=>{
    SetShow(false);
  },5000);
  return (
    <> 
     {/* <button className='btn'>{name}</button> <br />
    <button className='btn' onClick={()=>setNAME("Update")}>Change name</button> 
    
    <input onChange={(e)=>setText(e.target.value)} type="text" />
    <h1>{text}</h1> */}

{Show &&<div className="alert">
    <p>This is error</p>
    </div>}
    <button className='alert-btn btn' onClick={()=>SetShow(!Show)}>Show Alert</button>

    </>
  )
}

export default State
