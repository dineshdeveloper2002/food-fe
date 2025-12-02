import { useEffect, useState } from "react";
import React from "react";

export const Header = () => {

  return (
    <div style={{width:'100%',height:'100px',backgroundColor:'#9c9595',borderRadius:'2px'}}>
        <div style={{color:'white',fontWeight:'600',fontSize:'34px',display:'flex',justifyContent:'center',alignItems:'center',position:'absolute',top: '17px',
    left: '28px'}}>
            Chat assistance bot
        </div>
    </div>
  )
}
