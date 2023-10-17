import {Link, NavLink} from 'react-router-dom';
import React, { Outlet,createContext,useState,useEffect,useCallback,useReducer, useRef,  } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
function ShoppingCart() {






const initialState = {
    items : [],
    total : 0

}

function cartReducer(state, action) {




    switch(action.type){
        case "ADD_ITEM" :
            return {items : [...state.items, action.item],
            total : state.total + action.item.price
            }

        case "REMOVE_ITEM" :
            const updatedItem = state.items.filter(item=>item.id!==action.itemId)
            const deleteItem = state.items.find(item=>item.id==action.itemId);

            return {
                items : updatedItem, total : state.total - deleteItem.price

            }


    }


    }



const [state,dispatch] = useReducer( cartReducer,initialState );



return (
        <div>

<h1>Shoppingcart</h1>
<ul>
    {state.items.map(item=>(  <li key={item.id}>${item.name} - ${item.price} <button onClick={()=>dispatch({
        type:"REMOVE_ITEM", itemId : item.id


        })}>상품제거</button></li>)



    )}

</ul>
<button onClick={()=>dispatch({
    type:"ADD_ITEM", item: {
        id: Date.now(), name: "random Item", price: 10
    }

})}>상품추가</button>


            <p>{state.total}</p>

        </div>
    );
}

export default ShoppingCart;
