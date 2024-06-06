function AdditionalInfo({data}){
    const dataToShow = [
        (data.rain['1h'] ? data.rain['1h'] : 
            (data.snow['1h'] ? data.snow['1h'] : null)),
        (data.rain['3h'] ? data.rain['3h'] : 
            (data.snow['3h'] ? data.snow['3h'] : null))
    ] 
    
    
    return (
        <div className="additional">
            <div id="1h">
                <h3 className="detailTitle">Last hour</h3>
                <h2 className="detailData">{data.main ? data.main.feels_like.toFixed() : "0"}°C</h2>
            </div>
            <div id="3h">
                <h3 className="detailTitle">Last 3 hours</h3>
                <h2 className="detailData">{data.main ? data.main.humidity : '0'}%</h2>
            </div>
        </div>
    )
}