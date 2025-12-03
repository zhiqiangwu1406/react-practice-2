import { useEffect, useState } from "react";


const Weather = () => {
    let [myObj,setObj] = useState({});
    let [temp,setTemp] = useState("");
    let [tempUnit,setTempUnit] = useState("");
    let [time,setTime] = useState("");
    let [currenttime,setCurrentTime] = useState("");
    let [error,setError] = useState(null);
    const url = "https://api.open-meteo.com/v1/forecast?latitude=16.8053&longitude=96.1561&hourly=temperature_2m&current=temperature_2m&timezone=auto";
    const [click,setClick] = useState(false)
    
    useEffect(()=>{
        const function1 = async () => {
            try{
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 5000);
                const response = await fetch(url, { signal: controller.signal })
                clearTimeout(timeoutId);
                if (!response.ok) {
                    throw new Error (`Failed to fetch from server`);
                }
                const getData = await response.json();
                setObj(getData);
                const Temperature = getData.current.temperature_2m;
                const TemperatureUnit = getData.current_units.temperature_2m;
                const time = getData.current.time;
                setTemp(Temperature);
                setTempUnit(TemperatureUnit);
                setTime(time)
            }
            catch(e){
                if (e.name === "AbortError"){
                    setError(`Request Time out: ${e.name}`);
                } else {
                    setError(e.message);
                }
                
            }
        }
        function1()
        setClick(false)
        
    },[click]);

    
    const latitude = myObj.latitude;
    const longitude = myObj.longitude;
    const timezone = myObj.timezone;

    
    
    setInterval(
        ()=>{ const tempo =  new Date ().toTimeString();
            setCurrentTime(tempo)
        }, 1000
    );

 
    

      


    return ( <div className="h-[100vh] bg-blue-300">
        <div className="text-3xl text-center p-5">latidude: {latitude} , longitude: {longitude}</div>
        <div className="text-3xl text-center p-5">{timezone}</div>
        {currenttime && <div className="text-3xl text-center p-5">Current Time: {currenttime}</div>}
        <div className="text-3xl text-center p-5">Updated at: {time}</div>
        

       <div className="text-6xl text-center p-10 font-semibold">{temp}{tempUnit}</div>

       <button className="btn absolute top-1 right-1 bg-white" onClick={()=> setClick(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M3 12q0-3.75 2.625-6.375T12 3V2q0-.3.275-.45t.525.05l3.125 2.35q.4.3.4.8t-.4.8L12.8 7.9q-.25.2-.525.05T12 7.5v-1q-2.275 0-3.888 1.613T6.5 12q0 .825.238 1.588T7.4 15q.275.4.225.863T7.2 16.6l-.85.625q-.45.35-1 .275t-.875-.55q-.725-1.075-1.1-2.325T3 12m9 9v1q0 .3-.275.45t-.525-.05l-3.125-2.35q-.4-.3-.4-.8t.4-.8L11.2 16.1q.25-.2.525-.05t.275.45v1q2.275 0 3.888-1.613T17.5 12q0-.825-.238-1.588T16.6 9q-.275-.4-.225-.862T16.8 7.4l.85-.625q.45-.35 1-.263t.875.538q.7 1.075 1.088 2.325T21 12q0 3.75-2.625 6.375T12 21"/></svg>
       </button>
        {error && <div className="text-6xl text-center p-10 font-semibold">{error}</div>}

    </div> );
}
 
export default Weather;