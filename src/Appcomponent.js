import {Link, NavLink, useNavigate} from 'react-router-dom';
import React, {Outlet, createContext, useState, useEffect, useCallback, useReducer, useRef,} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import StateOfComponent from "./component/StateOfComponent";
import PropsOfComponent from "./component/PropsOfComponent";
import EventOfComponent from "./component/EventOfComponent";
import EventOfComponent2 from "./component/EventOfComponent2";
import EffectOfComponent from "./component/EffectOfComponent";
import CallbackOfComponent from "./component/CallbackOfComponent";
import MemoOfComponent from "./component/MemoOfComponent";
import ReducerOfComponent from "./component/ReducerOfComponent";
import ShoppingCart from "./component/ShoppingCart";
import TodoApp from "./component/TodoApp";
import ToastUI from "./component/ToastUI";

function Appcomponent() {
    let num = 10;
    let name = "고기천"

    const [intNum, setIntnum] = useState(0);
    const [message, setMessage] = useState('');

    const propsFunc = () => {
        alert("자식 컴포넌트의 버튼 클릭")
    }


    const addIntNum = () => {

        setIntnum(intNum + 1);


    }

    const minusIntNum = () => {
        setIntnum(intNum - 1)


    }
    const changeMessage = (text) => {
        setMessage(text)
    }


    return (
        <div>
{/*            <p>this is state of component</p>*/}
{/*            <StateOfComponent intNum={intNum} setIntnum={setIntnum} addIntNum={addIntNum}*/}
{/*                              minusIntNum={minusIntNum}></StateOfComponent>*/}
{/*            <p>this is propsofcomponent</p>*/}
{/*            <PropsOfComponent num={num} name={name} propsFunc={propsFunc}></PropsOfComponent>*/}

{/*            <input type="text" value={message}/>*/}
{/*            /!*<div content={message}></div>*!/*/}


{/*            <p>this is eventcomponent</p>*/}
{/*            <EventOfComponent message={message}*/}
{/*                              changeMessage={changeMessage}></EventOfComponent>*/}
{/*/!*            <p>this is eventcomponent2</p>*!/*/}

{/*/!*            <EventOfComponent2></EventOfComponent2>*!/*/}
{/*/!*<p>이펙트오브컴포넌트</p>*!/*/}
{/*/!*            <EffectOfComponent></EffectOfComponent>*!/*/}

{/*            <p>콜백오브콤포넌트</p>*/}
{/*            <CallbackOfComponent></CallbackOfComponent>*/}

{/*            <p>리듀서컴포넌트</p>*/}
{/*            <ReducerOfComponent></ReducerOfComponent>*/}

{/*            <p>메모컴포넌트</p>*/}
{/*<MemoOfComponent></MemoOfComponent>*/}






            <ShoppingCart></ShoppingCart>
            <TodoApp></TodoApp>
            <ToastUI></ToastUI>






        </div>



    );
}

export default Appcomponent;
