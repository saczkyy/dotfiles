function Details({data}){
    return (
        <div className="details">
          <div className="feelsLike">
            {data.main.feels_like.toFixed()}°C
          </div>
          <div className="humidity">
            {data.main.humidity}
          </div>
          <div className="windSpeed">
            {data.wind.speed.toFixed()}
          </div>
        </div>
    )
}

export default Details