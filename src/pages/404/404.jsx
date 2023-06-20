import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFonud() {
  return (
    <div style={{background:"red",height:"100vh" ,color:"white",textAlign:"center"}}>
       <h1 style={{fontSize:"85px",textAlign:"center",paddingTop:"100px"}}>404</h1>
       <p style={{fontSize:"55px",textAlign:"center"}}>PAGE NOT FOUND</p>
       <Link style={{fontSize:"35px",textAlign:"center",color:'white'}} to={'/'}>
       Back to home
       </Link>
    </div>
  )
}
