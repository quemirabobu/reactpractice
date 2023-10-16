import {Link, NavLink, useNavigate} from 'react-router-dom';
import React, {Outlet, createContext, useState, useEffect, useCallback, useReducer, useRef,} from 'react';
import axios from 'axios';
import styled from 'styled-components';

function ReducerOfComponent() {

    function reducer (action, state) {
        switch (action.type) {

            case 'increase' :
                return {value1: state.value1 + 1, value2: (state.value1 + 1) * 2}

            case 'decrease' :
                return {value1: state.value1 - 1, value2: (state.value1 - 1) * 2}
            default :
                return state;
        }



    }

    const [state, dispatch] = useReducer(reducer, {value1: 0, value2: 0})

    return (
        <div>
            <div>{state.value1}</div>
            <div>{state.value2}</div>
            <button onClick={ ()=> dispatch({type:"increase"}) }>+1</button>
            <button onClick={() =>dispatch({type:"decrease"})}>+1</button>
        </div>
    );
}

export default ReducerOfComponent;
