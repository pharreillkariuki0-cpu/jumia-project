import Counter from "./Counter";
import { useState } from "react";
function App(){
    const [count, setCount] = useState(0);
    //count is our value and setCount is our function. Using the useState we have given our count an initial value of (0).
    //Our function setCount is the one that we use to increase or decrease the values in the useState memory.
    //we've assigned increment and decrement to functions that increase or decrease the count
    let increment = () => {
        setCount(count + 1);
    }//This variable is assigned to an arrow function that calls the setCount function which increases the count

    let decrement = () => {
        setCount(count - 1);
    }

    return(
        <>
        <div className="app">
            <h1>Tiny Counter App</h1>
            <Counter
            count={count}
            onIncrement={increment}
            onDecrement={decrement}/>
            <div className="extra-controls">
                <button onClick={() => setCount(0)}>Reset</button>
                <button onClick={() => setCount(count + 10)}>Add 10</button>
            </div>
        </div>
        </>
    )
}

export default App