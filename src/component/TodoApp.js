import React, { useReducer } from 'react';

const initialState = {
    tasks: [],
    nextTaskId: 1
};

function tasksReducer(state, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, { id: state.nextTaskId, text: action.text, completed: false }],
                nextTaskId: state.nextTaskId + 1
            };
        case 'TOGGLE_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.id ? { ...task, completed: !task.completed } : task
                )
            };
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.id)
            };
        default:
            return state;
    }
}

function TodoApp() {
    const [state, dispatch] = useReducer(tasksReducer, initialState);

    const handleAddTask = text => {
        dispatch({ type: 'ADD_TASK', text });
    };

    const handleToggleTask = id => {
        dispatch({ type: 'TOGGLE_TASK', id });
    };

    const handleDeleteTask = id => {
        dispatch({ type: 'DELETE_TASK', id });
    };

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {state.tasks.map(task => (
                    <li key={task.id}>
                        <span
                            style={{textDecoration: task.completed ? 'line-through' : 'none'}}
                            onClick={() => handleToggleTask(task.id)}
                        >
                            {task.text}
                        </span>
                        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <AddTaskForm onAddTask={handleAddTask} />
        </div>
    );
}

function AddTaskForm({ onAddTask }) {
    const [text, setText] = React.useState('');

    const handleSubmit = e => {
        e.preventDefault();
        onAddTask(text);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="New Task"
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default TodoApp;
