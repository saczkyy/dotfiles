import "@fontsource/rubik";
import { useEffect, useState } from "react";


function MainInfo({data}){
    const utcH = new Date().getUTCHours()
    const minutes = new Date().getUTCMinutes()
    const localTime = `${utcH + (data.timezone / 3600)}:${minutes}`

    useEffect(() => {

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