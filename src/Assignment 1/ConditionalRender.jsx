import React, { useRef } from 'react'

//export default function ConditionalRender() {
//     const balance=85;
//     return (
//     <div>
//         <h1>
//             {balance>60&&"your balance is greater than 60"}
//             {balance>60?
//             "your balance is greater than 60"
//             :balance>=50
//             ?"your balance is greater than equal 50"
//             :"your balance is less then 50"}
//         </h1>
//     </div>
//   )
//}

export default function LIstRender() {
  const inputRef = useRef(null)
  const listArry = [
    'Test1',
    'Test2',
    'Test3',
    'Test4',
    'Test5',
    'Test6',
    'Test7',
  ]
  let isTrue = false
  function changeColor() {
    // const input = document.getElementById('inputField');
    inputRef.c.focus();
    // isTrue = !isTrue
    // if (isTrue) {
    //   ulRef.current.style.backgroundColor = 'red'
    //   ulRef.current.style.fontSize = '50px'
    // } else {
    //   ulRef.current.style.background = 'blue'
    //   ulRef.current.style.fontSize = '20px'
    // }
  }
  return (
    <>
      {/* <ul ref={ulRef} style={{ listStyleType: 'none' }}>
        {listArry.map((ele, index) => (
          <li key={index}>{ele}</li>
        ))}
      </ul> */}
      <input ref={inputRef} type="text" />
      <button onClick={changeColor}>Change color</button>
    </>
  )
}
