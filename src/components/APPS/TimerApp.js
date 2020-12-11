import React, { useState } from 'react'



let nowTime = setInterval(function(){
    let now = new Date().getTime()
    // console.
}, 1000)

const TimerApp = () => {
    const [ lunch, setLunch ] = useState(5)
    
    const [ session, setSession ] = useState(25)
    
    console.log({lunch},{session})
    return(
        <div className="section">
            <h1>Timer App</h1>
            <div className="timer">
                <div><span>Break Time:</span></div>
                <div>
                    <span>Timer:</span>
                    <h3>{session}</h3>
                </div>
                <div> 
                    <span>Session Time:</span>
                    <button onClick={() => setLunch(lunch + 5)}>add time</button>
                    <button onClick={() => setLunch(lunch - 5)}>minus time</button>
                    <button onClick={() => console.log(nowTime)}>asdafs</button>
                   
                </div>
                
                
               
            </div>
        </div>
    )
}

export default TimerApp