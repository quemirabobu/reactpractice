import {Link, NavLink, useNavigate} from 'react-router-dom';
import React, { Outlet,createContext,useState,useEffect,useCallback,useReducer, useRef,  } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function RefOf() {
const navi = useNavigate();
const inputRef = useRef();
const idRef = useRef();
const pwRef = useRef();

const fncClick = ()=>{
console.log(inputRef);
    console.log(inputRef.current.value);
    console.log(idRef.current);
    if(idRef.current.value===""){
        alert("아이디를 입력하세요");
        return;
    }






}

    return (
        <div>
            <label htmlFor="">
                아이디
                <input type="text" ref={idRef}/>
            </label>
            <label htmlFor="">
                비밀번호
                <input type="password" ref={pwRef}/>
            </label>

            <input type="text" ref={inputRef}/>
            <button onClick={fncClick}></button>


        </div>
    );
}

export default RefOf;
