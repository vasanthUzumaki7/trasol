import React from 'react'
import { FaApple } from "react-icons/fa6";
import { FcAndroidOs } from "react-icons/fc";
import { FaWindows } from "react-icons/fa";
import { FaWindowMaximize } from "react-icons/fa";
import comp from '../images/computer.png';
import '../../home.css';
import { FaCcPaypal } from "react-icons/fa";
import { RiVisaFill } from "react-icons/ri";
import { SiPayoneer } from "react-icons/si";
import { CiBitcoin } from "react-icons/ci";
import { FaCcMastercard } from "react-icons/fa";

const Home2 = () => {
  return (
    <div className='home2_container'>
      <div className='home2_layer'>
        <img src={comp} alt="" />
        <div>
            <h3 style={{fontSize:"15px",color:"red",fontWeight:"bold"}}>Operatig system</h3>
            <h2 style={{fontSize:"15px",fontWeight:"bold"}}>Trade your way with HNTFX</h2>
            <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae eaque molestias assumenda temporibus quos natus autem doloribus omnis voluptate cum!</p>
            <div className='icon_cont'>
            <FaApple className='social' />
            <FcAndroidOs className='social'/>
            <FaWindows className='social'/>
            <FaWindowMaximize className='social'/>
            </div>
        </div>
      </div>

      <div style={{display:"flex",justifyContent:"center",gap:"5px",border:"1px solid yellow",boxSizing:"border-box",margin:"70px",alignItems:"center",padding:"5px"}}>
        <button style={{backgroundColor:"red",color:"White",margin:"3px",borderRadius:"10px",padding:"5px",fontSize:"10px"}}>START TRADE</button>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, saepe!</p>
        <span style={{color:"red"}}>JOIN now!</span>
      </div>
      <div style={{display:"flex",justifyContent:"space-evenly",margin:"20px"}}>
        < FaCcPaypal className='payicon'/>
        <RiVisaFill className='payicon'/>
        <SiPayoneer className='payicon'/>
        <CiBitcoin className='payicon'/>
        <FaCcMastercard className='payicon' />
      </div>
    </div>
  )
}

export default Home2
