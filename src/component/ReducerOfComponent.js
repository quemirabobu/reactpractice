import {Link, NavLink, useNavigate} from 'react-router-dom';
import React, { Outlet,createContext,useState,useEffect,useCallback,useReducer, useRef,  } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function ReducerOfComponent() {

    function reducer(state, action){
        switch (action.type) {
            case 'increase':
                return {value1:state.value1+1, value2:state.value1*2+1}

            case 'decrease' :
                return {value1:state.value1-1, value2: state.value1*2-1}

            default:
                return state
        }
    }


    const [state, dispatch] = useReducer(reducer, {value1:0, value2:0})


    return (
        <div>
<p>{state.value1}</p>
<p>{state.value2}</p>
            <button onClick={()=>dispatch({type:'increase'})}>+1</button>
            <button onClick={()=>dispatch({type:'decrease'})}>-1</button>

        </div>
    );
}

export default ReducerOfComponent;
