import "@fontsource/rubik";
import { useState } from "react";


function MainInfo({data}){
    const utcH = new Date().getUTCHours()
    const minutes = new Date().getUTCMinutes()
    const localTime = `${utcH + (data.timezone / 3600)}:${minutes}`
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        // Set up a timer to refresh the component every minute
        const intervalId = setInterval(() => {
          // Your logic to refresh the component goes here
          // For example, you might fetch updated data or perform any other necessary actions
    
          // For demonstration purposes, let's toggle the focus status every minute
          setIsFocused((prevIsFocused) => !prevIsFocused);
        }, 60000); // 60000 milliseconds = 1 minute
    
        // Clean up the interval when the component is unmounted
        return () => clearInterval(intervalId);
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