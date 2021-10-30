import React ,{useState} from 'react'
import './Room.css'


function Room() {
    let [isLit,setLit] = useState(true);
    let [Age,setAge]=useState(23);

   
    
  return (
<div className={`room ${isLit ? "lit" : "dark"}`}>
   This Room is {isLit?"Lit":"Dark"}
   <br/>
   Age : {Age}
   <br/>
   <button onClick={()=>setLit(!isLit)}>Toggle Light</button>
   <br/>
   <button onClick={()=>{

          console.log("Arrow Function");
          setAge(++Age)
                }}>Increment Age</button>
 </div>
  );
}

export default Room;