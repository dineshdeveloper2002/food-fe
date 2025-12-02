import styled from "styled-components";
import { Header } from "../components/Header";
import { Inputfield } from "../components/inputfield";
import { Chatlist } from "../components/chatlist";
import React, { useEffect, useRef, useState } from "react";

export const Home = () => {
    useEffect(() => {
        const getdata = async () => {
            const API = await fetch('https://jsonplaceholder.typicode.com/users');
            const response2 = await API.json()
            console.log(response2)
        }
        getdata()
    }, [])


    const [inputdata, getinput] = useState<string[]>([])
    const [check, updatebutton] = useState<boolean>(false)
    return (
        <div style={{ maxWidth: '100vh', height: '100vh', backgroundColor: '#dde8dd' }}>
            <Header />
            <Chatlist inputdata={inputdata} />
            <button onClick={() => updatebutton(true)} style={{ backgroundColor: 'red' }}> Submit</button>
        </div>
    )
}
