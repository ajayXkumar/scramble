import React from 'react'
import data from "../data"
import { Link } from 'react-router-dom'
const Ans = () => {
  return (
    <div>
         <h2 style={{fontWeight:"bold",marginLeft:"35px"}}>ANSWERS</h2>
         {data.map((item)=>(
            <p style={{fontWeight:"bold"}}>Q.{item.id} &nbsp; {item.q} ==&nbsp; {item.a}</p>
         ))}
         
         <Link to ="/" ><img src="/replay.png" style={{width:"40px" ,cursor:"pointer",marginLeft:"60px",marginTop:"40px"}} /></Link>
         
    </div>
  )
}

export default Ans