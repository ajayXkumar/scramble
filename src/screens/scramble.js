import React, { useContext, useEffect, useState} from 'react'
import {Link } from 'react-router-dom'
import question from "../data"
import "./scramble.css"
const Scramble = () => {
    
    
    const [marks,setmarks]=useState(0);
    const [count,setcount]=useState(0)
    const [ans , setans]=useState("");
    const [result, setresult]=useState(true);
    const [wrong,setwrong]=useState(0);
    const [min ,setmin]=useState(10)
    const [ss ,setss]=useState(0)
    const [pic ,setpic]=useState(0)
    const [life ,setlife]=useState("/0.png")
    const [leftt,setleftt]=useState(3);
    const checkans=()=>{

       if(ans.toUpperCase()==question[count].a.toUpperCase()){
          setcount(count+1);
          setmarks(marks+1);
          setleftt(3);
          if(count==question.length-1){
            setcount(0)
            setresult(false);
          }
          setans("")
       }
       else{
        setwrong(wrong+1)
        setleftt(leftt-1)
        if(wrong==0){
          setlife("/12.png")
        }
        if(wrong==1){
          setlife("/11.png")
        }
        if(wrong==2){
            setmarks(marks-1);
            setcount(count+1)
            if(count==question.length-1){
              setcount(0)
              setresult(false);
              if(marks>=-30 && marks<=3){
                setpic("/3.png")
              }
              if(marks>=4 && marks<=7){
                setpic("/7.png")
              }
              if(marks>7 && marks<10){
                setpic("/9.png")
              }
              if(marks==10){
                setpic("/10.png")
              }
              
            }
            
            setwrong(0);
            setleftt(3)
        }
       }
    }
 

    setTimeout(() => {
           
            setss(ss-1);
            if(ss==0){
                setmin(min-1);
                setss(59);
            }
            if(min==0 && ss==0){    
                    setresult(false)
            }

    }, 1000);

 
   const handlenext=()=>{
       setcount(count+1)
       setleftt(3);
       if(count==question.length-1){
        if(marks>=0 && marks<=3){
          setpic("/3.png")
        }
        if(marks>=4 && marks<=7){
          setpic("/7.png")
        }
        if(marks>7 && marks<10){
          setpic("/9.png")
        }
        if(marks==10){
          setpic("/10.png")
        }
        setcount(0)
        setresult(false);
      }
   }

    const yourAns=(e)=>{
        setans(e);
    }
    
    const replay=()=>{
      setresult(true);
      setcount(0)
      setleftt(3);
      setmarks(0)
    }
    
    
  return (
    <div className='card'>
      
     {result ? (
        <div className='whole-body'>
          <h2 className='heading'>Scramble</h2>
         <div className='tm'>
            <p className='timer'>time: {min} : {ss}</p>
            
            <p className='marks'>score: {marks}</p>
        </div>
          
        <div className='question'>   
            <p>{question[count].id}. {question[count].q}</p>
        </div>
        <p style={{fontSize:"10px",marginLeft:"25px"}}>chances: {leftt}</p>
         <form>
             <input
                className='user-input'
                type='text'
                onChange={(e)=>yourAns(e.target.value)}
             >
             </input>
         </form>
         <div className='all-but'>
         <button  className="but" onClick={checkans}>Next</button>
         <button  className="skip" onClick={handlenext}>Skip</button>
         </div>
         </div>
     ):(
        <div className='result'>
            <img src={pic} style={{width:"80px" , marginTop:"60px",marginLeft:"110px"}}/>
            <h1 style={{textAlign:"center"}}>{marks}</h1>

            <button onClick={replay} style={{background:"none" ,border:"none",marginLeft:"120px",marginTop:"10px"}}><img src="/replay.png" style={{width:"40px" ,cursor:"pointer"}} /> </button>
              
            
        </div>
        
      
     )}
        

        
    </div>
  )
}

export default Scramble