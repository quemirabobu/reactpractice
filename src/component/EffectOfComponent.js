import {Link, NavLink, useNavigate} from 'react-router-dom';
import React, { Outlet,createContext,useState,useEffect,useCallback,useReducer, useRef,  } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function EffectOfComponent() {
const [num1, setNum1] = useState(0)
const [num2, setNum2] = useState(0)
useEffect(()=>{
    alert("최초 렌더링")
},[]);

useEffect( ()=>{
    alert(num1)
    setNum2(num1*2)
},[num1] )

    return (
        <div>
            <p>{num1}</p>
            <p>{num2}</p>
            <button onClick={  ()=>{
                setNum1(num1+1);
            }}> +1</button>
        </div>
    );
}

export default EffectOfComponent;
