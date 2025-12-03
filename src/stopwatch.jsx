import {  useEffect, useState } from "react";

const StopWatch = () => {
    
    let [seconds,setSeconds] = useState(0);
    let [minutes,setMinutes] = useState(0);
    let [hours,setHours] = useState(0);
    let [milliseconds, setMilliseconds] = useState(0);
    let [intervalId, setIntervalId] = useState(null);
    let [msintervalId, setMsIntervalId] = useState(null);

    let startButtonTag;
    useEffect(()=> {
        startButtonTag = document.getElementsByClassName("startBtn")[0];
    }, )

    const handleStart = () => {
        startButtonTag.disabled = true;
        intervalId = setInterval(() => {
            if (seconds<60) {
                setSeconds(seconds++);
            };

            if (seconds >= 60) {
                seconds = 0;
                setMinutes(minutes++);
            }
            
            if (minutes >= 60) {
                minutes = 0;
                setHours(hours++);
            }

                // hours === 0 && setHours("00");
                // minutes === 0 && setMinutes("00");
                // seconds === 0 && setSeconds("00");

            (hours > 0 && hours < 10 ) ? setHours("0"+hours) : setHours(hours);
            (minutes > 0 && minutes < 10 ) ? setMinutes("0"+minutes) : setMinutes(minutes);
            (seconds > 0 && seconds < 10 ) ? setSeconds("0"+seconds) : setSeconds(seconds)


            setIntervalId(intervalId);


        }, 1000);

        msintervalId = setInterval(() => {
            setMilliseconds(milliseconds++);
            if(milliseconds >= 1000) {
                milliseconds = 0;
            }

            milliseconds < 10 ? setMilliseconds("00"+milliseconds): 
            milliseconds >10 && milliseconds < 100 ? setMilliseconds('0'+milliseconds) : 
            setMilliseconds(milliseconds);

            setMsIntervalId(msintervalId);
        }, 1)
    }
            hours === 0 && setHours("00");
            minutes === 0 && setMinutes("00");
            seconds === 0 && setSeconds("00");
            milliseconds === 0 && setMilliseconds("000");

            
    
    const handleStop = () => {
        startButtonTag.disabled = false;
        clearInterval(intervalId);
        clearInterval(msintervalId);
    }

    const handleReset = () => {
        startButtonTag.disabled = false;
        clearInterval(intervalId);
        clearInterval(msintervalId);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setMilliseconds(0);
    }
    

    return (<div className="flex flex-col  border-2 items-center justify-center min-h-[100vh] max-w-[">
                <div className="border-2 p-10 rounded-2xl flex flex-col gap-8">
                    <div className="text-9xl font-semibold">{hours}:{minutes}:{seconds}<span className="text-5xl">:{milliseconds}</span></div>
                    <div className="flex gap-3 justify-center">
                        <button className="stopwatchBtn !bg-green-600 startBtn" onClick={handleStart}>Start</button>
                        <button className="stopwatchBtn !bg-red-600" onClick={handleStop}>Stop</button>
                        <button className="stopwatchBtn" onClick={handleReset}>Reset</button>
                    </div>
                </div>
            </div> );
}
 
export default StopWatch;