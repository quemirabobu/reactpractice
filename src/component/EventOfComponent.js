import {Link, NavLink, useNavigate} from 'react-router-dom';
import React, { Outlet,createContext,useState,useEffect,useCallback,useReducer, useRef,  } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function EventOfComponent({message,changeMessage}) {

    const changemsg = (e)=>{
        changeMessage(e.target.value)

    }
   const clickfnc = (e)=>{
        alert(message);
        changeMessage('');
   }

    return (
        <div>
            <input type="text" value={message} onChange={changemsg}/>
            <button onClick={clickfnc}>버튼</button>
        </div>
    );
}

export default EventOfComponent;
