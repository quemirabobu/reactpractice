import {Link, NavLink, useNavigate} from 'react-router-dom';
import React, { Outlet,createContext,useState,useEffect,useCallback,useReducer, useRef,  } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function RefOf() {

    const idref = useRef();
    const pwref = useRef();
    const inputref = useRef();

    const fncclick = ()=>{
        console.log(idref.current.value);
        console.log(pwref.current.value);
        console.log(inputref.current.value);
        // useRef는 ReactHook이다. dom요소나 react요소에 직접적인 접근을 할 수 있게 한다.  특정 입력 필드에 포커스를 주거나 해당 요소의 값을 읽는 등의 작업을 수행할 수 있습니다.
        //
        // - **DOM 접근**: **`useRef`**는 DOM 요소에 직접 접근할 수 있게 합니다. 예를 들어, 특정 입력 필드에 포커스를 주거나 해당 요소의 값을 읽는 등의 작업을 수행할 수 있습니다.
        // - **불변성 유지**: **`useRef`**의 반환 값 (즉, ref 객체)는 컴포넌트의 전체 생명 주기 동안 유지됩니다. 이는 **`useState`**와 달리 ref의 값이 변경되어도 컴포넌트가 리렌더링되지 않는다는 것을 의미합니다.
        // - **값 저장**: **`useRef`**는 임의의 값을 저장하는데도 사용할 수 있습니다. 이 값은 컴포넌트의 여러 렌더링 사이에서 유지됩니다.

    }
    return (
        <div>
            <label htmlFor="">
                아이디
                <input type="text" ref={idref}/>
            </label>
            <label htmlFor="">
                비밀번호
                <input type="password" ref={pwref}/>
            </label>
            <input type="text" ref={inputref}/>
            <button onClick={fncclick}>버튼</button>

        </div>
    );
}

export default RefOf;
