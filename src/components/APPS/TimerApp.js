import React, {useState, useEffect } from 'react'


import bells from './Data/bells.wav'
// import clap from './Data/clap.wav'






const TimerApp = () => {
    // main timer variables 
    const [counter, setCounter] = useState(0)
    const [mins, setMins] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [start, setStart] = useState(false)
    // break variables 
    const [breaks, setBreaks] = useState(0)
    const [breakMins, setBreakMins] =useState(0)
    // const [breakCounter, setBreakCounter] = useState(0)
    // audio variables 
    const [ audio ] = useState(new Audio(bells))
    const [ playing, setPlaying ] = useState(false)

    
    
    // responsible for countdown timer 
    useEffect(() => {
        const timer = 
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
            return () => clearInterval(timer);
    },  [counter]);

    // responsible for interating minutes 
    useEffect(() => {
            counter === 0 && mins > 0 && setTimeout(() => setMins(mins - 1), setBreakMins(breakMins - 1), setCounter(59), 1000);
    },[counter, mins, breakMins])

    // sets playing flag to true if start flag is true 
   useEffect(() => {
       if(start === true){
           setPlaying(true)
        }
    },[start])
    
    // responsible for playing sound when timer is finished 
    useEffect(() => {
        if(playing === true && breakMins === 0 && counter === 0 ){
            audio.play()
        }
    })

    
 


   
    return(
        <div className="section">
            <h1>Timer App</h1>
            <div className="timer">
                <div>
                    <span>Break Time:</span><br />
                    <h3>{breaks} minutes</h3>   
                    <button onClick={() => setBreaks(breaks + 1)}>add 5 minutes</button>

                    {/* minus 5 minutes button doesn't show unless there is 5 minutes are more added first  */}
                    {breaks > 4 ? <button onClick={() => setBreaks(breaks - 5)}>minus 5 minutes</button> : null}
                     
                </div>
                <div>
                    <span>Timer:</span>
                    {counter < 10 ? <h3>{mins}:0{counter}</h3>:<h3>{mins}:{counter}</h3>}
                    {minutes < 5 ? null : <button onClick={() => {setMins(minutes-1); 
                        setBreakMins(breaks-1);  
                        setCounter(59); 
                        setStart(true)}}
                    >Start Timer</button>}<br />

                    <span>Break Time Left:</span><br />
                    {counter < 10 && breakMins > -1 ? <h3>{breakMins}:0{counter}</h3>: breakMins > -1 ? <h3>{breakMins}:{counter}</h3>:null}
                        
                    
                </div>
                <div> 
                    <span>Session Time:</span>
                    <h3>{minutes} minutes</h3>
                    <button onClick={() => setMinutes(minutes + 5) }>add 5 minutes</button>
                    {minutes > 4 ? <button onClick={() => setMinutes(minutes - 5)}>minus 5 minutes</button> : null}
                </div>
                <div>
                </div>
                
            </div>
        </div>
    )

}




export default TimerApp








