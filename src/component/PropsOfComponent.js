import {Link, NavLink, useNavigate} from 'react-router-dom';
import React, { Outlet,createContext,useState,useEffect,useCallback,useReducer, useRef,  } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function PropsOfComponent(props) {
    return (
        <div>
            <div>{props.num}</div>
            <div>{props.name}</div>
            <button onClick={props.propsFunc}>클릭</button>
        </div>
    );
}

export default PropsOfComponent;
