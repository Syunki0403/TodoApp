import React, { useEffect, useReducer } from 'react';

const APP_KEY = 'app-state';

export default function TodoApp({ task, tasks, inputTask, addTask, redirectToError }) {
    const appState = localStorage.getItem(APP_KEY);
    const initialState = appState ? JSON.parse(appState) : {
        tasks: []
    };

    console.log(appState);

    return (
        <div>
            <input type="text" onChange={(e) => inputTask(e.target.value)} />
            <input type="button" value="add" onClick={() => addTask(task)} />
            <ul>
                {tasks.map(function (item, i) {
                    return (<li key={i}>{item}</li>);
                })}
            </ul>
            <button onClick={() => redirectToError()}>エラーページへ</button>
        </div>
    );
}