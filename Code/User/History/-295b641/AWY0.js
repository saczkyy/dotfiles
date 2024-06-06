import "@fontsource/rubik";


function MainInfo({data}){
    const utcH = new Date().getUTCHours()
    const minutes = new Date().getUTCMinutes()
    const localTime = `${utcH + (data.timezone / 3600)}:${minutes}`

    return (
        <div className="info">
            <h2>{data.name ? data.name : 'null'},    {data.name ? localTime : 'null'}</h2>
            <div>
                <h1>{data.main ? data.main.temp.toFixed() : '0'}°C</h1>
                <h3>{data.weather ? data.weather[0].main : 'null'}</h3>
            </div>
        </div>
    )
}

export default MainInfo