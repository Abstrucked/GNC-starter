import React, { useState } from 'react';



function Example() {
  // Declare a new state variable, which we'll call "count"
  
    const [balance, setCount] = useState(0);
    

    return (
        <div>
            <p>You clicked {balance} times</p>
            <button onClick={() => setTodos(balance + 10)}>
                Click me
            </button>
        </div>
    );
}

export default Example;