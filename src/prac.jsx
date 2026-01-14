import Counter from "./Counter"
import { useState } from "react"
function Countor (){
let [count, setCount] = useState(0)
//count is my value and it is stored in the useState which is my memory
let increment = () => {
    setCount(count + 1)
}

let decrement = () => {
    setCount(count - 1)
}
return(
    <>
    <h1>My tiny counter app</h1>
    <Counter
    count = {count}
    onIncrement={increment}
    onDecrement={decrement}
    />

    {/* additional settings */}
    <button onClick={() => setCount(0)}>reset</button>
    <button onClick={() => setCount(count + 10)}>Add 10</button>
    </>
)
}

export default Countor