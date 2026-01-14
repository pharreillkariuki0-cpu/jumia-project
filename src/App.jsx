import Counter from "./Counter";
import { useState } from "react";
function App(){
    let [count, setCount] = useState(0);
    //Counter is one of the components that we have imported so that we can be able to use in our component.
    // We have also imported usestate, our temporary memory for count
    //count is our value and setCount is our function. Using the useState we have given our count an initial value of (0).
    //Our function setCount is the one that we use to increase or decrease the values in the useState memory.
    //in short our usestate is updated by the setCount function
    //we've assigned increment and decrement to functions that update the usestate, by increasing and decreasing the count of which is the value of the usestate
    let increment = () => {
        setCount(count + 1);
    }//This variable is assigned to an arrow function that calls the setCount function which increases the count and the count is increased in the usestate
    //useState acts as the memory of our count hence if we increase our count we also increase the value in the useState. Hence you will end up noticing that count is equal to the the value in our useState
    //you will note that when you press the onincrement button for example increment is called of which is assigned to a function secount that increases the count by one ,this is also what happens when the onDecrement button is pressed.
    //if you look closely you'll notice that we have assigned the parameters of counter component to app values and variables
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
                <button onclick={() => setCount(count + 10)}>Add 10</button>
            </div>
        </div>
        </>
    )
}

export default App