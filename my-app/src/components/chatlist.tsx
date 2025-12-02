import { useEffect, useState } from "react"
import { useContext } from "react";
import { Authcontext } from "../context/authcontext";
import { useStoreState, useStoreActions } from "easy-peasy";


interface Chatprops{
    inputdata:string[]
}

export const Chatlist =({inputdata}:Chatprops)=>{
    const[text,gettext]= useState<string[]>([])
    let message =[
  "Hi there! Need any help? I'm just a message away. 💬",
  "Welcome! 😊 Ask me anything, I'm here to assist you.",
  "Hello! I'm your virtual assistant. Let me know how I can support you today.",
  "Hey! 👋 Looking for something specific or need help with something?",
  "Hi! I'm here to make things easier. What would you like to do?"
    ]   
    let textwidth = '200px'
      return(
        <div style={{height:'calc(100vh - 182px)',backgroundColor:'#e1ffe1'}}>
            
                     <div style={{width:`${textwidth}`,backgroundColor:'white',color:'black',height:'66px',borderRadius:'27px',display:'flex',justifyContent:'flex-start',paddingLeft:'15px'}}>
                      <p >
                     
                      </p>
                      <p>
                      </p>
                        </div>
        </div>
    )
}