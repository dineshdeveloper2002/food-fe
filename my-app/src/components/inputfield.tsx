import styled from "styled-components";
import { useEffect, useState } from "react";
import React from "react";
import { Button } from "@mui/material";

interface inputprops{
    getinput:React.Dispatch<React.SetStateAction<string[]>>,
    inputdata:string[]
}

export const Inputfield =({getinput,inputdata}:inputprops)=>{
    const[tempmessage,updatemessage]= useState<string>("")

    const handleclick =(value:string)=>{
        updatemessage(value)
        getinput([...inputdata,tempmessage])
    }

    return(
        <>
         <Styledinput placeholder="Ask questions" onChange={(e)=>handleclick(e.target.value)}/>
            <Button>
                
            </Button>
        </>
       
    )
}

const Styledinput = styled('input')(
    {
        width:'99vh',
        backgroundColor:'#ffe8e8',
        position:'absolute',
        bottom:0,
        left:0,
        height:'82px',
        borderRadius:'21px'
    }
)
