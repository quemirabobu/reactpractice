import {Link, NavLink, useNavigate} from 'react-router-dom';
import React, { Outlet,createContext,useState,useEffect,useCallback,useReducer, useRef,  } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function StateOfComponent({intNum,addIntNum,minusIntNum,setIntnum}) {

    useEffect(  ()=>{
        setIntnum(0);
        console.log(intNum);
    } ,[])
    return (
        <div>
<p>{intNum}</p>
<button onClick={addIntNum}> +1</button>




        </div>
    );
}

export default StateOfComponent;
