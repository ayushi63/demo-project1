import React, { useState } from 'react'

function Assignment3() {
    const[plus,setPlus]=useState(0)
  return (
    <div>
        <h1>{plus}</h1>
      <button className='btn' onClick={()=>setPlus(plus+1)}>Plus Count</button>
      <button className='btn' onClick={()=>setPlus(plus > 0 ? plus-1:0)}>Plus Count</button>
    </div>
  )
}

export default Assignment3
