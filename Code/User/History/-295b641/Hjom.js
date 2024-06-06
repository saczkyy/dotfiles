import "@fontsource/rubik";
import { useEffect, useState } from "react";


function MainInfo({data}){
    const utcH = useState(new Date().getUTCHours())
    const minutes = useState(new Date().getUTCMinutes())
    const localTime = `${utcH + (data.timezone / 3600)}:${minutes}`

    useEffect(() => {
        const intervalId = setInterval(() => {
            
        }, 1000); // 60000 milliseconds = 1 minute
    }, []);

    return (
        <div className="info">
            <h2>{data.name ? data.name : 'null'}</h2>
            <div>
                <h1>{data.main ? data.main.temp.toFixed() : '0'}°C</h1>
                <h3>{data.weather ? data.weather[0].main : 'null'}</h3>
            </div>
            <h4>{data.name ? localTime : 'null'}</h4>
        </div>
    )
}

export default MainInfo