import React, { useState } from 'react'


const Home = () => {
    const [count, setCount] = useState(0)

    


    return <div className="section">
        <div className="home">
            <h1 className="pageHeading">Home</h1>
            <h2>You Clicked {count} times</h2>
            <button onClick={() => setCount(count + 1)} >Add 1</button>
            <button onClick={() => setCount(count - 1)} >Minus 1</button>
        </div>
    </div>
}

export default Home