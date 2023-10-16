import {Link, NavLink, useNavigate} from 'react-router-dom';
import React, { Outlet,createContext,useState,useEffect,useCallback,useReducer, useRef,  } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function EventOfComponent2() {

    const [num,setNum] = useState(0);
    const minusnum = (number)=>{
        setNum(number)
    }

    return (
        <div>
<div>{num}</div>
           <button onClick={  ()=>{
               setNum(num+1);
           }}>+1</button>
            <button onClick={()=>{
                minusnum(num-1)
            }}>-1</button>
        </div>
    );
}

export default EventOfComponent2;
