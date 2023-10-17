import React, { useReducer } from 'react';

const initialState = {
    items: [],
    total: 0
};

function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                items: [...state.items, action.item],
                total: state.total + action.item.price
            };
        case 'REMOVE_ITEM':
            const updatedItems = state.items.filter(item => item.id !== action.itemId);
            const removedItem = state.items.find(item => item.id === action.itemId);
            return {
                items: updatedItems,
                total: state.total - removedItem.price
            };
        default:
            return state;
    }
}

function ShoppingCart() {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {state.items.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                        <button onClick={() => dispatch({ type: 'REMOVE_ITEM', itemId: item.id })}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            <p>Total: ${state.total}</p>
            <button onClick={() => dispatch({
                type: 'ADD_ITEM',
                item: { id: Date.now(), name: 'Random Item', price: 10 }
            })}>
                Add Random Item
            </button>
        </div>
    );
}

export default ShoppingCart;
