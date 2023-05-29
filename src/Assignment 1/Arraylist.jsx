import React, { useState } from 'react'
import { useNavigate } from 'react-router';

function Arraylist() {
    const[list,setlist]=useState([
        {Text:"1 Item",color:""},
        {Text:"2 Item",color:""},
        {Text:"3 Item",color:""},
        {Text:"4 Item",color:""},
        {Text:"5 Item",color:""},
        {Text:"6 Item",color:""},
        {Text:"7 Item",color:""},
        {Text:"8 Item",color:""},
        {Text:"9 Item",color:""},
        {Text:"10 Item",color:""},
    ]);
    const colorlist=["red","blue","green","yellow","grey","orange","purple","skyblue"]
    function updateColor(index){
        console.log('index :>> ', index);
        const updatedData=list.map((ele,i)=>{
            if(index === i){
                return{...ele,color:colorlist[Math.floor(Math.random()*10)]}
            } else{
                return ele;
            }
        });
        setlist(updatedData);
    }
    const navigate =useNavigate();
    function gotologin(){
        navigate("/Register");
    }
    
    return (
    <div className="list-container">
        {
            list.map((ele,i)=>(

                <div key={ele.Text} className='text' 
                onClick={()=> updateColor(i)}
                style={{backgroundColor:ele.color}}
                >{ele.Text}</div>
            ))
        }

<button onClick={gotologin} className="btn">Go to Login</button>

        
    </div>
  )
}

export default Arraylist
