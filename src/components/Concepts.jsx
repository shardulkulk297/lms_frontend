import React from 'react'
import { useState } from 'react';
const Concepts = () => {

    let [count, setCount] = useState(0);
    let [name, setName] = useState("")
    let [showWelcome, setShowWelcome] = useState(false);
    let [ipl, setIpl] = useState(["CSK", "MI", "RCB"]);

    const incr = () => {
        setCount(count + 1);
    }
    const decr = () => {
        setCount(count - 1)
    }
    const welcome = () => {
        setShowWelcome(true)

    }
    return (
        <div>
            <h1>Hello React!!</h1>
            {count}
            <button onClick={() => incr()}>Increment</button> <br></br>
            <button onClick={() => decr()}>Decrement</button><br></br>

            <label htmlFor="">Enter Name: </label><br></br>
            <input type="text" onChange={(e) => setName(e.target.value)} /><br></br>
            <button onClick={() => welcome()}>Submit</button><br></br>
            <br />
            {showWelcome == true ? <span>Welcome {name}</span> : ""}

            <h2>Mapping of arrays</h2>
            {
                ipl.map((e)=>(
                    <li key={e}>{e}</li>
                ))
            }
        </div>
    )
}

export default Concepts