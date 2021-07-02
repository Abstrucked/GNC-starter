import React, { useState } from 'react';



function Example() {
  // Declare a new state variable, which we'll call "count"
  
    const [balance, setCount] = useState(0);
    const [todos, setTodos] = useState([{text: 'Learn Hooks', done: false}])

    return (
        <div>
            <p>You clicked {todos} times</p>
            <button onClick={() => setTodos()}>
                Click me
            </button>
        </div>
    );
}

export default Example;