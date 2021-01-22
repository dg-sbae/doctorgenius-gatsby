import React from "react";
//assign constant data variable
const data = [
  {
    id: 1,
    text:"16800 Aston Street, Suite 270 Irvine, CA 92606"
  }
]
//
const address = data.map(id =>{
  console.log(id.text);
  return (
   <span>
     {id.text}
   </span>
  )
})

export default address;
