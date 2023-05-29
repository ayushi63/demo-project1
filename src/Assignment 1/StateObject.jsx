import React, { useEffect, useState } from 'react'

function StateObject() {
  const[profile,setprofile]=useState({});
  const[count,setcount]=useState(0);
  useEffect(()=>{
  const interval=setInterval(()=>{
      setcount(count+1);
    },1000);
  return()=>clearInterval(interval);
  },[count])
    const object={name:"Ayushi",
                  phoneNo:7202917242,
                  text:"Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam est porro labore veritatis fugit quos nam facilis quisquam provident harum consequuntur voluptates adipisci at eos nisi iure distinctio, molestiae saepe. adipisicing elit. Vitae dignissimos, eveniet iusto id similique voluptatem mollitia consectetur optio expedita dolore harum incidunt inventore. Dolores distinctio eligendi possimus quia odit fuga?"
                  }
    const object2={name:"Vanshita",
                  phoneNo:9499600962,
                  text:"Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam est porro labore veritatis fugit quos nam facilis quisquam provident harum consequuntur voluptates adipisci at eos nisi iure distinctio, molestiae saepe. adipisicing elit. Vitae dignissimos, eveniet iusto id similique voluptatem mollitia consectetur optio expedita dolore harum incidunt inventore. Dolores distinctio eligendi possimus quia odit fuga?"  }
  
    
   
    
                  return (

    // <div className="container">
    //   <h1>{count}</h1>
    //   <button className='st btn' onClick={()=>setcount(count+1)}>Click me</button>
    // </div>
    <>
    {profile.name && <div className="profile-card">
        <h1>{profile.name}</h1>
        <h3>{profile.phoneNo}</h3>
        <p>{profile.text}</p>
        <button className='btn'>Learn More</button>
    </div> 
}
    <div>
        <button onClick={() => setprofile(object)} className='btn'>Set profile</button>
        <br />
        <button className='btn' onClick={() => setprofile(object2 )}>Change profile</button>
        <br />
        {profile.name &&<button className='btn' onClick={() => setprofile({})}>clear profile</button> }
    </div>
    </>
  )
}

export default StateObject
