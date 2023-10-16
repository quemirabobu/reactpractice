import {Link, NavLink, useNavigate} from 'react-router-dom';
import React, {Outlet, createContext, useState, useEffect, useCallback, useReducer, useRef, useMemo,} from 'react';
import axios from 'axios';
import styled from 'styled-components';

function MemoOfComponent() {
  const[num,setNum] = useState('');
  const [list,setList] = useState([]);

  const getavg = (list)=>{
      if(list.length===0){
          return 0;
      }
      let sum = 0;
      list.forEach(  (num)=>{
          sum+=parseInt(num,10);
      } );

      return sum/list.length;

  }

  const a = useRef();

  const listbttn = ()=>{
      const newlist = list.concat(num);
      setList(newlist);
      setNum('')

  }

  const average = useMemo( ()=>{
      return getavg(list)
  } )


    return (
        <div>
            <input type="text" ref={a} value={num}  onChange={ (e)=>{
                setNum(e.target.value)
            }}/>
            <button onClick={listbttn}>awe</button>
            <ul>
                {list&&list.map(  (number,index)=>{

                    return <li key={index}> {number}  </li>

                } )}

            </ul>

<p>{average}</p>
        </div>
    );
}

export default MemoOfComponent;
