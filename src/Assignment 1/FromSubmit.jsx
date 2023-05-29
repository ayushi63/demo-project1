import React, { useState } from 'react'

function FromSubmit() {
  const[id,setid]=useState('')
  const[userlist,setuserlist]=useState([]);
  const[name,setname]=useState("");
  const[password,setpassword]=useState("");
  const[Gender,setGender]=useState("");
  const[address,setaddress]=useState("");
  const[dob,setdob]=useState("");
  const[Education,setEducation]=useState("");
  const[time,settime]=useState("");
  function onSubmitform(event){
    event.preventDefault();
    const userData = {
      id:Date.now(),
      name:name,
      password:password,
      Gender:Gender,
      address:address,
      dob:dob,
      Education:Education,
      time:time
  };
  setname("");
  setpassword("");
  setGender("");
  setdob("");
  setEducation("");
  settime("");
  setaddress("");
  setuserlist([...userlist,userData]);
}

console.log('userlist',userlist)
function DeleteData(index){
  const readyToDel = window.confirm("Are you sure?");
  if(readyToDel){
    const DeleteData=userlist.filter((ele,i)=>index!==i);
    setuserlist(DeleteData);
  }
}

function updateData(index,user){
  setname(user.name);
  setpassword(user.password);
  setGender(user.Gender);         
  setdob(user.dob);
  setEducation(user.Education);
  settime(user.time);
  setaddress(user.address);
}
  return (

    <>
    <form action="" onSubmit={(event)=>onSubmitform(event)}> <br />
      <label htmlFor="">name :</label>
      <input onChange={(event)=>setname(event.target.value)}  value={name} type="text" name="" id="" placeholder='enter your name' /> <br /> <br />
     
      <label htmlFor="">password :</label>
      <input type="password"  onChange={(event)=>setpassword(event.target.value)} value={password} placeholder='enter your password'/> <br /> <br />
      
      <label htmlFor="">Gander:</label>
      <input type="radio" value={"Male"} onChange={(event)=>setGender(event.target.value)} name='gander'/> Male
      <input type="radio" value={"Female"} onChange={(event)=>setGender(event.target.value)} name='gander'/>Female
      <input type="radio" value={"Other"} onChange={(event)=>setGender(event.target.value)} name='gander'/>Other <br /> <br />
     
      <label htmlFor="">address :</label>
      <textarea width='200'  onChange={(event)=>setaddress(event.target.value)} value={address} type="text"placeholder='enter your address' /><br /> <br />
      
      <label htmlFor="">dob :</label>
      <input type="date"  onChange={(event)=>setdob(event.target.value)} value={dob}/> <br /> <br />
     
      <label htmlFor="">Education :</label>
      <select name="" id=""  value={Education}  onChange={(event)=>setEducation(event.target.value)}>
        <option value="no select Education">Enter your Education </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select> <br /> <br />
     
      <label htmlFor=""> time:</label>
      <input type="time"  value={time} onChange={(event)=>settime(event.target.value)} /> <br /> <br />

      <button className='btn'>Submit</button>
   
    </form> <br /> <br />
 
      
      <table>
        <thead>
          <th>name</th> 
          <th>Password</th>
          <th>Gender</th>
          <th>address</th>
          <th>DOB</th>
          <th>Education</th>
          <th>Time</th>
          <th>Action</th>
        </thead>
        <tbody>
          {
          userlist.map((user,index)=>(
          <tr>
            <td>{user.name}</td>
            <td>{user.password}</td>
            <td>{user.Gender}</td>
            <td>{user.address}</td>
            <td>{user.dob}</td>
            <td>{user.Education}</td>
            <td>{user.time}</td>
            <td>
            <lord-icon onClick={()=>updateData(index,user)}
                src="https://cdn.lordicon.com/puvaffet.json"                
                trigger="hover"
                style={{width:'45px',height:'45px'}}>
            </lord-icon>

              <lord-icon onClick={()=>DeleteData(index)}
                  src="https://cdn.lordicon.com/jmkrnisz.json"
                  trigger="hover"
                  style={{width:'45px',height:'45px'}}>
              </lord-icon>
            </td>
          </tr>
          ))
          }
        </tbody>
      </table>
      
    </>

    )
}

export default FromSubmit


// <<<<<<<<<Components>>>>>>>>>>
// colection of html data
// functional & class base components
// 

