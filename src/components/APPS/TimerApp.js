import React, {useState, useEffect } from 'react'

import bells from './Data/bells.wav'
import clap from './Data/clap.wav'




const TimerApp = () => {
    const [counter, setCounter] = useState(10)
    const [mins, setMins] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [breaks, setBreaks] = useState(15)
    const [ audio ] = useState(new Audio(bells))
    
    

    useEffect(() => {
        const timer = 
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
            return () => clearInterval(timer);
    },  [counter]);

    useEffect(() => {
            counter === 0 && mins > 0 && setTimeout(() => setMins(mins -1), setCounter(59), 1000);
    },[counter, mins])

  

   

  
    
   
    return(
        <div className="section">
            <h1>Timer App</h1>
            <div className="timer">
                <div>
                    <span>Break Time:</span>
                    <h3>{breaks} minutes</h3>   
                    <button onClick={() => setBreaks(breaks + 5)}>add 5 minutes</button>
                    <button onClick={() => setBreaks(breaks - 5)}>minus 5 minutes</button> 
                </div>
                <div>
                    <span>Timer:</span>
                    {counter < 10 ? <h3>{mins}:0{counter}</h3>:<h3>{mins}:{counter}</h3>}
               
                    <button onClick={() => {setMins(minutes); setCounter(59)}}>Start Timer</button>
                </div>
                <div> 
                    <span>Session Time:</span>
                    <h3>{minutes}</h3>
                    <button onClick={() => setMinutes(minutes + 5)}>add 5 minutes</button>
                    <button onClick={() => setMinutes(minutes - 5)}>minus 5 minutes</button>
                </div>
                <button onClick={() => audio.play(audio)}>audio</button>
            </div>
        </div>
    )

}




export default TimerApp