import "@fontsource/rubik";


function MainInfo({data}){
    const utc = new Date().getUTCMilliseconds()
    const localTime = null

    return (
        <div className="info">
            <h2>{data.name ? data.name : 'null'}</h2>
            <div>
                <h1>{data.main ? data.main.temp.toFixed() : '0'}°C</h1>
                <h3>{data.weather ? data.weather[0].main : 'null'}</h3>
            </div>
            <h2>{data.name ? utc : 'null'}</h2>
        </div>
    )
}

export default MainInfo