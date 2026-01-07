function Counter({ count, onIncrement, onDecrement}){
    return(
        <>
        <div className="counter">
            <h2>Count: {count}</h2>
            <div className="buttons">
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>
            <p className="hint">Click the buttons to change the number</p>
        </div>
        </>
    )
}

/*'cd jumia'
'git init'
'git add .'
git comment -m 'initial commit'
"git branch -M main"
"git remote add origin link of your repo"
'git push -u origin main'*/
export default Counter