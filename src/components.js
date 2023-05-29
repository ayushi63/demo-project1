// export default function FirstComponent(props){
//     return(
//         <div>
//             <button className="btn">
//                 {props.children}
//             </button>
//             <h1>Mayur nakum</h1>
//         </div>

import React, { Component } from "react";

//     )
// }

class FirstComponent extends React.Component {
    constructor(){
        super();
    }
    render(){
   return(
       <div>
        <button className="btn">
            {this.props.children}
        </button>
        <h1>Mayur nakum</h1>
        <img src="/logo192.png"/>
    </div>
   )
}
}
export default FirstComponent; 