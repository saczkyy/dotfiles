function Details({data}){
    return (
        <div className="details">
          <div className="feelsLike">
            <h3>Feels like</h3>
            <h2>{data.main ? data.main.feels_like.toFixed() : "0"}°C</h2>
          </div>
          <div className="humidity">
            <h3>Humidity</h3>
            <h2>{data.main ? data.main.humidity : '0'}%</h2>
          </div>
          <div className="windSpeed">
            <h3>Wind speed</h3>
            <h2>{data.wind ? data.wind.speed.toFixed() : '0'} KPH</h2>
          </div>
        </div>
    )
}

export default Details