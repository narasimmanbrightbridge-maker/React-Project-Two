import { useState, useEffect } from "react";

function Counts() {
    const [count, setcount] = useState(0);

    useEffect(() => {
        console.log(`The Count is changed to: ${count}`);
        return () => console.log("clean up previous effects...");
    },[count]);
    return (
        <>
        <div><h2>Current Count: {count}</h2></div>
        <button onClick={() => setcount(count + 1)}> Click</button>
        </>
    );
}

export default Counts