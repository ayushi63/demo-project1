import React, { useState } from 'react'

function According() {
    const[Show,SetShow]=useState(false);
  return (
    <div>
      <h1 onClick={()=>SetShow(!Show)}>ask questions</h1>
      {Show && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus odio nam est amet dolor quo a non natus, maxime beatae quam iusto? Labore et consectetur doloremque assumenda perferendis mollitia dolor.</p>}
    </div>
  )
}

export default According
