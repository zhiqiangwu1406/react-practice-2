import { useState } from "react";



const SimpleCounter = () => {

    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(c => c + 1)
    }

    return ( <>
                <button className="btn" onClick={handleClick}>Click me to incrase count!!</button>
                <p>Count : {count}</p>
            </> );
}
 
export default SimpleCounter;