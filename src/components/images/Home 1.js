import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { AiFillAccountBook, AiFillAmazonCircle } from "react-icons/ai";
import { AiFillCloud } from "react-icons/ai";
import { AiFillCrown } from "react-icons/ai";
import { AiFillGitlab } from "react-icons/ai";
import { AiFillMoneyCollect } from "react-icons/ai";
import { AiFillOpenAI } from "react-icons/ai";
import '../../home.css';
const Home1 = () => {

    
  return (
    <div className='second'>
      <h1 style={{textAlign:"center",fontSize:"20px",fontWeight:"bold"}}>Trade Your Way with HNTFX</h1>
      <p style={{textAlign:"center",margin:"20px"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, aspernatur qui repudiandae voluptate facere soluta consequatur, tempore enim optio quo sequi eaque numquam mollitia saepe a fugiat tempora consequuntur corporis!</p>


      <div className='card_container'> 
        <div className='card' >
        <AiFillAccountBook className='cardlogo'/>    
            <span> <h1>Lorem ipsum</h1><IoIosArrowForward /></span>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus amet possimus.</p>
        </div>
        <div className='card' style={{backgroundColor:"green"}} >
        <AiFillCloud className='cardlogo'/>    
            <span> <h1>Lorem ipsum</h1><IoIosArrowForward /></span>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus amet possimus.</p>
        </div>
        <div className='card' style={{backgroundColor:"yellow"}} >
        <AiFillCrown className='cardlogo'/>    
            <span> <h1>Lorem ipsum</h1><IoIosArrowForward /></span>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus amet possimus.</p>
        </div>
        <div className='card' style={{backgroundColor:"blue"}}  >
        <AiFillGitlab className='cardlogo'/>    
            <span> <h1>Lorem ipsum</h1><IoIosArrowForward /></span>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus amet possimus.</p>
        </div>
        <div className='card' style={{backgroundColor:"brown"}} >
        <AiFillMoneyCollect className='cardlogo'/>    
            <span> <h1>Lorem ipsum</h1><IoIosArrowForward /></span>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus amet possimus.</p>
        </div>
        <div className='card' style={{backgroundColor:"black"}}>
        <AiFillAmazonCircle className='cardlogo'/>    
            <span> <h1>Lorem ipsum</h1><IoIosArrowForward /></span>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus amet possimus.</p>
        </div>
{/* card */}
        </div>
        
        </div>
     
  )
}

export default Home1
