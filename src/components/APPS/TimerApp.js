import React, {useState, useEffect } from 'react'


import bells from './Data/bells.wav'
// import clap from './Data/clap.wav'






const TimerApp = () => {
    const [counter, setCounter] = useState(0)
    const [mins, setMins] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [start, setStart] = useState(false)
    const [breaks, setBreaks] = useState(0)
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
            counter === 0 && mins > 0 && setTimeout(() => setMins(mins - 1), setCounter(59), 1000);
    },[counter, mins])

    // sets playing flag to true if start flag is true 
   useEffect(() => {
       if(start === true){
           setPlaying(true)
        }
    },[start])
    
    // responsible for playing sound when timer is finished 
    useEffect(() => {
        if(playing === true && mins === 0 && counter === 0){
            audio.play()
            console.log('playing')
        }
    })

    // function button(){
    //     let btn = document.querySelector(".useBreakBtn")
    //     btn.classList.add("active")
    // }
    


   
    return(
        <div className="section">
            <h1>Timer App</h1>
            <div className="timer">
                <div>
                    <span>Break Time:</span><br />
                    <button clasName=".useBreakBtn" onClick={() => {
                        let btn = document.querySelector("useBreakBtn")
                        btn.classList.toggle("activeTimer")
                    }} >On Off</button>
                    <h3>{breaks} minutes</h3>   
                    <button onClick={() => setBreaks(breaks + 5)}>add 5 minutes</button>
                    {breaks > 4 ? <button onClick={() => setBreaks(breaks - 5)}>minus 5 minutes</button> : null}
                     
                </div>
                <div>
                    <span>Timer:</span>
                    {counter < 10 ? <h3>{mins}:0{counter}</h3>:<h3>{mins}:{counter}</h3>}
                    {minutes < 5 ? null : <button onClick={() => {setMins(minutes-1); setCounter(59); setStart(true)}}>Start Timer</button>}
                   
                    
                </div>
                <div> 
                    <span>Session Time:</span>
                    <h3>{minutes}</h3>
                    <button onClick={() => setMinutes(minutes + 5) }>add 5 minutes</button>
                    <button onClick={() => setMinutes(minutes - 5) }>minus 5 minutes</button>
                </div>
                <div>
                </div>
                
            </div>
        </div>
    )

}




export default TimerApp








