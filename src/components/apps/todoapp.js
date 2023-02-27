import React, { useState } from 'react';
import './todoapp.css'


function ToDoApp() {
    const [thing, setThing] = useState('');

    const [thingArr, setThingArr] = useState(
        localStorage.getItem('todolist') ? JSON.parse(localStorage.getItem('todolist')) : []
    );

    const AddThing = () => {
        if (thing.trim().length > 0) {
            setThingArr((prev) => {
                const newArr = [...prev, thing];
                localStorage.setItem('todolist', JSON.stringify(newArr));
                return newArr
            });
        }
        setThing('');
    }

    const RemoveThing = (item) => {
        setThingArr((prev) => {
            const newArr = prev.filter(pre => pre !== item);
            localStorage.setItem('todolist', JSON.stringify(newArr));
            return newArr;
        })
    }

    const ResetThing = () => {
        setThingArr([]);
        localStorage.removeItem('todolist');
    }

    const AddByEnter = (e) => {
        let key = e.key;
        if (key === 'Enter') {
            return AddThing();
        }
    }

    function EmptyToDo() {
        return (
            <div>
                Your list goes here...
            </div>
        )
    }

    function ToDoList() {
        return (
            <div>
                <div className="todo-removeall"><button onClick={ResetThing}>Remove All</button></div>
                {
                    JSON.parse(localStorage.getItem('todolist')).map((thing, index) => {
                        return (
                            <div className="todo-things" key={index}>
                                <div className="thing-name">{thing}</div>
                                <div className="thing-button">
                                    {/* <button className='todo-done'>Done</button> */}
                                    <button className='todo-remove' onClick={() => RemoveThing(thing)}>Remove</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div className="todo-main">
            <div className="sub-title">To-Do List</div>
            <div className="todo-content">
                <div className="todo-input">
                    Add Task:
                    <div>
                        <input type='text' placeholder='Type here...' onChange={(e) => setThing(e.target.value)} onKeyDown={AddByEnter} value={thing} />
                        <button onClick={AddThing}>Add</button>
                    </div>
                </div>
                <div className="todo-list">
                    {thingArr.length > 0 ? <ToDoList /> : <EmptyToDo />}
                </div>
            </div>
        </div>
    );
}

export default ToDoApp;