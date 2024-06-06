function AdditionalInfo({data}){
    
    
    
    return (
        <div className="additional">
          <div id="feelsLike">
            <h3 className="detailTitle">Feels like</h3>
            <h2 className="detailData">{data.main ? data.main.feels_like.toFixed() : "0"}°C</h2>
          </div>
          <div id="humidity">
            <h3 className="detailTitle">Humidity</h3>
            <h2 className="detailData">{data.main ? data.main.humidity : '0'}%</h2>
          </div>
        </div>
    )
}