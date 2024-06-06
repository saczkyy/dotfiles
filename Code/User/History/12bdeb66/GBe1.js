function Details({data}){
    return (
        <div className="details">
          <div className="feelsLike">
            <h2>Feels like</h2>
            {data.main ? data.main.feels_like.toFixed() : "0"}°C
          </div>
          <div className="humidity">
            <h2>Humidity</h2>
            {data.main ? data.main.humidity : '0'}%
          </div>
          <div className="windSpeed">
            <h2>Wind speed</h2>
            {data.wind ? data.wind.speed.toFixed() : '0'} KPH
          </div>
        </div>
    )
}

export default Details