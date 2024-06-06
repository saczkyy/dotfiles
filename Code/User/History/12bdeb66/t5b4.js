function Details({data}){
    return (
        <div className="details">
          <div className="feelsLike">
            {data.main ? data.main.feels_like.toFixed() : "0"}°C
          </div>
          <div className="humidity">
            {data.main ? data.main.humidity : '0'}%
          </div>
          <div className="windSpeed">
            {data.wind ? data.wind.speed.toFixed() : '0'} KPH
          </div>
        </div>
    )
}

export default Details